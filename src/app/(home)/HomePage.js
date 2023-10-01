import React from 'react';
import Comments from './Comments';
import CountUpPage from './CountUpPage';

import SingleService from '../services/SingleService';
import getServices from '@/utils/getServices';


const HomePage = async() => {
    const services = await getServices();
    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-semibold text-center my-16'> Our Services</h2>
            <div className='flex md:flex-wrap justify-between' >
            {services.slice(0,3).map((service) => (
            <SingleService key={service.id} service={service}>
            </SingleService>
            ))}
            </div>
            <h2>Show All services</h2> 
            <Comments/>
            <h2 className='text-center text-3xl font-bold pb-12' >Our Company Status</h2>
            <CountUpPage/>
        </div>
    );
};

export default HomePage;