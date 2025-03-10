import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto p-5 border-2 bg-transparent mb-10 rounded-3xl">
                <div className="hero min-h-full rounded-3xl cover bg-no-repeat"
                
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
        </div>
    );
};

export default Newsletter;