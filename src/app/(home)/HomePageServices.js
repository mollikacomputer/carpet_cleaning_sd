import React from 'react';
import HomePageService from './HomePageService';
import getServices from '@/utils/getServices';

const HomePageServices = async() => {
    const services = await getServices();
    return (
        <div className="container mx-auto my-16">
           <h2 className='text-2xl text-green-500 font-semibold text-center my-10'>Service Page</h2>
          <div className="md:flex justify-between">
           {
            services.map((service)=> <HomePageService key={service.id} service={service} > </HomePageService> )
           }
          </div>
        </div>
    );
};

export default HomePageServices;