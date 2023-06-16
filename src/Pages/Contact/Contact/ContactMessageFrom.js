import React from 'react';

const ContactMessageFrom = () => {
    return (
        <>
            <div className='ml-4 w-full bg-stone-950 shadow-slate-900 shadow-sm text-gray-500 p-4'>
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
        </>
    );
};

export default ContactMessageFrom;