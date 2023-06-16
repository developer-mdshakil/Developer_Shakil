import React from 'react';
import developmentPhoto from '../../../assets/Service-card/Development.avif';
import WebDevelopment from '../../../assets/Service-card/Frontend-development.avif';
import webDesign from '../../../assets/Service-card/Web-design.avif';
import wordpressDesign from '../../../assets/Service-card/Wordpress-design.avif';

const ServiceCard = () => {
    return (
        <>
            {/* frontend development card  */}
            <div className="card lg:card-side bg-stone-950 hover:bg-black card-design shadow-slate-900 shadow-sm text-gray-500 mb-12">
                <figure><img src={developmentPhoto} className='service-image' alt="Album" /></figure>
                <div className="card-body w-full relative">
                    <div>
                        <h2 className="text-4xl font-semibold mb-6 text-white">Frontend Development</h2>
                        <p className='m-0 p-0 max-w-lg text-lg'>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.I throw myself down among the tall grass by the stream as Ilie close to the earth.I use to frontend developemt kit javaScript, react js, node js, express js, mongodb.</p>
                    </div>
                    <div className='absolute right-0 top-32'>
                        <button className="btn common-animation btn-active btn-neutral text-red-500 shadow-slate-600 shadow-sm text-lg mr-4">Conact Me</button>
                    </div>
                </div>
            </div>

            {/* web Development card  */}
            <div className="card lg:card-side bg-stone-950 hover:bg-black card-design shadow-slate-900 shadow-sm text-gray-500 mb-12">
                <figure><img src={WebDevelopment} className='service-image' alt="Album" /></figure>
                <div className="card-body w-full relative">
                    <div>
                        <h2 className="text-4xl font-semibold mb-6 text-white">Web Development</h2>
                        <p className='m-0 p-0 max-w-lg text-lg'>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.I throw myself down among the tall grass by the stream as Ilie close to the earth.I use to frontend developemt kit javaScript, react js, node js, express js, mongodb.</p>
                    </div>
                    <div className='absolute right-0 top-32'>
                        <button className="btn common-animation btn-active btn-neutral text-red-500 shadow-slate-600 shadow-sm text-lg mr-4">Conact Me</button>
                    </div>
                </div>
            </div>

            {/* web design  */}
            <div className="card lg:card-side bg-stone-950 hover:bg-black card-design shadow-slate-900 shadow-sm text-gray-500 mb-12">
                <figure><img src={webDesign} className='service-image' alt="Album" /></figure>
                <div className="card-body w-full relative">
                    <div>
                        <h2 className="text-4xl font-semibold mb-6 text-white">Web Development</h2>
                        <p className='m-0 p-0 max-w-lg text-lg'>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.I throw myself down among the tall grass by the stream as Ilie close to the earth.I use to frontend developemt kit javaScript, react js, node js, express js, mongodb.</p>
                    </div>
                    <div className='absolute right-0 top-32'>
                        <button className="btn common-animation btn-active btn-neutral text-red-500 shadow-slate-600 shadow-sm text-lg mr-4">Conact Me</button>
                    </div>
                </div>
            </div>

            {/* wordpress design  */}
            <div className="card lg:card-side bg-stone-950 hover:bg-black card-design shadow-slate-900 shadow-sm text-gray-500 mb-12">
                <figure><img src={wordpressDesign} className='service-image' alt="Album" /></figure>
                <div className="card-body w-full relative">
                    <div>
                        <h2 className="text-4xl font-semibold mb-6 text-white">Web Development</h2>
                        <p className='m-0 p-0 max-w-lg text-lg'>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.I throw myself down among the tall grass by the stream as Ilie close to the earth.I use to frontend developemt kit javaScript, react js, node js, express js, mongodb.</p>
                    </div>
                    <div className='absolute right-0 top-32'>
                        <button className="btn common-animation btn-active btn-neutral text-red-500 shadow-slate-600 shadow-sm text-lg mr-4">Conact Me</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;