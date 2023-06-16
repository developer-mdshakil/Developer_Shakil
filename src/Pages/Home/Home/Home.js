import React from 'react';
import Hero from '../Hero/Hero';
import About from '../../About/About/About';
import Service from '../../Service/Service/Service';
import Contact from '../../Contact/Contact/Contact';

const Home = () => {
    return (
        <div className='ml-1'>
            <Hero></Hero>
            <section>
                <About></About>
            </section>
            <section>
                <Service></Service>
            </section>
            <section>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;