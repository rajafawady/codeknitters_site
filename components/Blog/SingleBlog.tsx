import { Blog } from "@/types/blog";
import Image from "next/image";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark mb-3 py-5"
        data-wow-delay=".1s"
      >
        <div className="relative block h-[220px] w-[210px] m-auto">
          <Image src={image} alt="image" fill className="rounded-full" />
        </div>
        <div className="sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <div className="flex items-center">
              <div className="w-full text-center ">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
