import Image from "next/image";
import { useTheme } from "next-themes";
const AboutSectionOne = () => {
  const { theme, setTheme } = useTheme();
  return (
    <section id="mission" className="flex flex-col items-center justify-center h-[90vh] sm:p-3 relative overflow-hidden">
      <Image className=" absolute m-auto rounded-lg opacity-20" src={(theme==='dark')?'/images/about/missionBG2.svg':'/images/about/missionBG.svg'} alt="image" width="300" height="300"/>
  <div className="text-center relative z-10 ">
  
    <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
    <div className="text-lg mb-8 max-w-md mx-auto ">
      <p>
        To empower the clients through innovative mobile apps that enhance user experiences, leverage AI, and drive industry transformation.
      </p>
    </div>
  </div> 
  <a href="#vision" className="mt-4 border-2 border-dark dark:border-white animate-bounce p-2 rounded-xl relative z-10">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
    </svg>
  </a>
</section>
  );
};

export default AboutSectionOne;
