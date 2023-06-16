import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="developer-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>

                    <label htmlFor="developer-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="developer-drawer"></label>
                    <nav className="p-4 w-80 h-full bg-black">
                        <Navbar></Navbar>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Main;