import React from 'react';
import logo from "../../../assets/images/logo-footer.png"

const Newsletter = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto p-5 border-2 mb-10 rounded-3xl absolute -translate-y-32 md:-translate-y-52 z-10 translate-x-11 md:translate-x-16 lg:translate-x-40">
                <div className="hero min-h-full rounded-3xl cover bg-no-repeat bg-white"
                
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/FLMCr6Kp/bg-shadow.png)",
                }}
                >
                    <div className="hero-content text-center md:py-28">
                        <div className="max-w-lg">
                        <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
                        <p className="py-3 text-gray-500">Get the latest updates and news right in your inbox!</p>
                        <div className='flex space-x-2'>
                            <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs rounded-xl" />
                            <button className="btn bg-gradient-to-r from-pink-300 to-yellow-500 border-none outline-none font-bold rounded-xl">Subscribe</button>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='bg-neutral relative'>
                <footer className='flex flex-col items-center pt-60 mt-72 border-b-2 border-gray-800'>
                    <img src={logo} alt="" />
                    <div className='flex flex-col lg:flex-row justify-between items-start text-neutral-content py-20 w-10/12 mx-auto'>
                        <nav className='flex flex-col space-y-3'>
                            <h6 className="text-lg font-semibold">About Us</h6>
                            <p className='text-md font-light text-gray-400'>We are a passionate team dedicated to providing <br/>the best services to our customers.</p>
                        </nav>
                        <nav className='flex flex-col space-y-3'>
                            <h6 className="text-lg font-semibold">Company</h6>
                            <a className="text-md font-light text-gray-400 cursor-pointer">&bull; Home</a>
                            <a className="text-md font-light text-gray-400 cursor-pointer">&bull; Services</a>
                            <a className="text-md font-light text-gray-400 cursor-pointer">&bull; About us</a>
                            <a className="text-md font-light text-gray-400 cursor-pointer">&bull; Contact</a>
                        </nav>
                        <form className='flex flex-col space-y-2'>
                            <h6 className="text-lg font-semibold">Subscribe</h6>
                            <fieldset className="form-control w-80 space-y-3">
                            <label className="label">
                                <span className="text-md font-light text-gray-400">Subscribe to our newsletter for the <br />latest updates.</span>
                            </label>
                            <div className="join">
                                <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                                <button className="btn bg-gradient-to-r from-pink-300 to-yellow-500 border-none outline-none font-bold join-item">Subscribe</button>
                            </div>
                            </fieldset>
                        </form>
                    </div>
                </footer>
                <p className='font-normal text-[#ffffff60] text-center p-8'>&#64;2025 Your Company All Rights Reserved.</p>
                
            </div>
        </div>
    );
};

export default Newsletter;