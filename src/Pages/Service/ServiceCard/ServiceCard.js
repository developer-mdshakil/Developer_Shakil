import React from 'react';
import developmentPhoto from '../../../assets/Service-card/Development.avif';
import frontednDevelopment from '../../../assets/Service-card/Frontend-development.avif';
import webDesign from '../../../assets/Service-card/Web-design.avif';
import wordpressDesign from '../../../assets/Service-card/Wordpress-design.avif';

const ServiceCard = () => {
    return (
        <div>
            <div className="card lg:card-side bg-stone-950 hover:bg-black card-design shadow-slate-900 shadow-sm text-gray-500 mb-12">
                <figure><img src={developmentPhoto} className='w-full h-96' alt="Album" /></figure>
                <div className="card-body">
                    <div>
                        <h2 className="text-4xl font-semibold mb-6 text-white">Frontend Development</h2>
                        <p className='m-0 p-0 text-lg'>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.I throw myself down among the tall grass by the stream as Ilie close to the earth</p>
                    </div>
                    <div className='flex justify-end relative items-center'>
                        <button className="btn common-animation btn-active btn-neutral text-red-500 shadow-slate-600 shadow-sm text-lg mr-4">Conact Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;