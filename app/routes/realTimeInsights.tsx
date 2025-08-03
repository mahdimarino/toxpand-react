import React, { useState } from 'react';


export default function RealTimeInsights() {

    return (
        <>
            <section
                className=" p-12 border-b-20 border-[#7852A9]"
                style={{
                    backgroundImage: "url('/backgrounds/GALAXY 5.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center', // This will align the bottom of the image with the bottom of the container
                    // Ensures the section is tall enough to show the bottom
                }}
            >
                <div className='p-12'>
                    <h1 className='my-6 text-white text-5xl'><b>REAL-TIME <span className='text-[#7852A9]'>INSIGHTS</span></b></h1>
                    <p className='my-6 text-xl text-white'>Get Closer to the Signal. Monthly</p>
                    <p className='my-6 text-white'>We don’t just reach your buyers – we understand them. Every month, we surface fresh behavioral intelligence from our 62M+ first-party subscribers. <br /> What they’re searching for. What content they’re consuming. Who’s engaging, and how.</p>
                    <p className='my-6 text-white'>These aren’t static personas – these are real people, in motion. And this is how they’re behaving, right now.</p>

                </div>
            </section>
            <section className="px-6 md:px-12" style={{
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
                        <h1 className='text-3xl font-bold text-white'>
                            TOP ENGAGEMENT BY COMPANY SIZE
                        </h1>
                        <p className='text-white'>
                            (By Job Function)
                        </p>
                        
                        <div className='my-6 flex flex-col gap-6'>
                            {/* Card 1 */}
                            <div className="flex items-center p-4  border-b-1 border-[#00ffff]">
                                <div className="flex items-center">
                                    {/* Circular Image */}
                                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="/icons/Predictive Targeting.png"
                                            alt="Card 1"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Content - Now in a row with gap */}
                                    <div className="flex items-center gap-10">
                                        <h3 className="text-lg text-white">Healthcare</h3>
                                        <p className="text-sm text-white">Detect, prioritize, and engage based on live intent on live intent</p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="flex items-center p-4  border-b-1 border-[#00ffff]">
                                <div className="flex items-center">
                                    {/* Circular Image */}
                                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="/icons/Predictive Targeting.png"
                                            alt="Card 1"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Content - Now in a row with gap */}
                                    <div className="flex items-center gap-10">
                                        <h3 className="text-lg text-white">Healthcare</h3>
                                        <p className="text-sm text-white">Detect, prioritize, and engage based on live intent on live intent</p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="flex items-center p-4  border-b-1 border-[#00ffff]">
                                <div className="flex items-center">
                                    {/* Circular Image */}
                                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="/icons/Predictive Targeting.png"
                                            alt="Card 1"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Content - Now in a row with gap */}
                                    <div className="flex items-center gap-10">
                                        <h3 className="text-lg text-white">Healthcare</h3>
                                        <p className="text-sm text-white">Detect, prioritize, and engage based on live intent on live intent</p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="flex items-center p-4  border-b-1 border-[#00ffff]">
                                <div className="flex items-center">
                                    {/* Circular Image */}
                                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="/icons/Predictive Targeting.png"
                                            alt="Card 1"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Content - Now in a row with gap */}
                                    <div className="flex items-center gap-10">
                                        <h3 className="text-lg text-white">Healthcare</h3>
                                        <p className="text-sm text-white">Detect, prioritize, and engage based on live intent on live intent</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 my-6">
                            <button className="brand-button text-white">LEARN MORE</button>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full bg-black text-black p-4 md:p-8 flex flex-col items-center justify-center">
                        <h1 className='text-3xl text-white'>
                            TOP ENGAGEMENT BY COMPANY SIZE
                        </h1>
                        
                        <div className='my-6 flex flex-col gap-3'>
                            {/* Card 1 */}
                            <div className="flex items-center bg-[#6A1B9A] pr-4 rounded-lg">
                                <div className="flex items-center">
                                    {/* Circular Image */}
                                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="/icons/Predictive Targeting.png"
                                            alt="Card 1"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Content - Now in a row with gap */}
                                    <div className="flex items-center gap-10">
                                        <h3 className="text-lg font-bold text-[#00ffff]">Healthcare</h3>
                                        <p className="text-sm text-white">Detect, prioritize, and engage based on live intent on live intent</p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="flex items-center bg-[#6A1B9A]  p-4">
                                <img
                                    src="/icons/earth.png"
                                    alt="Card 1"
                                    className="w-16 h-16 object-cover rounded-md mr-4"
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-[#00ffff]">SIGNAL-DRIVEN DELIVERY</h3>
                                    <p className="text-sm text-white">adapt messaging to buyer behavior in real time</p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="flex items-center bg-[#6A1B9A]  p-4">
                                <img
                                    src="/icons/Performance Reference.png"
                                    alt="Card 1"
                                    className="w-16 h-16 object-cover rounded-md mr-4"
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-[#00ffff]">PERFORMANCE INTELLIGENCE</h3>
                                    <p className="text-sm text-white">optimize outreach, content, and cadence automatically</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 my-6">
                            <button className="brand-button text-white">LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}