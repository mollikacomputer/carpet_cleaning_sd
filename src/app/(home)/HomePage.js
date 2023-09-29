import React from 'react';
import HeroSection from './HeroSection';
import Comments from './Comments';
import CountUpPage from './CountUpPage';

const HomePage = async() => {
    return (
        <div>
            <HeroSection/>
            <Comments/>
            <h2 className='text-center text-3xl font-bold pb-12' >Our Company Status</h2>
            <CountUpPage/>
        </div>
    );
};

export default HomePage;