import React from 'react';
import { Link } from 'react-router-dom';

const CopyRight = () => {
    return (
        <div>
            <footer className="footer items-center p-10 bg-black text-neutral-content">
                <div className="items-center grid-flow-col">

                    <p>Copyright © 2023-06-15 - developer_Shakil All right reserved</p>
                </div>
                <div className="grid-flow-row gap-4 md:place-self-center md:justify-self-end">
                    <ul className='flex gap-4'>
                        <li><Link className='link-hover hover:text-blue-500'>Contact</Link></li>
                        <li><Link className='link-hover hover:text-blue-500'>Policy</Link></li>
                        <li><Link className='link-hover hover:text-blue-500'>Privacy</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default CopyRight;