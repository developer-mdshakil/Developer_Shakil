import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Home/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="developer-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>

                    <label htmlFor="developer-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="developer-drawer" className="drawer-overlay"></label>
                    <nav className="p-4 w-80 h-full bg-black">
                        <Navbar></Navbar>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Main;