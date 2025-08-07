import React from 'react'
import Carousel from '~/components/Carousel';
import { Navbar } from '~/header/navbar';

interface MetaArgs {
    params?: Record<string, string>;
    location?: Location;
}

export function meta({ }: MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function HomePage() {
    return (
        <>
        <Navbar/>
            <section className='p-12'>

                <div className="w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col items-center justify-center m-6"
                >
                    <h1 className="text-center text-4xl mt-2 font-bold text-[#7852A9]">
                        AI-POWERED PIPELINE. BUILT THE RIGHT WAY.
                    </h1>
                    <p className="text-center text-1xl mt-2 text-white">
                        We’re more than a lead gen agency.
                    </p>
                    <p className="text-center text-1xl text-white">
                        We’re your in-house, AI-driven demand partner – turning first-party signals into predictable pipelines.
                    </p>

                    <div className="gap-4 flex flex-row items-center justify-between mt-6">
                        <button className="brand-button text-white">HOW IT WORKS</button>
                    </div>
                </div>

            </section>
            <section
                className="bg-black p-12 border-b-20 border-[#7852A9]"
                style={{
                    backgroundImage: "url('/backgrounds/GALAXY 2.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center', // This will align the bottom of the image with the bottom of the container
                    // Ensures the section is tall enough to show the bottom
                }}
            >
                {/* Your content here */}

                <div className="w-full mx-auto flex flex-col items-center justify-center m-6"
                >

                    <div className='m-6 '>
                        <h1 className='text-white text-5xl'>WHAT WE DO</h1>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 my-8 w-full px-6">
                        {/* All cards now have consistent sizing */}
                        {[
                            {
                                img: "/backgrounds/r2.png",
                                title: "Tailored Campaigns",
                                content: "built around your ICP and revenue goals"
                            },
                            {
                                img: "/backgrounds/r3.png",
                                title: "62M+",
                                content: "Global Subscribers, 100% first-party, opt-in, and compliant"
                            },
                            {
                                img: "/backgrounds/r1.png",
                                content: "DemandFusion AI detects real-time buying signals and adapts in motion"
                            },
                            {
                                img: "/backgrounds/r4.png",
                                content: "Full-Funnel Activation across brand, demand, and sales enablement"
                            },
                            {
                                img: "/backgrounds/r1.png",
                                content: "Live Performance Dashboards for total visibility and ROI clarity"
                            }
                        ].map((card, index) => (
                            <div
                                key={index}
                                className="relative rounded-full w-48 h-48 md:w-56 md:h-56 flex-shrink-0 flex items-center justify-center"
                            >
                                <img
                                    src={card.img}
                                    alt=""
                                    className="absolute w-full h-full object-cover"
                                />
                                <div className="relative z-10 text-center p-4 bg-opacity-40 rounded-full w-full h-full flex flex-col items-center justify-center">
                                    {card.title && (
                                        <h2 className="text-2xl md:text-3xl mb-1 font-bold text-white px-2">
                                            {card.title}
                                        </h2>
                                    )}

                                    <p className="text-xs md:text-sm uppercase tracking-wider text-white px-2">
                                        {card.content}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="gap-4 flex flex-row items-center justify-between my-12">
                        <button className="brand-button text-white">EXPLORE ENGAGEMENT TACTICS</button>
                    </div>


                </div>

            </section>
            <section className="bg-black md:p-12 border-b-20 border-[#7852A9]">

                <div className='flex flex-col md:flex-row gap-8 md:px-12'>
                    <div className="md:w-1/2 w-full text-white p-8 flex flex-col">
                        <h1 className='text-3xl font-bold text-[#7852A9]'>
                            DEMANDFUSION AI
                        </h1>
                        <div className='my-4'>
                            <p>
                                Our proprietary engine fusing real-time signals with campaign execution.
                            </p>
                            <p>
                                DemandFusion powers every campaign with:
                            </p>
                        </div>
                        <div className='my-6 flex flex-col gap-6'>
                            {/* Card 1 */}
                            <div className="flex items-center bg-[#6A1B9A]  p-4">
                                <img
                                    src="/icons/Predictive Targeting.png"
                                    alt="Card 1"
                                    className="w-16 h-16 object-cover rounded-md mr-4"
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-[#00ffff]">PREDICTIVE TARGETING</h3>
                                    <p className="text-sm text-white">detect, prioritize, and engage based on live intent</p>
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
                    <div className="md:w-1/2 w-full bg-white text-black p-8  flex items-center justify-center">
                        {/* Right column content */}
                        <h2 className="text-2xl font-bold">Column 2</h2>
                    </div>
                </div>
                <div className='md:p-12'>
                    <div className="w-full mx-auto flex flex-col items-center justify-center m-7 border-t-2 border-white pt-6">
                        <h1 className="text-center text-4xl text-[#7852A9]">
                            FUSION WORKFLOW
                        </h1>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 p-12 md:px-12 place-items-center">
                        {/* Card 1 */}
                        <div className="outer-circle">
                            <div className="shadow-lg  text-center rounded-full border-2 border-[#00ffff] w-64 h-64 flex items-center justify-center">
                                <div className="text-white">
                                    <div className="mx-auto">
                                        <img
                                            width={100}
                                            src="/icons/signal.png"
                                            alt="ETHICAL FIRST-PARTY DATA"
                                            className="mx-auto"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-3xl">SIGNAL</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Card 2 */}
                        <div className="outer-circle">
                            <div className="shadow-lg  text-center rounded-full border-2 border-[#00ffff] w-64 h-64 flex items-center justify-center">
                                <div className="text-white">
                                    <div className="mx-auto">
                                        <img
                                            width={100}
                                            src="/icons/delivery.png"
                                            alt="ETHICAL FIRST-PARTY DATA"
                                            className="mx-auto"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-3xl">DELIVRY</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Card 3 */}
                        <div className="outer-circle">
                            <div className="shadow-lg  text-center rounded-full border-2 border-[#00ffff] w-64 h-64 flex items-center justify-center">
                                <div className="text-white">
                                    <div className="mx-auto">
                                        <img
                                            width={100}
                                            src="/icons/roi.png"
                                            alt="ETHICAL FIRST-PARTY DATA"
                                            className="mx-auto"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-3xl">ROI </p>
                                        <p className='text-sm'>DASHBOARD</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section
                
                style={{
                    backgroundImage: "url('/backgrounds/GALAXY 6.png')",
                    backgroundSize: 'cover',
                   
                }}
            >
                <Carousel />
            </section>
            <section className="bg-black container-fluid mx-auto py-12 bg-black text-white px-10">
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center item-center px-4 md:px-10 ">
                    {/* Card 1 */}
                    <div className="rounded-xl shadow-lg py-10 text-center ">
                        <div className="m-1 text-white p-4 rounded-lg">
                            <div className="rounded-lg mx-auto">
                                <img
                                    src="/icons/target smarter.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div className='p-6 border-1 border-white rounded-xl'>
                                <div>
                                    <h2 className="text-2xl font-bold">TARGET SMARTER,</h2>
                                    <h2 className="text-4xl font-extrabold text-[#7852A9]">ANYWHERE</h2>


                                    <p className='font-rajdhani text-sm mt-3'>Whether you're focused on IT, Marketing, Finance – or targeting the US, EMEA, or APAC – we connect you to the right buyers, in the right moment.</p>
                                    <p className='mt-2'>By Job Function, By Industry, By Region, By Company Size</p>
                                </div>

                                <button className="brand-button mt-10 ">SEE OUR GLOBAL REACH</button>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl shadow-lg py-10 text-center ">
                        <div className="m-1 text-white p-4 rounded-lg">
                            <div className="rounded-lg mx-auto">
                                <img
                                    src="/icons/ready to build.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div className='p-6 border-1 border-white rounded-xl'>
                                <div>
                                    <h2 className="text-2xl font-bold">READY TO BUILD</h2>
                                    <h2 className="text-4xl font-extrabold text-[#7852A9]">SMARTER PIPELINE?</h2>


                                    <p className='font-rajdhani text-sm mt-3'>Let's create demand that drives real outcomes.</p>
                                    <p>No fluff, No recycled leads.</p>
                                    <p className='mt-2'>Just verified engagement at scale.</p>
                                </div>

                                <button className="brand-button mt-10 ">BOOK A STRATEGY CALL</button>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
        </>
    )
}