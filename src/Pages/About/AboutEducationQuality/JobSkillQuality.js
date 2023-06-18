import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobSkillQuality = () => {
    return (
        <>
            <div className='w-full shadow-gray-950 shadow-md text-white lg:ml-14 mt-14 lg:mt-0'>

                {/* Job Skill title */}
                <div className='mb-14'>
                    <h5 className='text-lg text-blue-600'>2019-2022</h5>
                    <h2 className='text-4xl font-bold text-blue-50 mt-4'>Job Skill Training</h2>
                </div>

                {/* Complete Web Development Course  */}
                <div className="card w-full h-auto bg-stone-950 shadow-slate-900 shadow-sm">
                    <div className="card-body card-design text-gray-500 relative">
                        <h2 className="text-2xl font-semibold text-white">Complete Web Development</h2>
                        <h4 className='text-lg mb-12'>Web Programming Hero (2021-2022)</h4>
                        <div className='absolute top-16 right-8'>
                            <button className='text-blue-600 rounded-md bg-stone-950 shadow shadow-slate-900 py-2 px-6'>A/4</button>
                        </div>
                        <p className='text-2xl'>The training provided by Institute in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                        <Link className='text-xl more-btn mt-4'><FaArrowRight /></Link>
                    </div>
                </div>
                {/* Extra skilled grow */}
                <div className="card w-full h-auto bg-stone-950 shadow-slate-900 shadow-sm mt-12">
                    <div className="card-body card-design text-gray-500 relative">
                        <h2 className="text-2xl font-semibold text-white">Web Development & Design</h2>
                        <h4 className='text-lg mb-12'>Fortune It & Power Solution (2022)</h4>
                        <div className='absolute top-16 right-8'>
                            <button className='text-blue-600 rounded-md bg-stone-950 shadow shadow-slate-900 py-2 px-6'>A+/4</button>
                        </div>
                        <p className='text-2xl'>The training provided by Institute in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                        <Link className='text-xl more-btn mt-4'><FaArrowRight /></Link>
                    </div>
                </div>
                {/* industrial Skill */}
                <div className="card w-full h-auto bg-stone-950 shadow-slate-900 shadow-sm mt-12">
                    <div className="card-body card-design text-gray-500 relative">
                        <h2 className="text-2xl font-semibold text-white">Basic Wordpress Design</h2>
                        <h4 className='text-lg mb-12'>Soro Bindo(jillur Rahman Web Class)</h4>
                        <div className='absolute top-16 right-8'>
                            <button className='text-blue-600 rounded-md bg-stone-950 shadow shadow-slate-900 py-2 px-6'>First Class</button>
                        </div>
                        <p className='text-2xl'>The training provided by Institute in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                        <Link className='text-xl more-btn mt-4'><FaArrowRight /></Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default JobSkillQuality;