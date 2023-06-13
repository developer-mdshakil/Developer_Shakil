import React from 'react';
import developerPhoto from '../../../assets/brand-image/developer photo.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
    return (
        <div className='bg-black w-full h-full ml-1'>
            <div className='flex justify-between h-full p-6'>
                <div className='w-full h-full shadow-gray-950 shadow-md text-white'>
                    <h1 className='text-6xl font-bold mb-4'>hi, I'm <span className='text-blue-600'>Shakil Miah</span></h1>
                    <p className='text-justify text-lg'>As a skilled Web Developer with expertise in HTML, CSS, JavaScript, React js, Node js, Express js, CSS-3, Tailwind CSS, BootStrap and other web technologies, I have a proven track record of designing and developing high-quality, responsive, and user-friendly websites and web applications. I am experienced in 3+ years front end and have a deep understanding of Frontend Development .I am able to work effectively with clients and team members to deliver solutions that meet their needs.</p>
                    <div className='mt-12'>
                        <Link className='bg-black shadow-md shadow-slate-900 w-40 py-4 px-8 text-xl text-red-500 flex rounded-xl mt'>Hire Me<FaArrowRight className='relative top-2 ml-1' /></Link>
                    </div>
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                    <img src={developerPhoto} alt="Developer Shakil Photo" className='rounded-lg shadow-slate-700 shadow-md' />
                </div>
            </div>
        </div>
    );
};

export default About;