
import getSingleService from '@/utils/getSingleService';
import React from 'react';

const ServiceDetails = async ({params:{id}}) => {
    const service = await getSingleService(id); 
    
    return (
        <div>
            <h2> {service.title} </h2> 
            <p> {service.body} </p>
        </div>
    );
};

export default ServiceDetails;