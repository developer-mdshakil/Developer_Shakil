import React from 'react';
import contactHero from '../../../assets/Service-card/developer-vectors.avif';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactLeftSide = () => {
    const socialMenu = <React.Fragment>
        <li className='w-12 h-12 bg-stone-950 flex justify-center items-center text-2xl shadow shadow-slate-800 rounded-lg common-animation'><Link to='https://www.facebook.com/mdshakil.mahamudjoy.3?mibextid=ZbWKwL'><FaFacebook /></Link></li>
        <li className='w-12 h-12 bg-stone-950 ml-4 flex justify-center items-center text-2xl shadow shadow-slate-800 rounded-lg common-animation'><Link to='https://www.linkedin.com/in/md-shakil-miah-b1644127a/'><FaLinkedin /></Link></li>
        <li className='w-12 h-12 bg-stone-950 ml-4 flex justify-center items-center text-2xl shadow shadow-slate-800 rounded-lg common-animation'><Link to='https://github.com/developer-mdshakil'><FaGithub /></Link></li>
    </React.Fragment>
    return (
        <>
            <div className='max-w-xl lg:mr-4 mr-0'>
                {/* contact information  */}
                <div className="card card-compact w-full bg-stone-950 shadow-slate-900 shadow-sm">
                    <div className='w-full pt-6 px-6 box-border'>
                        <figure><img src={contactHero} className='rounded-xl h-60 w-full image-animation' alt="Development" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="text-5xl text-white mt-2">Shakil Miah</h2>
                        <h4 className='text-lg mt-2 mb-2'>Frontend Web Developer</h4>
                        <p className='text-xl mb-4'>I am available for freelance work. <br /> Connect with me via and call in to my <br /> account.</p>
                        <ul>
                            <li>
                                <span className='text-lg'>Phone:</span>
                                <Link className='text-lg ml-2 contact-link'>+088 01792031534</Link>
                            </li>
                            <li>
                                <span className='text-lg'>Email:</span>
                                <Link className='text-lg ml-2 contact-link'>developershakil.cmt1819@gmail.com</Link>
                            </li>
                        </ul>
                        <div className="social-media text-white">
                            <h4 className='text-lg font-semibold mt-4 mb-4'>FIND WITH ME</h4>
                            <ul className='flex'>
                                {socialMenu}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactLeftSide;