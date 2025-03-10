import React from "react";
import "./Navbar.css";
import profile from "../../../assets/images/logo.png";
import dollar from "../../../assets/images/dollar_1.png";

const Navbar = () => {
  return (
    <header >
      <nav className="sticky bottom-0 bg-[#fffffffa] shadow-md">
        <div className="navbar bg-base-100 w-10/12 mx-auto py-3">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                    <li>
                    <div className="btn space-x-1">
                    <h1 className="font-bold">0 Coin</h1>
                    <img className="w-6" src={dollar} alt="dollar" />
                </div>
                    </li>
                </ul>
            </div>
            <img src={profile} alt="" />
          </div>
          <div className="navbar-end hidden lg:flex space-x-8">
                <ul className="menu menu-horizontal px-3 text-slate-600">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul>
            <div className="btn space-x-1">
                <h1 className="font-bold">0 Coin</h1>
                <img className="w-6" src={dollar} alt="dollar" />
            </div>
          </div>
        </div>
      </nav>
        
    </header>
  );
};

export default Navbar;
