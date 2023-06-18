import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import developerPhoto from '../../../assets/brand-image/developer photo.jpg';

const AboutMySelf = () => {
    return (
        <>
            <div className='max-w-full shadow-gray-950 shadow-md text-white mt-16 ml-8'>
                <h1 className='text-6xl font-bold mb-4'>hi, I'm <span className='text-blue-600'>Shakil Miah</span></h1>
                <p className='text-justify text-lg mb-8'>As a skilled Web Developer with expertise in HTML, CSS, JavaScript, React js, Node js, Express js, CSS-3, Tailwind CSS, BootStrap and other web technologies, I have a proven track record of designing and developing high-quality, responsive, and user-friendly websites and web applications. I am experienced in 3+ years front end and have a deep understanding of Frontend Development .I am able to work effectively with clients and team members to deliver solutions that meet their needs.</p>
                <h5 className='flex text-lg'><span className='text-blue-600 text-2xl mr-2 relative top-1'><FaCode /></span>Frontend Developer & Web Designer</h5>
                <li className='list-none mt-6 mb-6'><Link className='flex text-lg'><span className='text-blue-600 text-xl mr-2 relative top-1'><FaEnvelope /></span>developershakil.cmt1819@gmail.com</Link></li>
                <li className='list-none mt-6 mb-6'><Link className='flex text-lg'><span className='text-blue-600 text-xl mr-2 relative top-1'><FaLocationArrow /></span>Sayedpur, Mirzapur, Tangail, Dhaka, Bangladesh</Link></li>
                <div className='mt-12 flex'>
                    <Link className='btn-affter bg-black shadow-md shadow-slate-900 w-42 py-4 px-8 text-xl flex rounded-xl mt'>Contact Me<FaArrowRight className='relative top-2 ml-1' /></Link>
                    <Link className='btn-affter bg-black shadow-md shadow-slate-900 w-56 py-4 px-8 text-xl flex rounded-xl ml-6'>Dawonload CV<FaArrowRight className='relative top-2 ml-1' /></Link>
                </div>
            </div>
            <div className='w-full md:w-full flex justify-center items-center mt-16'>
                <img src={developerPhoto} alt="Developer Shakil Photo" className='rounded-lg shadow-slate-700 shadow-md w-full lg:w-1/2' />
            </div>
        </>
    );
};

export default AboutMySelf;