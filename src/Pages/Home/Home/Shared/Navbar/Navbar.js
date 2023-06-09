import React from 'react';
import { Link } from 'react-router-dom';
import brandImg from '../../../../../assets/brand image/developer_photo-2.png';
import { FaHome, FaAd, FaServicestack, FaPaperclip, FaBlog, FaPhone, FaFacebook, FaLinkedin, FaTwitter, } from 'react-icons/fa';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li className='pt-3 pb-3'><Link className='hover:text-blue-600 flex'><FaHome className='relative top-1 mr-2 text-lg' />HOME</Link></li>
        <li className='pt-3 pb-3'><Link className='hover:text-blue-600 flex'><FaAd className='relative top-1 mr-2 text-lg' />ABOUT</Link></li>
        <li className='pt-3 pb-3'><Link className='hover:text-blue-600 flex'><FaServicestack className='relative top-1 mr-2 text-lg' />SERVICE</Link></li>
        <li className='pt-3 pb-3'><Link className='hover:text-blue-600 flex'><FaPaperclip className='relative top-1 mr-2 text-lg' />PORTFOLIO</Link></li>
        <li className='pt-3 pb-3'><Link className='hover:text-blue-600 flex'><FaBlog className='relative top-1 mr-2 text-lg' />BLOG</Link></li>
        <li className='pt-3 pb-3'><Link className='hover:text-blue-600 flex'><FaPhone className='relative top-1 mr-2 text-lg' />CONTACT</Link></li>
    </React.Fragment>
    const socialMenu = <React.Fragment>
        <li className='w-12 h-12 bg-stone-950 flex justify-center items-center text-2xl shadow shadow-slate-800 rounded-lg'><Link to='https://www.facebook.com/mdshakil.mahamudjoy.3?mibextid=ZbWKwL'><FaFacebook /></Link></li>
        <li className='w-12 h-12 bg-stone-950 ml-4 flex justify-center items-center text-2xl shadow shadow-slate-800 rounded-lg'><Link><FaLinkedin /></Link></li>
        <li className='w-12 h-12 bg-stone-950 ml-4 flex justify-center items-center text-2xl shadow shadow-slate-800 rounded-lg'><Link><FaTwitter /></Link></li>
    </React.Fragment>
    return (
        <div className='ml-14'>
            <div className="avatar mt-8 mb-6">
                <div className="w-40 rounded-full ring ring-slate-700 ring-offset-slate-400 ring-offset-4">
                    <img src={brandImg} className='top-6 relative' />
                </div>
            </div>
            <ul className='text-lg text-white'>
                {menuItems}
            </ul>
            <div className="social-media text-white mt-28">
                <hr className='w-44 bg-slate-500' />
                <h4 className='text-lg font-semibold mt-4 mb-4'>FIND WITH ME</h4>
                <ul className='flex'>
                    {socialMenu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;