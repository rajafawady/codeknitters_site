"use client";
import { useState } from "react";
//import {sendEmail} from '@/components/Mail/sendEmail';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message:''
  });
  const isFormValid=(formData.name && formData.email && formData.message);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm=()=>{
    if(formData.name && formData.email && formData.message){
      const senderName=formData.name;
      const senderEmail=formData.email;
      const senderMessage=senderName+formData.message;
      try{
        //sendEmail('Check Email',senderMessage,senderEmail,'info@codeknitters.co');
      }catch(e){
        console.log(e);
      }
      
    }
    
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 border-b-2 border-primary dark:border-white">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[10%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Send us a Message
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className={`rounded-md bg-transparent py-4 px-8 text-base font-semibold text-primary dark:text-white dark:border-white border-2 border-primary duration-300 ease-in-out ${isFormValid?'hover:bg-primary/80 hover:text-white':''}`} onClick={submitForm} type="button" disabled={!isFormValid}>
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
