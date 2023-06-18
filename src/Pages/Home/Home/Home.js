import React from 'react';
import Hero from '../Hero/Hero';
import About from '../../About/About/About';
import Service from '../../Service/Service/Service';
import Contact from '../../Contact/Contact/Contact';
import Blog from '../../Blog/Blog/Blog';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className='ml-1'>
            <Hero></Hero>
            <section>
                <About></About>
            </section>
            <div className='section-devider'></div>
            <section>
                <Service></Service>
            </section>
            <div className='section-devider'></div>
            <section>
                <Blog></Blog>
            </section>
            <div className='section-devider'></div>
            <section>
                <Contact></Contact>
            </section>
            <div className='section-devider'></div>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default Home;