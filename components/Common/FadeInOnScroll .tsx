import React,{useEffect} from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function FadeInOnScroll({children}) {
    useEffect(() => {
        AOS.init({
            duration:800,
            once:false,
        });
      }, []);


  return (
    <div>
      {children}
    </div>
  );
;}
