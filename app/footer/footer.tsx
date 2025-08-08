import React from 'react'





export function Footer() {
    return (
        <footer className="bg-black text-white pt-8 md:pt-12 px-4 md:px-12">
            <div className='pb-6 border-b-2 border-white'>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
                    {/* Logo Column */}
                    <div className="flex flex-col items-start">
                        <img
                            src="https://toxpand.com/assets/images/icons/xlogo2light.png"
                            alt="Logo"
                            className="w-32 md:w-40 mb-4"
                        />
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold mb-2 md:mb-4 text-lg">Company</h3>
                        <ul className="space-y-2 mt-2 md:mt-4">
                            <li><a href="/about" className="hover:underline text-sm md:text-base">Awards</a></li>
                            <li><a href="/careers" className="hover:underline text-sm md:text-base">Careers</a></li>
                            <li><a href="/contact" className="hover:underline text-sm md:text-base">About us</a></li>
                            <li><a href="/contact" className="hover:underline text-sm md:text-base">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold mb-2 md:mb-4 text-lg">Quick Links</h3>
                        <ul className="space-y-2 mt-2 md:mt-4">
                            <li><a href="/lead-generation" className="hover:underline text-sm md:text-base">Engagement Tactics</a></li>
                            <li><a href="/email-marketing" className="hover:underline text-sm md:text-base">Global Reach</a></li>
                            <li><a href="/consulting" className="hover:underline text-sm md:text-base">Real-Time Insights</a></li>
                            <li><a href="/consulting" className="hover:underline text-sm md:text-base">Pipeline Performance Scorecard</a></li>
                        </ul>
                    </div>

                    {/* Newsletter & Links */}
                    <div>

                        <form className="flex mt-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="rounded bg-white text-black px-3 py-1 text-sm md:text-base flex-grow"
                            />
                            <button
                                type="submit"
                                className="footer-button"
                            >
                                SIGNUP
                            </button>
                        </form>
                        <ul className="space-y-2 mt-4 md:mt-6">
                            <li><a href="/blog" className="hover:underline text-sm md:text-base">ROI Calculator</a></li>
                            <li><a href="/newsletter" className="hover:underline text-sm md:text-base">Request Proposal</a></li>
                            <li><a href="/privacy-policy" className="hover:underline text-sm md:text-base">Schedule a Call</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
                <div className="flex justify-start">
                    <p>
                        © 2025 TOXPAND All Rights Reserved.
                    </p>
                </div>
                <div className="flex md:justify-center">
                    <div className="flex flex-col md:flex-row md:items-center gap-3  space-y-2 md:space-y-0">
                        <a href="/Fandq" className="text-sm hover:text-[#9A2CAD]"> Privacy Policy</a>
                        <p className='hidden md:block'>|</p>
                        <a href="/RoiCalculator" className="text-sm hover:text-[#9A2CAD]">Terms of Service</a>
                        <p className='hidden md:block'>|</p>

                        <a href="/ScoreCard" className="text-sm hover:text-[#9A2CAD]">Cookie Policy</a>
                    </div>
                </div>
                <div className="flex md:justify-end">
                    <div className="flex md:flex-row items-center gap-3  space-y-2 md:space-y-0">
                        <a href="">
                            <img src="/icons/fb.png" width={40} alt="" />
                        </a>
                        <a href="">
                            <img src="/icons/linkedin.png" width={40} alt="" />
                        </a>
                        <a href="">
                            <img src="/icons/yt.png" width={40} alt="" />
                        </a>
                        <a href="">
                            <img src="/icons/whatsapp.png" width={40} alt="" />
                        </a>
                    </div>
                </div>
            </div>


        </footer>
    );
};