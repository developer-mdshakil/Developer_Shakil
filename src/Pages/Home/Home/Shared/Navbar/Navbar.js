import React from 'react';
import { Link } from 'react-router-dom';
import brandImg from '../../../../../assets/brand image/developer_photo-2.png';
import { FaHome, FaAd, FaServicestack, FaPaperclip, FaBlog, FaFileContract } from 'react-icons/fa';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li className='pt-3 pb-3'><Link className='hover:text-red-500 flex'><FaHome className='relative top-1 mr-2 text-lg' />HOME</Link></li>
        <li className='pt-3 pb-3'><Link className='hover:text-red-500 flex'><FaAd className='relative top-1 mr-2 text-lg' />ABOUT</Link></li>
        <li className='pt-3 pb-3'><Link className='hover:text-red-500 flex'><FaServicestack className='relative top-1 mr-2 text-lg' />SERVICE</Link></li>
        <li className='pt-3 pb-3'><Link className='hover:text-red-500 flex'><FaPaperclip className='relative top-1 mr-2 text-lg' />PORTFOLIO</Link></li>
        <li className='pt-3 pb-3'><Link className='hover:text-red-500 flex'><FaBlog className='relative top-1 mr-2 text-lg' />BLOG</Link></li>
        <li className='pt-3 pb-3'><Link className='hover:text-red-500 flex'><FaFileContract className='relative top-1 mr-2 text-lg' />CONTACT</Link></li>
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
        </div>
    );
};

export default Navbar;