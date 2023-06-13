import React from 'react';
import developerPhoto from '../../../assets/brand-image/developer photo.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import AboutEducationQuality from '../AboutEducationQuality/AboutEducationQuality';

const About = () => {
    return (
        <div className='bg-black w-full h-full ml-1'>
            {/* about form-here */}
            <div className='flex justify-between p-6'>
                <div className='w-full shadow-gray-950 shadow-md text-white mt-16 ml-8'>
                    <h1 className='text-6xl font-bold mb-4'>hi, I'm <span className='text-blue-600'>Shakil Miah</span></h1>
                    <p className='text-justify text-lg mb-8'>As a skilled Web Developer with expertise in HTML, CSS, JavaScript, React js, Node js, Express js, CSS-3, Tailwind CSS, BootStrap and other web technologies, I have a proven track record of designing and developing high-quality, responsive, and user-friendly websites and web applications. I am experienced in 3+ years front end and have a deep understanding of Frontend Development .I am able to work effectively with clients and team members to deliver solutions that meet their needs.</p>
                    <h5 className='flex text-lg'><span className='text-blue-600 text-2xl mr-2 relative top-1'><FaCode /></span>Frontend Developer & Web Designer</h5>
                    <li className='list-none mt-6 mb-6'><Link className='flex text-lg'><span className='text-blue-600 text-xl mr-2 relative top-1'><FaEnvelope /></span>developershakil.cmt1819@gmail.com</Link></li>
                    <li className='list-none mt-6 mb-6'><Link className='flex text-lg'><span className='text-blue-600 text-xl mr-2 relative top-1'><FaLocationArrow /></span>Sayedpur, Mirzapur, Tangail, Dhaka, Bangladesh</Link></li>
                    <div className='mt-12 flex'>
                        <Link className='btn-affter bg-black shadow-md shadow-slate-900 w-42 py-4 px-8 text-xl flex rounded-xl mt'>Contact Me<FaArrowRight className='relative top-2 ml-1' /></Link>
                        <Link className='btn-affter bg-black shadow-md shadow-slate-900 w-40 py-4 px-8 text-xl flex rounded-xl ml-6'>Hire Me<FaArrowRight className='relative top-2 ml-1' /></Link>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center mt-16'>
                    <img src={developerPhoto} alt="Developer Shakil Photo" className='rounded-lg shadow-slate-700 shadow-md' />
                </div>
            </div>
            {/* about section end   */}
            <div className='section-devider'></div>
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

