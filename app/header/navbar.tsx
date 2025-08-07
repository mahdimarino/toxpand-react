import React from 'react'
import './navbar.css';
import Carousel from '~/components/Carousel';



export function Navbar() {
    return (
        <nav className="bg-black text-white  ">
            <div className="container mx-auto">
                {/* Main Nav Row */}
                <div className="flex flex-col md:flex-row items-center px-12">

                    {/* Column 1 - Logo */}
                    <div className="w-full md:w-1/4 mb-4 md:mb-0 ">
                        <div className="h-12 w-40  flex items-center justify-center rounded">
                            <img src="https://toxpand.com/assets/images/icons/xlogo2light.png" alt="" />
                        </div>
                    </div>

                    {/* Column 2 - Navigation Links */}
                    <div className="w-full md:flex-1 md:w-3/4 ">
                        {/* Row 1 - 3 Links + 2 Buttons */}
                        <div className="flex flex-col md:flex-row items-center gap-13  space-y-2 py-4 md:space-y-0">
                            <a href="#" className="text-sm hover:text-[#00ffff]">FAQS</a>
                            <a href="">|</a>
                            <a href="#" className="text-sm hover:text-[#00ffff]">ROI CALCULATOR</a>
                            <a href="">|</a>

                            <a href="#" className="text-sm hover:text-[#00ffff]">PIPELINE PERFORMANCE SCORECARD</a>
                            <div className="flex w-[25] flex-col md:flex-row items-center justify-end gap-3  space-y-2  md:space-y-0">

                                <button className="brand-button text-white w-full md:w-auto">REQUEST PROPOSAL</button>
                                <button className="brand-button text-white w-full md:w-auto">Schedule a Call</button>
                            </div>
                        </div>

                        {/* Row 2 - 5 Links */}
                        <div className="flex flex-col md:flex-row items-center gap-10 space-y-2 md:space-y-0 py-6 border-t-1 border-[#7852A9]">
                            <a href="#" className="text-sm hover:text-[#00ffff]">HOME</a>
                            <a href="">|</a>
                            <a href="#" className="text-sm hover:text-[#00ffff]">ABOUT US</a>
                            <a href="">|</a>
                            <a href="#" className="text-sm hover:text-[#00ffff]">ENGAGEMENT TACTICS</a>
                            <a href="">|</a>
                            <a href="#" className="text-sm hover:text-[#00ffff]">GLOBAL REACH</a>
                            <a href="">|</a>
                            <a href="#" className="text-sm hover:text-[#00ffff]">REAL-TIME INSIGHTS</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
            );
};

          