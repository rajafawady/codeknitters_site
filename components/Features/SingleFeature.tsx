import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { image, title, paragraph } = feature;
  return (
    <div className={`group w-full [perspective:1000px]`}>
      <div className="relative wow fadeInUp shadow-lg p-4 rounded-xl dark:border-gray-200 transition-all duration-500 [transform-style:preserve-3d] xl:group-hover:[transform:rotateY(180deg)] lg:group-hover:[transform:rotateY(180deg)] h-fit" data-wow-delay=".15s">
        <div className="inset-0 w-full [backface-visibility:hidden]">
            <div className="mb-10 flex items-center justify-center rounded-lg text-primary">
              <Image className="m-auto rounded-lg" src={image} alt="image" width="100" height="100"/>
            </div>
            <h3 className="mb-5 text-xl text-center font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </h3>
            <p className="pr-[10px] text-center text-base font-medium leading-relaxed text-body-color">
              {paragraph}
            </p>



            <div className="xl:hidden lg:hidden">
            <div className="flex-col items-center justify-center space-y-4 sm:flex sm:space-y-3 sm:space-x-0 sm:mt-2">
              <a href="#" className="w-full sm:w-[15rem] sm:h-[3rem] bg-dark hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:focus:ring-gray-700">
              <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="dark" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
              <div className="text-left">
                  <div className="mb-1 text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">App Store</div>
              </div>
            </a>
          <a href="#" className="w-full sm:w-[15rem] sm:h-[3rem] bg-dark hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:focus:ring-gray-700 ">
            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="dark" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div className="text-left">
                <div className="mb-1 text-xs">Get in on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
          </a>
         </div>
         </div>


        </div>

      <div className="absolute inset-0 w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
            
        <div className="w-full h-full p-4 text-center bg-black border border-gray-200 rounded-lg shadow sm:p-8 dark:border-gray-700">
            <div className="mb-10 flex items-center justify-center rounded-lg text-primary">
              <Image className="m-auto rounded-lg" src={image} alt="image" width="100" height="100"/>
            </div>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="dark" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
              <div className="text-left">
                  <div className="mb-1 text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">App Store</div>
              </div>
            </a>
          <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="dark" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div className="text-left">
                <div className="mb-1 text-xs">Get in on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
          </a>
    </div>
</div>

        </div>

      </div>




    </div>
  );
};

export default SingleFeature;
