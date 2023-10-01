import React from 'react';
import HomePage from './HomePage';
import HeroSlider from './HeroSlider';
import EmailContact from '@/components/EmailContact';

const page = () => {
  return (
    <div>
      <HeroSlider/>
      <HomePage/>
      <EmailContact/>
    </div>
  );
};

export default page;
