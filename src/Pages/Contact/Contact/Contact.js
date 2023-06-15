import React from 'react';
import contactHero from '../../../assets/Service-card/Development.avif';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='bg-black ml-1 w-full h-full p-6 text-gray-500 '>
            {/* contact title here  */}
            <div className='text-center mb-20 mt-20'>
                <h5 className='text-lg text-blue-600'>Contact</h5>
                <h2 className='text-6xl font-bold text-blue-50 mt-4'>Contact With Me</h2>
            </div>
            {/* contact form  */}
            <div className='hero min-h-screen'>

                <div className='hero-content'>
                    <div className='max-w-xl mr-4'>
                        {/* contact information  */}
                        <div className="card card-compact w-full h-auto bg-stone-950 shadow-slate-900 shadow-sm">
                            <figure className='pt-6 px-6'><img src={contactHero} className='rounded-xl' alt="Development" /></figure>
                            <div className="card-body">
                                <h2 className="text-5xl text-white mt-2">Shakil Miah</h2>
                                <h4 className='text-lg mt-2 mb-2'>Frontend Web Developer</h4>
                                <p className='text-xl'>I am available for freelance work. <br /> Connect with me via and call in to my <br /> account.</p>
                                <ul>
                                    <li>
                                        <span>Phone:</span>
                                        <Link>+088 01792031534</Link>
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <Link>developershakil.cmt1819@gmail.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* send your problems  */}
                    <div className='ml-4 bg-stone-950 shadow-slate-900 shadow-sm text-gray-500 p-4'>
                        <div className='flex'>
                            <div className='mr-4'>
                                <label htmlFor="" className='text-base'>YOUR NAME</label>
                                <input type="text" className="input input-bordered bg-black w-full max-w-xs mt-4 focus:outline-none focus:border-red-600 focus:ring-1" />
                            </div>
                            <div className='ml-4'>
                                <label htmlFor="" className='ml-4 text-base'>PHONE NUMBER</label>
                                <input type="text" className="input input-bordered bg-black  w-full max-w-xs mt-4 focus:outline-none focus:border-red-600 focus:ring-1" />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="" className='text-base'>EMAIL</label>
                            <input type="text" className="input input-bordered bg-black w-full mt-4 focus:outline-none focus:border-red-600 focus:ring-1" />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="" className='text-base'>SUBJECT</label>
                            <input type="text" className="input input-bordered bg-black w-full mt-4 focus:outline-none focus:border-red-600 focus:ring-1" />
                        </div>
                        <div>
                            <div className="form-control mt-4">
                                <label className="label">YOUR MESSAGE</label>
                                <textarea className="textarea h-60 bg-black focus:outline-none focus:border-red-600 focus:ring-1"></textarea>
                            </div>
                        </div>
                        <input type="button" value="SEND MESSAGE" className='bg-black cursor-pointer shadow-slate-900 shadow-sm text-white w-full mt-4 py-4 rounded-md' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;