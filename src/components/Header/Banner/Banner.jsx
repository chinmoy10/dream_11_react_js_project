import React from 'react';
import banner_img from "../../../assets/images/banner-main.png";
import "./Banner.css";
import { ToastContainer, toast } from 'react-toastify';

const Banner = ({handleClaimCredit}) => {

    const handleCredit = () =>{
        handleClaimCredit(6000000);
        notify();
    }

    const notify = () => {
        toast.success('Thanks for credits', {
            position: "top-center",
            autoClose: 400,
            theme: "dark",
            });
    }
    

    return (
        <div className="w-10/12 mx-auto py-8">
            <div
                className="hero min-h-full hero-overlay rounded-2xl cover bg-no-repeat"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/FLMCr6Kp/bg-shadow.png)",
                }}>
                <div className="hero-content text-neutral-content text-center md:p-16">
                    <div className="flex flex-col items-center space-y-7">
                        <img src={banner_img} alt="" />
                        <h1 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="text-xl font-medium text-gray-300">Beyond Boundaries Beyond Limits</p>
                        <div className="border-2 border-[#E7FE29] p-2 rounded-xl">
                            <button onClick={handleCredit} className="btn text-lg font-bold bg-[#E7FE29] outline-none border-none rounded-lg">Claim Free Credit</button>
                            <ToastContainer 
                            position="top-center"
                            autoClose={400}
                            theme="dark"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;