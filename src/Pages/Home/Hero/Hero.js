import React from 'react';
import backGround from '../../../assets/hero-image/hero-image.jpg';
import bannerHero from '../../../assets/brand-image/developer photo.jpg';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <div className="bg text-white flex justify-start items-center">
            <div className=''>
                <h3 className='text-5xl text-amber-400 font-serif font-semibold ml-32'>Hello,</h3>
                <h1 className='text-8xl font-mono font-bold ml-32 mt-4 mb-4'>I'M Shakil Miah.</h1>
                <h4 className='text-3xl font-sans ml-32'>
                    I'm a{' '}
                    <span className='text-blue-600 font-bold'>
                        <Typewriter
                            words={['Web Developer..', 'Forntend Developer..', 'Web Designer..', 'Wordpress Designer..']}
                            loop={true}
                            cursor
                            cursorStyle='।'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h4>
                <div className='text-center mt-24'>
                    <button className="btn btn-active btn-neutral hover:-translate-y-1 hover:transition-transform text-red-500 shadow-slate-600 shadow-sm text-lg mr-4">Conact Me</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;