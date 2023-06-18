import React from 'react';
import ContactLeftSide from './ContactLeftSide';
import ContactMessageFrom from './ContactMessageFrom';

const Contact = () => {

    return (
        <div className='bg-black ml-1 w-full h-full p-6 text-gray-500 '>

            {/* contact title here  */}
            <div className='text-center mb-20 mt-20'>
                <h5 className='text-lg text-blue-600'>Contact</h5>
                <h2 className='text-6xl font-bold text-blue-50 mt-4'>Contact With Me</h2>
            </div>

            {/* contact form  */}
            <div className='hero min-h-screen'>

                <div className='hero-content lg:flex-row flex-col-reverse'>

                    <ContactLeftSide></ContactLeftSide>

                    {/* send your problems  */}
                    <ContactMessageFrom></ContactMessageFrom>

                </div>
            </div>
        </div>
    );
};

export default Contact;