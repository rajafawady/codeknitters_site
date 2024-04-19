import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const BlogMain = () => {
  return (
    <section id="blog" className="mt-5">
      <div className="container">
        <SectionTitle
          title="We're Code Knitters"
          paragraph="Our team is a dynamic and diverse group of creative minds, tech enthusiasts, and problem solvers, committed to delivering cutting-edge mobile applications that push boundaries and exceed expectations. With a shared passion for innovation and a relentless drive for excellence, we collaborate seamlessly to craft unique and user-centric mobile solutions tailored to your business needs. Our talented developers, designers, and project managers bring their expertise and experience to every project, ensuring that we deliver top-notch apps that stand out in the ever-evolving digital landscape. Together, we are dedicated to transforming your ideas into reality and taking your business to new heights through the power of mobile technology. Join us on this exciting journey of success and innovation!"
          center
          
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogMain;
