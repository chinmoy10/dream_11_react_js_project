import React from 'react';
import "./Navbar.css"
import profile from "../../../assets/images/logo.png"
import dollar from "../../../assets/images/dollar_1.png"

const Navbar = () => {
    return (
        <header className=''>
            <nav className='md:flex justify-around items-center py-4 mb-5 border-b-2 max-w-screen-2xl mx-auto'>
                <div className='w-2/3'>
                    <img src={profile} alt="" />
                </div>
                <div className='flex justify-between items-center w-1/3'>
                    <ul className='flex space-x-8 text-[#13131390]'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Fixture</a></li>
                        <li><a href='#'>Teams</a></li>
                        <li><a href='#'>Schedules</a></li>
                    </ul>
                    <div className='flex items-center border-2 px-5 py-4 space-x-2 cursor-pointer rounded-2xl'>
                        <h1 className='font-bold'>0 Coin</h1>
                        <img className='w-6' src={dollar} alt="dollar" />
                    </div>
                </div>
            </nav>
            
        </header>
    );
};

export default Navbar;