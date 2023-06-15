import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    return (
        <div className='bg-black ml-1 w-full h-full p-6'>
            {/* Service title */}
            <div className='text-center mb-20 mt-20'>
                <h5 className='text-lg text-blue-600'>Services</h5>
                <h2 className='text-6xl font-bold text-blue-50 mt-4'>What I Do?</h2>
            </div>
            {/* Service card encode here  */}
            <div>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Service;