import React from 'react';
import developer from '../../../assets/blog-image/blog-1.avif';
import webDevelopment from '../../../assets/blog-image/blog-2.avif';
import webDesigner from '../../../assets/blog-image/web-designer.avif';
import { FaArrowRight, FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='bg-black ml-1 pb-16 w-full h-full p-6'>
            <div className='text-center mb-20 mt-20'>
                <h5 className='text-base text-blue-600'>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h5>
                <h2 className='text-6xl font-bold text-blue-50 mt-4'>My Blog</h2>
            </div>
            <div className='grid grid-cols-3'>
                {/* developer blog  */}
                <div className="card w-96 bg-stone-950 hover:bg-black card-design shadow-slate-900 shadow-sm text-gray-500">
                    <div className='pt-6 px-6'>
                        <figure><img src={developer} className='service-image image-animation' alt="developer blog image" /></figure>
                    </div>
                    <div className="card-body">
                        <div className="card-title justify-between mb-4">
                            <h2 className='text-blue-600 cursor-pointer'>Development</h2>
                            <div className='flex justify-center items-center'>
                                <span className='mr-2'><FaComment /></span>
                                <h3>Comment</h3>
                            </div>
                        </div>
                        <p>Why We Don’t Have Technical Interviews for Technical Roles at Buffer.</p>
                        <Link className='flex justify-end text-xl more-btn'><FaArrowRight /></Link>
                    </div>
                </div>
                {/* web developer blog  */}
                <div className="card w-96 bg-stone-950 hover:bg-black card-design shadow-slate-900 shadow-sm text-gray-500">
                    <div className='pt-6 px-6'>
                        <figure><img src={webDevelopment} className='service-image image-animation' alt="Web developer blog image" /></figure>
                    </div>
                    <div className="card-body">
                        <div className="card-title justify-between mb-4">
                            <h2 className='text-blue-600 cursor-pointer'>Web development</h2>
                            <div className='flex justify-center items-center'>
                                <span className='mr-2'><FaComment /></span>
                                <h3>Comment</h3>
                            </div>
                        </div>
                        <p>Why We Don’t Have Technical Interviews for Technical Roles at Buffer.</p>
                        <Link className='flex justify-end text-xl more-btn'><FaArrowRight /></Link>
                    </div>
                </div>

                {/* designer blog  */}
                <div className="card w-96 bg-stone-950 hover:bg-black card-design shadow-slate-900 shadow-sm text-gray-500">
                    <div className='pt-6 px-6'>
                        <figure><img src={webDesigner} className='service-image image-animation' alt="web designer blog image" /></figure>
                    </div>
                    <div className="card-body">
                        <div className="card-title justify-between mb-4">
                            <h2 className='text-blue-600 cursor-pointer'>Designer</h2>
                            <div className='flex justify-center items-center'>
                                <span className='mr-2'><FaComment /></span>
                                <h3>Comment</h3>
                            </div>
                        </div>
                        <p>Why We Don’t Have Technical Interviews for Technical Roles at Buffer.</p>
                        <Link className='flex justify-end text-xl more-btn'><FaArrowRight /></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;