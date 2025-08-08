import React, { useState } from 'react';
import './navbar.css';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        
        <nav className="bg-black text-white  ">
            <div className="container mx-auto">
                {/* Main Nav Row */}
                <div className="flex flex-col md:flex-row items-center px-12">

                    {/* Column 1 - Logo */}
                    <div className="w-full md:w-1/4 mb-4 md:mb-0 flex items-center justify-between">
                        {/* Logo */}
                        <div className="md:h-12 w-20 md:w-40 flex items-center justify-center rounded">
                            <img
                                src="https://toxpand.com/assets/images/icons/xlogo2light.png"
                                alt=""
                            />
                        </div>

                        {/* Burger Button - only on small screens */}
                        <button
                            className="md:hidden text-white focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>



                    {/* Burger Menu (Mobile only) */}
                   

                    {/* Column 2 - Navigation Links */}
                    <div className="w-full hidden md:block md:flex-1 md:w-3/4 ">
                        {/* Row 1 - 3 Links + 2 Buttons */}
                        <div className="flex flex-col md:flex-row items-center gap-13  space-y-2 py-4 md:space-y-0">
                            <a href="/Fandq" className="text-sm hover:text-[#9A2CAD]">FAQS</a>
                            <a href="">|</a>
                            <a href="/RoiCalculator" className="text-sm hover:text-[#9A2CAD]">ROI CALCULATOR</a>
                            <a href="">|</a>

                            <a href="/ScoreCard" className="text-sm hover:text-[#9A2CAD]">PIPELINE PERFORMANCE SCORECARD</a>
                            <div className="flex flex-col md:flex-row items-center justify-end gap-3  space-y-2  md:space-y-0">

                                <button className="brand-button text-white w-full md:w-auto">REQUEST PROPOSAL</button>
                                <button className="brand-button text-white w-full md:w-auto">Schedule a Call</button>
                            </div>
                        </div>

                        {/* Row 2 - 5 Links */}
                        <div className="flex flex-col md:flex-row items-center gap-10 space-y-2 md:space-y-0 py-6 border-t-1 border-[#7852A9]">
                            <a href="/" className="text-sm hover:text-[#9A2CAD]">HOME</a>
                            <a href="">|</a>
                            <a href="/About" className="text-sm hover:text-[#9A2CAD]">ABOUT US</a>
                            <a href="">|</a>
                            <a href="/EngagementTactics" className="text-sm hover:text-[#9A2CAD]">ENGAGEMENT TACTICS</a>
                            <a href="">|</a>
                            <a href="/globalReach" className="text-sm hover:text-[#9A2CAD]">GLOBAL REACH</a>
                            <a href="">|</a>
                            <a href="/RealTimeInsights" className="text-sm hover:text-[#9A2CAD]">REAL-TIME INSIGHTS</a>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu (when burger is clicked) */}
                {isOpen && (
                    <div className="md:hidden flex flex-col items-start space-y-3 px-6 pb-4">
                        {/* Row 1 (without |) */}
                        <a href="/Fandq" className="text-sm hover:text-[#9A2CAD]">FAQS</a>
                        <a href="/RoiCalculator" className="text-sm hover:text-[#9A2CAD]">ROI CALCULATOR</a>
                        <a href="/ScoreCard" className="text-sm hover:text-[#9A2CAD]">PIPELINE PERFORMANCE SCORECARD</a>
                        <a href="/" className="text-sm hover:text-[#9A2CAD]">HOME</a>
                        <a href="/About" className="text-sm hover:text-[#9A2CAD]">ABOUT US</a>
                        <a href="/EngagementTactics" className="text-sm hover:text-[#9A2CAD]">ENGAGEMENT TACTICS</a>
                        <a href="/globalReach" className="text-sm hover:text-[#9A2CAD]">GLOBAL REACH</a>
                        <a href="/RealTimeInsights" className="text-sm hover:text-[#9A2CAD]">REAL-TIME INSIGHTS</a>
                        <button className="brand-button w-full">REQUEST PROPOSAL</button>
                        <button className="brand-button w-full">Schedule a Call</button>

                        

                        {/* Row 2 (without |) */}
                        
                    </div>
                )}
            </div>
        </nav>
            );
};

          