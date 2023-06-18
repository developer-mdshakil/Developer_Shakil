import React from 'react';
import developer from '../../../assets/brand-image/developer_photo-2.png'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLocationArrow, FaPhone, FaWhatsapp } from 'react-icons/fa';
import CopyRight from './CopyRight';

const Footer = () => {
    return (
        <div className='ml-1'>
            <footer className="footer p-10 bg-black text-neutral-content">
                <div>
                    {/* hero footer area  */}
                    <div className="w-24 h-24 flex justify-center items-center">
                        <Link to='#'><img src={developer} className='w-20 h-20 rounded-full ring ring-slate-700 ring-offset-slate-400 ring-offset-2' /></Link>
                    </div>
                    <h4 className='text-2xl font-semibold text-white'>Developer Shakil</h4>
                    <p className='max-w-md text-gray-500 text-base'>Experienced Web Developer skilled in HTML, CSS, bootStrap, Tailwind css, JavaScript, react js, node js, express js, mongodb and WordPress. Proven track record in designing and developing high-quality, responsive websites. Collaborative team player with strong client communication skills.</p>
                </div>
                {/* footer menu area  */}
                <div>
                    <span className="text-2xl font-semibold text-white mb-4">MY SERVICES</span>
                    <a className="link link-hover text-base hover:text-blue-500">Website Design</a>
                    <a className="link link-hover text-base hover:text-blue-500">Website Design & Frontend Development</a>
                    <a className="link link-hover text-base hover:text-blue-500">Wordpress Website Desgin</a>
                    <a className="link link-hover text-base hover:text-blue-500">Website Backend Development Beginer</a>
                </div>
                <div>
                    <span className="text-2xl font-semibold text-white mb-4">CONTACT ME</span>
                    <a className="link link-hover text-base hover:text-blue-500 flex items-center">
                        <span className='mr-2 text-blue-600'><FaLocationArrow /></span>
                        <span>Sayedpur, Mirzapur, Tangail, Dhaka, Bangladesh</span>
                    </a>
                    <a className="link link-hover text-base hover:text-blue-500 flex items-center">
                        <span className='mr-2 text-blue-600'><FaEnvelope /></span>
                        <span>developershakil.cmt1819@gmail.com</span>
                    </a>
                    <a className="link link-hover text-base hover:text-blue-500 flex items-center">
                        <span className='mr-2 text-blue-600'><FaPhone /></span>
                        <span>+088 1792031534</span>
                    </a>
                    <a className="link link-hover text-base hover:text-blue-500 flex items-center">
                        <span className='mr-2 text-blue-600'><FaWhatsapp /></span>
                        <span>+088 1792031534</span>
                    </a>
                </div>
            </footer>
            {/* added to copy right component here  */}
            <CopyRight></CopyRight>
        </div>
    );
};

export default Footer;