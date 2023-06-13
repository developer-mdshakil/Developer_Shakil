import React from 'react';
import backGround from '../../../assets/hero-image/hero-image.jpg';
import bannerHero from '../../../assets/brand-image/developer photo.jpg';

const Hero = () => {

    return (
        <div className="bg text-white flex justify-start items-center">
            <div className=''>
                <h3 className='text-5xl text-amber-400 font-serif font-semibold ml-32'>Hello,</h3>
                <h1 className='text-8xl font-mono font-bold ml-32 mt-4'>I'M Shakil Miah.</h1>
            </div>
        </div>
    );
};

export default Hero;