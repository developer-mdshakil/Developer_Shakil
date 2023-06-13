import React from 'react';
import developerPhoto from '../../../assets/brand-image/developer photo.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaEnvelope, FaLocationArrow } from 'react-icons/fa';

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
                <div className='flex justify-between  p-6'>
                    <div className='w-full shadow-gray-950 shadow-md text-white mr-14'>

                        {/* education qualification title */}
                        <div className='mb-14'>
                            <h5 className='text-lg text-blue-600'>2007-2022</h5>
                            <h2 className='text-4xl font-bold text-blue-50 mt-4'>Education Quality</h2>
                        </div>

                        {/* BSC Education */}
                        <div className="card w-full h-auto bg-stone-950 shadow-slate-900 shadow-sm mb-12">
                            <div className="card-body relative">
                                <h2 className="text-2xl font-semibold">BSC in Computer Science</h2>
                                <h4 className='text-lg text-gray-500 mb-12'>Wait for admission any university</h4>
                                <div className='absolute top-16 right-8'>
                                    <button className='text-blue-600 rounded-md bg-stone-950 shadow shadow-slate-900 py-2 px-6'>No</button>
                                </div>
                                <p className='text-2xl text-gray-500'>The training provided by Institute in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                            </div>
                        </div>
                        {/* diploma information  */}
                        <div className="card w-full h-auto bg-stone-950 shadow-slate-900 shadow-sm">
                            <div className="card-body relative">
                                <h2 className="text-2xl font-semibold">Diploma In Computer Science</h2>
                                <h4 className='text-lg text-gray-500 mb-12'>Tangail Polytechnic Institute (2019-2022)</h4>
                                <div className='absolute top-16 right-8'>
                                    <button className='text-blue-600 rounded-md bg-stone-950 shadow shadow-slate-900 py-2 px-6'>3.78/4</button>
                                </div>
                                <p className='text-2xl text-gray-500'>The training provided by Institute in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                            </div>
                        </div>
                        {/* Secondary Higher School Education */}
                        <div className="card w-full h-auto bg-stone-950 shadow-slate-900 shadow-sm mt-12">
                            <div className="card-body relative">
                                <h2 className="text-2xl font-semibold">Secondary Higher School Education</h2>
                                <h4 className='text-lg text-gray-500 mb-12'>Bongshi Nagar High School (2013-2018)</h4>
                                <div className='absolute top-16 right-8'>
                                    <button className='text-blue-600 rounded-md bg-stone-950 shadow shadow-slate-900 py-2 px-6'>4.50/5</button>
                                </div>
                                <p className='text-2xl text-gray-500'>The training provided by Institute in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                            </div>
                        </div>

                    </div>
                    {/* job skill here  */}
                    <div className='w-full shadow-gray-950 shadow-md text-white ml-14'>

                        {/* Job Skill title */}
                        <div className='mb-14'>
                            <h5 className='text-lg text-blue-600'>2019-2022</h5>
                            <h2 className='text-4xl font-bold text-blue-50 mt-4'>Job Skill Training</h2>
                        </div>

                        {/* Complete Web Development Course  */}
                        <div className="card w-full h-auto bg-stone-950 shadow-slate-900 shadow-sm">
                            <div className="card-body relative">
                                <h2 className="text-2xl font-semibold">Complete Web Development</h2>
                                <h4 className='text-lg text-gray-500 mb-12'>Web Programming Hero (2021-2022)</h4>
                                <div className='absolute top-16 right-8'>
                                    <button className='text-blue-600 rounded-md bg-stone-950 shadow shadow-slate-900 py-2 px-6'>A/4</button>
                                </div>
                                <p className='text-2xl text-gray-500'>The training provided by Institute in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                            </div>
                        </div>
                        {/* Extra skilled grow */}
                        <div className="card w-full h-auto bg-stone-950 shadow-slate-900 shadow-sm mt-12">
                            <div className="card-body relative">
                                <h2 className="text-2xl font-semibold">Web Development & Design</h2>
                                <h4 className='text-lg text-gray-500 mb-12'>Fortune It & Power Solution (2022)</h4>
                                <div className='absolute top-16 right-8'>
                                    <button className='text-blue-600 rounded-md bg-stone-950 shadow shadow-slate-900 py-2 px-6'>A+/4</button>
                                </div>
                                <p className='text-2xl text-gray-500'>The training provided by Institute in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                            </div>
                        </div>
                        {/* industrial Skill */}
                        <div className="card w-full h-auto bg-stone-950 shadow-slate-900 shadow-sm mt-12">
                            <div className="card-body relative">
                                <h2 className="text-2xl font-semibold">Basic Wordpress Design</h2>
                                <h4 className='text-lg text-gray-500 mb-12'>Soro Bindo(jillur Rahman Web Class)</h4>
                                <div className='absolute top-16 right-8'>
                                    <button className='text-blue-600 rounded-md bg-stone-950 shadow shadow-slate-900 py-2 px-6'>First Class</button>
                                </div>
                                <p className='text-2xl text-gray-500'>The training provided by Institute in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* educational qualification and skiled end  */}
        </div>
    );
};

export default About;

