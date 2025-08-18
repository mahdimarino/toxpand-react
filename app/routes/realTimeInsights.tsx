import React, { useState } from 'react';
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';


export default function RealTimeInsights() {

    return (
        <>
            <Navbar/>
            <section
                className=" p-12 border-b-20 border-[#7852A9]"
                style={{
                    backgroundImage: "url('/backgrounds/GALAXY 5.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center', // This will align the bottom of the image with the bottom of the container
                    // Ensures the section is tall enough to show the bottom
                }}
            >
                <div className='p-2 md:p-12'>
                    <h1 className='my-6 text-white text-2xl md:text-5xl'><b>REAL-TIME <span className='text-[#7852A9]'>INSIGHTS</span></b></h1>
                    <p className='my-6 text-xl text-white'>Get Closer to the Signal. Monthly</p>
                    <p className='my-6 text-white'>We don’t just reach your buyers – we understand them. Every month, we surface fresh behavioral intelligence from our 62M+ first-party subscribers. <br /> What they’re searching for. What content they’re consuming. Who’s engaging, and how.</p>
                    <p className='my-6 text-white'>These aren’t static personas – these are real people, in motion. And this is how they’re behaving, right now.</p>

                </div>
            </section>
            <section className="px-1 md:px-12" style={{
                backgroundImage: "url('/backgrounds/GALAXY 3.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center', // This will align the bottom of the image with the bottom of the container
                // Ensures the section is tall enough to show the bottom
            }}>
                <div className="w-full max-w-full md:max-w-[75%] mx-auto flex flex-col items-center justify-center py-6 md:py-12">
                    <h1 className="text-center text-2xl md:text-3xl text-white">
                        LIVE MONTHLY <span className='text-[#7852A9]'>TRENDS MODULE</span>
                    </h1>
                    <p className='text-white'>
                        (Auto-refreshed Monthly)
                    </p>
                </div>
                <div className='flex flex-col md:flex-row gap-4 px-4 md:px-12'>
                    <div className="md:w-1/2 w-full bg-black text-black p-4 md:p-8 flex flex-col items-center justify-center">
                        <h1 className='text-xl md:text-3xl font-bold text-white'>
                            TOP SURGING INTENT KEYWORDS
                        </h1>
                        <p className='text-white'>
                            (By Job Function)
                        </p>

                        <div className='my-6 flex flex-col px-1 md:px-6 border-b-2 border-white'>
                            <div className="flex justify-end">
                                <div className="flex justify-center p-4 bg-[#2F3D86] w-[55%]">
                                    <p className="text-sm text-white">Trending Keywords</p>
                                </div>
                            </div>
                            {/* Card 1 */}
                            <div className="grid grid-cols-[80px_200px_1fr] divide-y divide-[#2F3D86]">
                                {/* Row 1 */}
                                <div className="flex items-center p-4 col-span-3">
                                    <div className="w-[60px]">
                                        <img src="/icons/ITt.png" alt="IT" width={60} />
                                    </div>
                                    <h3 className="text-lg text-white w-[200px] ml-8">IT Security</h3>
                                    <p className="text-sm text-white ">Ransomware, Zero Trust, SIEM, XDR</p>
                                </div>

                                {/* Row 2 */}
                                <div className="flex items-center p-4 col-span-3">
                                    <div className="w-[60px]">
                                        <img src="/icons/marketingt.png" alt="Marketing" width={60} />
                                    </div>
                                    <h3 className="text-lg text-white w-[200px] ml-8">Marketing</h3>
                                    <p className="text-sm text-white ">ABM, Demand Gen AI, Lead Scoring</p>
                                </div>

                                {/* Row 3 */}
                                <div className="flex items-center p-4 col-span-3">
                                    <div className="w-[60px]">
                                        <img src="/icons/financet.png" alt="Finance" width={60} />
                                    </div>
                                    <h3 className="text-lg text-white w-[200px] ml-8">Finance</h3>
                                    <p className="text-sm text-white ">Spend Management, AI Forecasting</p>
                                </div>

                                {/* Row 4 */}
                                <div className="flex items-center p-4 col-span-3">
                                    <div className="w-[60px]">
                                        <img src="/icons/HRt.png" alt="HR" width={60} />
                                    </div>
                                    <h3 className="text-lg text-white w-[200px] ml-8">HR</h3>
                                    <p className="text-sm text-white ">DEI Tools, Retention Strategy</p>
                                </div>
                            </div>

                        </div>
                        <p className='text-[#00ffff] px-6'>
                            "We've seen a 42% spike in ‘Ransomware’ research among IT Security Managers in the last 90 days."
                        </p>

                    </div>
                    <div className="md:w-1/2 w-full bg-black text-black p-2 md:p-8 flex flex-col items-center justify-center">
                        <h1 className='text-xl md:text-3xl text-white'>
                            TOP ENGAGEMENT BY COMPANY SIZE
                        </h1>

                        <div className='my-6 flex flex-col gap-3'>
                            {/* Header Row - Hidden on small screens */}
                            <div className="hidden md:grid grid-cols-[100px_200px_1fr] items-center text-white p-4 border-b border-[#2F3D86] rounded-tl-4xl">
                                <div className="w-[100px] rounded-full overflow-hidden"></div>
                                <h3 className="text-lg font-bold text-[#00ffff]">Industry</h3>
                                <p className="text-lg font-bold text-white">Engagement Highlights</p>
                            </div>

                            {/* Card 1 */}
                            <div className="flex flex-col md:grid md:grid-cols-[100px_200px_1fr] items-center bg-[#3f51b5] border-b border-[#2F3D86] md:rounded-l-[100px] md:pr-2 p-4 md:p-0">
                                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden mx-auto md:mx-0">
                                    <img src="/icons/Healthcaret.png" alt="Healthcare" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00ffff] text-center md:text-left md:pl-4 mt-2 md:mt-0">Healthcare</h3>
                                <p className="text-md text-white text-center md:text-left mt-2 md:mt-0">Strong AI/Automation content performance</p>
                            </div>

                            {/* Card 2 */}
                            <div className="flex flex-col md:grid md:grid-cols-[100px_200px_1fr] items-center bg-[#6a1b9a] border-b border-[#2F3D86] md:rounded-l-[100px] md:pr-2 p-4 md:p-0">
                                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden mx-auto md:mx-0">
                                    <img src="/icons/Financial Servicest.png" alt="Financial Services" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00ffff] text-center md:text-left md:pl-4 mt-2 md:mt-0">Financial Services</h3>
                                <p className="text-md text-white text-center md:text-left mt-2 md:mt-0">High interest in compliance + risk materials</p>
                            </div>

                            {/* Card 3 */}
                            <div className="flex flex-col md:grid md:grid-cols-[100px_200px_1fr] items-center bg-[#7851a9] border-b border-[#2F3D86] md:rounded-l-[100px] md:pr-2 p-4 md:p-0">
                                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden mx-auto md:mx-0">
                                    <img src="/icons/Manufacturingt.png" alt="Manufacturing" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00ffff] text-center md:text-left md:pl-4 mt-2 md:mt-0">Manufacturing</h3>
                                <p className="text-md text-white text-center md:text-left mt-2 md:mt-0">Surging research in digital twins, IoT</p>
                            </div>

                            {/* Card 4 */}
                            <div className="flex flex-col md:grid md:grid-cols-[100px_200px_1fr] items-center bg-[#9c27b0] border-b border-[#2F3D86] md:rounded-l-[100px] md:pr-2 p-4 md:p-0">
                                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden mx-auto md:mx-0">
                                    <img src="/icons/Technologyt.png" alt="Technology" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00ffff] text-center md:text-left md:pl-4 mt-2 md:mt-0">Technology</h3>
                                <p className="text-md text-white text-center md:text-left mt-2 md:mt-0">Always-on demand for product comparisons</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4 px-1 md:px-12 mt-6'>
                    <div className="md:w-1/2 w-full bg-black text-black p-2 md:p-8 flex flex-col items-center ">
                        <h1 className='text-xl md:text-3xl font-bold text-white'>
                            Top Performing Content Types
                        </h1>
                        <p className='text-white text-xl'>
                            (by Engagement Rate)
                        </p>
                        <p className='text-white text-xl mt-5'>
                            What formats your ICP actually interacts with
                        </p>

                        <div className='my-6 flex w-full flex-col p-6 '>
                            <div className="flex justify-end">
                                <div className="flex p-4 w-[55%]">
                                    <p className="text-xl text-white">Content Type</p>
                                </div>
                                <div className="flex justify-center p-4  w-[55%]">
                                    <p className="text-xl text-white">Avg. Engagement</p>
                                </div>
                            </div>
                            {/* Card 1 */}

                            {/* Row 1 */}
                            <div className="flex items-center m-4 col-span-3 bg-[#ABB7C7] rounded-r-2xl h-[40px] relative">
                                <h3 className="text-lg text-white h-full w-[58%] bg-[#3f51b5] pl-4 py-2 flex items-center">Webinars</h3>
                                <div className="ml-[-10px] h-[60px] w-[60px] bg-white flex items-center justify-center rounded-full border-2 border-[#2F3D86] ">
                                    <span className="text-black font-bold">+58%</span>
                                </div>
                            </div>

                            <div className="flex items-center m-4 col-span-3 bg-[#ABB7C7] rounded-r-2xl h-[40px] relative">
                                <h3 className="text-lg text-white h-full w-[47%] bg-[#6a1b9a] pl-4 py-2 flex items-center">Industry Reports</h3>
                                <div className="ml-[-10px] h-[60px] w-[60px] bg-white flex items-center justify-center rounded-full border-2 border-[#2F3D86] ">
                                    <span className="text-black font-bold">+47%</span>
                                </div>
                            </div>

                            <div className="flex items-center m-4 col-span-3 bg-[#ABB7C7] rounded-r-2xl h-[40px] relative">
                                <h3 className="text-lg text-white h-full w-[33%] bg-[#7851a9] pl-4 py-2 flex items-center">Infographics</h3>
                                <div className="ml-[-10px] h-[60px] w-[60px] bg-white flex items-center justify-center rounded-full border-2 border-[#2F3D86] ">
                                    <span className="text-black font-bold">+33%</span>
                                </div>
                            </div>

                            <div className="flex items-center m-4 col-span-3 bg-[#ABB7C7] rounded-r-2xl h-[40px] relative">
                                <h3 className="text-lg text-white h-full w-[29%] bg-[#9c27b0] pl-4 py-2 flex items-center">eBooks</h3>
                                <div className="ml-[-10px] h-[60px] w-[60px] bg-white flex items-center justify-center rounded-full border-2 border-[#2F3D86] ">
                                    <span className="text-black font-bold">+29%</span>
                                </div>
                            </div>
                        </div>


                        <p className='text-[#00ffff] md:text-xl md;text-2xl px-2 md:px-6'>
                            <b>
                                "Interactive formats like webinars and benchmarks consistently outperform static PDFs across senior-level tech audiences."

                            </b>
                        </p>

                    </div>
                    <div className="md:w-1/2 w-full text-black gap-4  flex flex-col items-center justify-center">
                        <div className="py-6 w-full bg-black text-black  flex flex-col items-center justify-center">
                            <h1 className='text-xl md:text-3xl font-bold text-white'>
                                Top Engagement by Company Size
                            </h1>


                            <div className='my-6 flex flex-col px-6'>
                                <div className="flex justify-end">
                                    <div className="flex justify-center p-4 bg-[#2F3D86] w-[55%]">
                                        <p className="text-md text-white"><b>Company Size</b></p>
                                    </div>
                                    <div className="flex justify-center p-4 bg-[#2F3D86] w-[55%]">
                                        <p className="text-md text-white"><b>Content Trends</b></p>
                                    </div>
                                </div>
                                {/* Card 1 */}
                                <div className="grid gap-1 grid-cols-[80px_200px_1fr] divide-y divide-[#2F3D86]">


                                    {/* Row 1 */}
                                    <div className="flex items-center  col-span-3 pr-4 mt">
                                        <div className=" bg-[#7852A9] p-2">
                                            <h1 className='text-xl text-white text-center'>500  <br /> <span className='text-xs'>Employees</span></h1>
                                        </div>
                                        <h3 className="text-sm text-white w-[200px] ml-8">SMB</h3>
                                        <p className="text-sm text-white ">Hands-on guides, ROI calculators</p>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="flex items-center  col-span-3">
                                        <div className=" bg-[#7852A9] p-2">
                                            <h1 className='text-xl text-white text-center'>5000  <br /> <span className='text-xs'>Employees</span></h1>
                                        </div>
                                        <h3 className="text-sm text-white w-[200px] ml-8">Mid-Market</h3>
                                        <p className="text-sm text-white ">Solution overviews, comparison tools</p>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="flex items-center  col-span-3 border-b-1 border-[#2F3D86]">
                                        <div className=" bg-[#7852A9] p-2">
                                            <h1 className='text-xl text-white text-center'>500 <br /> <span className='text-xs'>Employees</span></h1>
                                        </div>
                                        <h3 className="text-sm text-white w-[200px] ml-8">Enterprise</h3>
                                        <p className="text-sm text-white ">Executive-level reports, risk frameworks</p>
                                    </div>


                                </div>

                            </div>

                        </div>
                        <div className="py-6 w-full bg-black text-black  flex flex-col items-center justify-center">
                            <h1 className='text-xl md:text-3xl font-bold text-white'>
                                Top Engagement by Job Level Title
                            </h1>


                            <div className='my-6 flex flex-col px-6'>
                                <div className="flex justify-end">
                                    <div className="flex p-4 bg-[#2F3D86] w-[55%]">
                                        <p className="text-md text-white"><b>Title Level</b></p>
                                    </div>
                                    <div className="flex p-4 bg-[#2F3D86] w-[55%]">
                                        <p className="text-md text-white"><b>Behavioral Signals</b></p>
                                    </div>
                                </div>
                                {/* Card 1 */}
                                <div className="grid gap-1 grid-cols-[80px_200px_1fr] divide-y divide-[#00ffff]">


                                    {/* Row 1 */}
                                    <div className="flex items-center  col-span-3 pr-4 mt p-4">
                                        {/* <div className=" bg-[#7852A9] p-2">
                                            <h1 className='text-xl text-white text-center'>500  <br /> <span className='text-xs'>Employees</span></h1>
                                        </div> */}
                                        <h3 className="text-sm text-white w-[200px] "> Managers</h3>
                                        <p className="text-sm text-white ">Task-oriented content, tools, checklists</p>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="flex items-center  col-span-3 p-4">
                                        {/* <div className=" bg-[#7852A9] p-2">
                                            <h1 className='text-xl text-white text-center'>5000  <br /> <span className='text-xs'>Employees</span></h1>
                                        </div> */}
                                        <h3 className="text-sm text-white w-[200px] ">Directors</h3>
                                        <p className="text-sm text-white ">Strategy guidance, vendor landscape views</p>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="flex items-center  col-span-3 border-b-1 border-[#00ffff] p-4">
                                        {/* <div className=" bg-[#7852A9] p-2">
                                            <h1 className='text-xl text-white text-center'>500 <br /> <span className='text-xs'>Employees</span></h1>
                                        </div> */}
                                        <h3 className="text-sm text-white w-[200px] ">VPs / C-Level</h3>
                                        <p className="text-sm text-white ">ROI, innovation trends, market insights</p>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <section className='p-2 md:p-12'>
                    <div className='md:p-4 border-2 border-[#00ffff]'>
                        <div className="w-full max-w-full bg-black border-white mx-auto flex flex-col items-center justify-center py-6 ">
                            <div className="w-full max-w-full  mx-auto flex flex-col items-center justify-center py-6 md:py-12">
                                <h1 className="text-center text-2xl md:text-3xl text-white">
                                    SIGNAL HIGHLIGHTS <span className='text-[#7852A9]'>& TAKEAWAYS</span>
                                </h1>
                                <p className='text-white text-center'>
                                    (A few editorial-style callouts, refreshed monthly)
                                </p>
                            </div>

                            <div className='flex flex-col md:flex-row gap-4 p-4 md:px-12'>
                                {/* Cybersecurity Card */}
                                <div className="bg-[#D6D6D8] rounded-lg p-6 text-black text-center flex-1 min-h-[180px]">
                                    <p className="text-xl md:leading-relaxed">
                                        "Content featuring Zero Trust frameworks saw a 61% engagement increase among VP+ roles in financial services."
                                    </p>
                                </div>

                                {/* HR Tech Card */}
                                <div className="bg-[#D6D6D8] rounded-lg p-6 text-black text-center flex-1 min-h-[180px]">
                                    <p className="text-xl md:leading-relaxed">
                                        "We're tracking increased demand for AI in workforce planning among HR professionals at mid-sized firms."
                                    </p>
                                </div>

                                {/* Marketing Card */}
                                <div className="bg-[#D6D6D8] rounded-lg p-6 text-black text-center flex-1 min-h-[180px]">
                                    <p className="text-xl md:leading-relaxed">
                                        "Directors of Marketing are 2.3x more likely to engage with ABM content tagged with predictive intelligence."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </section >
            <section className='p-6 md:p-12 border-t-20 border-[#7852A9]' style={{
                backgroundImage: "url('/backgrounds/GALAXY 3.png')",
                backgroundSize: 'cover',

            }}>

                <div className="w-full max-w-full md:max-w-[75%] mx-auto flex flex-col items-center justify-center p-6 md:p-12">
                    <h1 className="text-center text-xl md:text-4xl mt-2 font-bold text-[#7852A9]">
                        THIS IS THE PULSE OF THE MARKET
                    </h1>
                    <p className="text-center text-lg md:text-2xl mt-2 text-white">
                        Want to know what your exact audience is engaging with? We can show you.
                    </p>
                    <div className="gap-3 md:gap-4 flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 w-full md:w-auto">
                        <button className="brand-button text-white w-full md:w-auto">REQUEST A CUSTOM INSIGHTS BRIEF</button>
                        <button className="brand-button text-white w-full md:w-auto">TALK TO A DEMAND STRATEGIST</button>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )

}