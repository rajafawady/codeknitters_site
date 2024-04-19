"use client";
import React, { useEffect } from 'react';
import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Breadcrumb from '@/components/Common/Breadcrumb';

const AboutPage = () => {
  
  return (
    <div>
      <Breadcrumb pageName="About Page" />
      <AboutSectionOne />
      <AboutSectionTwo />
    </div>
  );
};

export default AboutPage;
