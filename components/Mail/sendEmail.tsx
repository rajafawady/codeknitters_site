/*import nodemailer from 'nodemailer';

export const sendEmail = async (
  subject: string,
  message: string,
  send_to: string,
  sent_from: string
): Promise<boolean> => {
  const transporter = nodemailer.createTransport({
    service: 'mail.codeknitters.co', // Outlook SMTP server
    auth: {
      user: 'info@codeknitters.co',
      pass: 'codeknitters@321',
    },
  });

  const options: nodemailer.SendMailOptions = {
    from: sent_from,
    to: send_to,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(options);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

*/