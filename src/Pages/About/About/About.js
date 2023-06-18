import React from 'react';
import AboutEducationQuality from '../AboutEducationQuality/AboutEducationQuality';
import AboutMySelf from './AboutMySelf';

const About = () => {
    return (
        <div className='bg-black mx-w-full pb-16 h-full ml-1'>
            {/* about form-here */}
            <div className='flex lg:flex-row flex-col-reverse justify-between p-6'>
                {/* about mysefl component here  */}
                <AboutMySelf></AboutMySelf>
            </div>
            {/* about section end   */}
            <div className='about-devider'></div>
            {/* educational qualification and skiled  */}
            <div>
                <div className='text-center mb-20'>
                    <h5 className='text-lg text-blue-600'>OVER 3 YEARS OF EXPERIENCE</h5>
                    <h2 className='text-6xl font-bold text-blue-50 mt-4'>My Resume</h2>
                </div>
                {/* Educational Qualification Component here  */}
                <AboutEducationQuality></AboutEducationQuality>

            </div>

            {/* educational qualification and skiled end  */}
        </div>
    );
};

export default About;

