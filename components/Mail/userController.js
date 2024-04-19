const { body, validationResult } = require("express-validator");
const pool = require("./../config/db");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/sendEmail");
const api_server_path = process.env.API_SERVER_PATH;
const server_path = process.env.SERVER_PATH;
const createConfirmationMessage = require("../utils/confirmRegisterEmailTemplate");
const generateToken = require("../utils/generateToken");

const checkEmail = async (value, { req }) => {
  if (value === "") {
    throw new Error("Email is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    throw new Error("Invalid format for email address.");
  }

  return true;
};
module.exports.load = async (req, res) => {
  let newUser = await pool.query(
    "INSERT INTO users ( plan) VALUES ($1) RETURNING *",
    ["free"]
  );

  if (newUser.rows.length == 1) {
    res.status(200).send({
      status: true,
      msg: "User created successfully.",
      user_id: newUser.rows[0].id,
      plan: newUser.rows[0].plan,
      verify: false,
      registered: newUser.rows[0].confirmed_new,
    });
  } else {
    res.status(503).send({ status: false, msg: "Unable to register user." });
  }
};

module.exports.register = async (req, res) => {
  await body("email").custom(checkEmail).run(req);
  await body("password", "Password is required.").notEmpty().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      msg: "Unable to register user.",
      errors: errors.array(),
    });
  }

  const { user_id, email, password } = req.body;
  console.log(user_id);
  const registeration_token = generateToken(password);

  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length > 0) {
      return res
        .status(401)
        .json({ status: false, msg: "User already exist!" });
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);
    //if there is a chat history
    if (user_id) {
      let updateUser1 = await pool.query(
        " UPDATE users SET email = $1, password = $2 , plan=$3,token=$5 WHERE id=$4",
        [email, bcryptPassword, "free", user_id, registeration_token]
      );

      if (!updateUser1) {
        return res
          .status(503)
          .send({ status: false, msg: "Unable to register user." });
      }
      const send_to = req.body.email;
      const sent_from = process.env.EMAIL_USER;
      const subject = "Psycho AI - Please confirm your registration";
      const link = `${server_path}/api/auth/verify/${registeration_token}`;
      const message = createConfirmationMessage(link);

      await sendEmail(subject, message, send_to, sent_from);

      return res.status(200).json({
        status: true,
        msg: "User register successfully.",
        token: registeration_token,
        plan: "free",
        verify: false,
        registered: true,
      });

      //if there is no chat history
    } else {
      let newUser = await pool.query(
        "INSERT INTO users ( email, password,token,plan) VALUES ($1, $2,$3,$4) RETURNING *",
        [email, bcryptPassword, registeration_token, "free"]
      );

      if (newUser.rowCount !== 1) {
        return res
          .status(403)
          .json({ status: false, msg: "Unable to register user.3" });
      }

      const send_to = req.body.email;
      const sent_from = process.env.EMAIL_USER;
      const subject = "Psycho AI - Please confirm your registration";
      const link = `${server_path}/api/auth/verify/${registeration_token}`;
      const message = createConfirmationMessage(link);

      await sendEmail(subject, message, send_to, sent_from);

      return res.status(200).json({
        status: true,
        msg: "User register successfully.",
        token: registeration_token,
        plan: newUser.rows[0].plan,
        verify: false,
        registered: true,
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports.update_password = async (req, res) => {
  await body("current_password", "Current Password is required.")
    .notEmpty()
    .run(req);

  await body("new_password", "New Password is required.").notEmpty().run(req);

  const { user_id, current_password, new_password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      user_id,
    ]);

    if (user.rows.length > 0) {
      const validPassword = await bcrypt.compare(
        current_password,
        user.rows[0].password
      );

      if (!validPassword) {
        return res
          .status(401)
          .json({ status: false, msg: "Invalid Current Password." });
      } else {
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(new_password, salt);
        let updateUser1 = await pool.query(
          " UPDATE users SET password = $1  WHERE id=$2",
          [bcryptPassword, user_id]
        );
        if (updateUser1.rowCount == 1) {
          return res
            .status(200)
            .json({ status: true, msg: "Password updated successfully." });
        } else {
          res
            .status(503)
            .send({ status: false, msg: "Error while updating password." });
        }
      }
    } else {
      res
        .status(503)
        .send({ status: false, msg: "Error while updating password." });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports.update_profile = async (req, res) => {
  await body("first_name", "First name is required.").notEmpty().run(req);

  await body("last_name", "Last name is required.").notEmpty().run(req);

  const { user_id, first_name, last_name } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      user_id,
    ]);

    if (user.rows.length > 0) {
      let updateUser1 = await pool.query(
        " UPDATE users SET first_name = $1, last_name = $2  WHERE id=$3",
        [first_name, last_name, user_id]
      );
      if (updateUser1.rowCount == 1) {
        return res
          .status(200)
          .json({ status: true, msg: "Profile updated successfully." });
      } else {
        res
          .status(503)
          .send({ status: false, msg: "Error while updating profile." });
      }
    } else {
      res
        .status(503)
        .send({ status: false, msg: "Error while updating profile." });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports.verification_check = async (req, res) => {
  const { user_id } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      user_id,
    ]);

    if (user.rows.length > 0) {
      let registered = false;
      if (user.rows[0].email != null) {
        registered = true;
      }

      return res.status(200).json({
        status: true,
        data: user.rows[0].confirmed_new,
        registered: registered,
      });
    } else {
      res.status(503).send({ status: false, msg: "Error while getting data." });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports.resend_verification_email = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(404).json({ status: false, msg: "User not found!" });
    }

    const registeration_token = generateToken(user.rows[0].password);

    const updateTokenQuery = await pool.query(
      "UPDATE users SET token = $1 WHERE email = $2 RETURNING *",
      [registeration_token, email]
    );

    if (updateTokenQuery.rows.length === 0) {
      return res
        .status(503)
        .json({ status: false, msg: "Unable to update token." });
    }

    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const subject = "Psycho AI - Please confirm your registration";
    const link = `${server_path}/api/auth/verify/${registeration_token}`;
    const message = createConfirmationMessage(link);

    await sendEmail(subject, message, send_to, sent_from);

    return res.status(200).json({
      status: true,
      msg: "Verification email sent successfully.",
      token: registeration_token,
      plan: updateTokenQuery.rows[0].plan,
      verify: false,
      registered: true,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
