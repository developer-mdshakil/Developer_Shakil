import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EducationlQulity = () => {
    return (
        <>
            <div className='w-full shadow-gray-950 shadow-md text-white mr-14'>

                {/* education qualification title */}
                <div className='mb-14'>
                    <h5 className='text-lg text-blue-600'>2007-2022</h5>
                    <h2 className='text-4xl font-bold text-blue-50 mt-4'>Education Quality</h2>
                </div>

                {/* BSC Education */}
                <div className="card w-full h-auto bg-stone-950 hover:bg-black shadow-slate-900 shadow-sm mb-12">
                    <div className="card-body card-design text-gray-500 relative">
                        <h2 className="text-2xl font-semibold text-white">BSC in Computer Science</h2>
                        <h4 className='text-lg mb-12'>Wait for admission any university</h4>
                        <div className='absolute top-16 right-8'>
                            <button className='text-blue-600 rounded-md bg-stone-950 shadow shadow-slate-900 py-2 px-6'>No</button>
                        </div>
                        <p className='text-2xl'>The training provided by Institute in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                        <Link className='text-xl more-btn mt-4'><FaArrowRight /></Link>
                    </div>
                </div>
                {/* diploma information  */}
                <div className="card w-full h-auto bg-stone-950 shadow-slate-900 shadow-sm">
                    <div className="card-body card-design text-gray-500 relative">
                        <h2 className="text-2xl font-semibold text-white">Diploma In Computer Science</h2>
                        <h4 className='text-lg mb-12'>Tangail Polytechnic Institute (2019-2022)</h4>
                        <div className='absolute top-16 right-8'>
                            <button className='text-blue-600 rounded-md bg-stone-950 shadow shadow-slate-900 py-2 px-6'>3.78/4</button>
                        </div>
                        <p className='text-2xl'>The training provided by Institute in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                        <Link className='text-xl more-btn mt-4'><FaArrowRight /></Link>
                    </div>
                </div>
                {/* Secondary Higher School Education */}
                <div className="card w-full h-auto bg-stone-950 shadow-slate-900 shadow-sm mt-12">
                    <div className="card-body card-design text-gray-500 relative">
                        <h2 className="text-2xl font-semibold text-white">Secondary Higher School Education</h2>
                        <h4 className='text-lg mb-12'>Bongshi Nagar High School (2013-2018)</h4>
                        <div className='absolute top-16 right-8'>
                            <button className='text-blue-600 rounded-md bg-stone-950 shadow shadow-slate-900 py-2 px-6'>4.50/5</button>
                        </div>
                        <p className='text-2xl'>The training provided by Institute in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                        <Link className='text-xl more-btn mt-4'><FaArrowRight /></Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default EducationlQulity;