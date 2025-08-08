import React from 'react'
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';


export default function globalReach() {
    return (
        <>
                    <Navbar />
        
            <section
                className="p-6 md:p-12"
                style={{
                    backgroundImage: "url('/backgrounds/GALAXY 5.png')",
                    backgroundSize: 'cover',
                }}
            >
                <div className="p-6 md:p-12 flex-col inset-0 bg-opacity-50 flex items-center justify-center z-10">
                    <div className="text-center p-4 md:p-6 px-4 text-white max-w-4xl">
                        <h1 className="text-4xl md:text-6xl text-[#7852A9] font-semibold brandColor">
                            GLOBAL REACH
                        </h1>
                        <p className="text-lg md:text-2xl mx-auto max-w-1xl">
                            designed to convert signal into sales momentum.
                        </p>
                    </div>
                </div>
            </section>

            <section className='bg-black px-6 md:px-12 py-12 md:py-24 text-white flex items-center justify-center'>
                <div className="w-full max-w-full md:max-w-[75%] mx-auto text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9]">
                        BUILD PIPELINE WHERE YOUR BUYERS ARE
                    </h1>
                    <p className="text-lg md:text-2xl mt-4">
                        Tap into over 62 million verified global subscribers — all ethically sourced, privacy-compliant, and aligned to your ICP.
                    </p>
                </div>
            </section>

            <section className="bg-black px-6 md:px-12">
                <div className="w-full max-w-full md:max-w-[75%] mx-auto flex flex-col items-center justify-center my-6 md:my-12">
                    <h1 className="text-center text-2xl md:text-3xl text-white">
                        EXPLORE OUR GLOBAL REACH
                    </h1>
                </div>
                <div className='flex flex-col md:flex-row gap-4 px-4 md:px-12'>
                    <div className="md:w-1/3 w-full bg-white text-black p-4 md:p-8 flex flex-col items-center justify-center">
                        <p className='mb-4 text-center text-sm md:text-base'>
                            hello my name is mahdi and I'm developing a new project that will revolutionize the way new project that will revolutionize the way
                        </p>
                        <div className='my-4 md:my-6 w-full'>
                            <select className="w-full border-0 border-t-3 border-solid border-[#7852A9] py-3 md:py-4 text-sm md:text-base">
                                <option value="">Select option 1</option>
                                <option value="option1a">Option 1A</option>
                                <option value="option1b">Option 1B</option>
                                <option value="option1c">Option 1C</option>
                            </select>
                            <select className="w-full border-0 border-t-3 border-solid border-[#7852A9] py-3 md:py-4 text-sm md:text-base">
                                <option value="">Select option 2</option>
                                <option value="option2a">Option 2A</option>
                                <option value="option2b">Option 2B</option>
                                <option value="option2c">Option 2C</option>
                            </select>
                            <select className="w-full border-0 border-t-3 border-b-3 border-solid border-[#7852A9] py-3 md:py-4 text-sm md:text-base">
                                <option value="">Select option 3</option>
                                <option value="option3a">Option 3A</option>
                                <option value="option3b">Option 3B</option>
                                <option value="option3c">Option 3C</option>
                            </select>
                        </div>
                        <div className="flex gap-2 md:gap-4 my-4 md:my-6 w-full justify-center">
                            <button className="brand-button text-white text-sm md:text-base px-4 py-2">RESET</button>
                            <button className="brand-button text-white text-sm md:text-base px-4 py-2">SEE RESULT</button>
                        </div>
                    </div>
                    <div className="md:w-2/3 w-full bg-white text-black p-4 md:p-8 flex items-center justify-center min-h-[300px]">
                        <h2 className="text-xl md:text-2xl font-bold">Column 2</h2>
                    </div>
                </div>
            </section>

            <section className="bg-black p-6 md:p-12 flex flex-col items-center justify-center min-h-screen" style={{
                backgroundImage: "url('/backgrounds/GALAXY 6.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="w-full max-w-full  mx-auto flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-4xl font-bold text-[#7852A9]">
                            THE FOUNDATION — FIRST-PARTY BY DESIGN
                        </h1>
                        <h2 className="text-xl md:text-2xl mt-2 md:mt-4 text-white">
                            100% FIRST-PARTY, ZERO COMPROMISES.
                        </h2>
                        <p className="text-sm md:text-base mt-4 md:mt-6 text-white max-w-3xl mx-auto px-4 md:px-0">
                            Every contact in our ecosystem is opt-in, verified, and refreshed continuously. That means no third-party guesswork, no data resellers – just compliant, accurate, and active buyers.
                        </p>
                    </div>

                    <div className="my-6 md:my-12 text-center">
                        <h3 className="text-lg md:text-2xl text-white">KEY VALUES:</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:flex md:flex-row w-full justify-center items-center px-2 md:px-6">
                        {[
                            {
                                img: "/backgrounds/r2.png",
                                title: "62M+",
                                subtitle: "GLOBAL SUBSCRIBERS"
                            },
                            {
                                img: "/backgrounds/r3.png",
                                title: "GDPR, CASL, CCPA",
                                subtitle: "COMPLIANT"
                            },
                            {
                                img: "/backgrounds/r4.png",
                                content: "FULLY TRANSPARENT SOURCING & ENGAGEMENT"
                            },
                            {
                                img: "/backgrounds/r1.png",
                                content: "REAL-TIME ENRICHMENT AND SIGNAL-MATCHING VIA DEMANDFUSION™"
                            }
                        ].map((card, index) => (
                            <div
                                key={index}
                                className="relative rounded-full w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0 flex items-center justify-center mx-2"
                            >
                                <img
                                    src={card.img}
                                    alt=""
                                    className="absolute w-full h-full object-cover"
                                />
                                <div className="relative z-10 text-center p-2 md:p-4 bg-opacity-40 rounded-full w-full h-full flex flex-col items-center justify-center">
                                    {card.title && (
                                        <h2 className="text-lg md:text-2xl lg:text-3xl mb-1 font-bold text-white px-1 md:px-2">
                                            {card.title}
                                        </h2>
                                    )}
                                    {card.subtitle ? (
                                        <p className="text-[10px] md:text-xs uppercase tracking-wider text-white px-1">
                                            {card.subtitle}
                                        </p>
                                    ) : (
                                        <p className="text-[10px] md:text-xs uppercase tracking-wider text-white px-1">
                                            {card.content}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-16 w-full">
                        <div className="grid grid-cols-3 gap-4 md:flex md:flex-row justify-center items-center">
                            {['Inc Power', 'ISO', 'gdpr', 'ccpa', 'casl', 'canspam'].map((num) => (
                                <div key={num} className="rounded-lg shadow-md p-3 md:p-4 flex items-center justify-center mx-1 md:mx-3">
                                    <img
                                        src={`/logos/${num}.png`}
                                        alt={`${num} logo`}
                                        className="w-full h-auto max-h-16 md:max-h-30 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-black p-6 md:p-12 text-white border-solid border-[#7852A9] border-b-8 md:border-b-20 border-t-8 md:border-t-20'>
                <div className='flex flex-col md:flex-row px-4 md:px-12'>
                    <div className="md:w-1/3 w-full text-white py-6 md:py-12 flex flex-col">
                        <div className='mb-4 md:mb-6'>
                            <h2 className="text-xl md:text-2xl font-bold text-[#7852A9]">GLOBAL BY NATURE,</h2>
                            <h2 className="text-xl md:text-2xl font-bold">LOCAL BY SIGNAL</h2>
                        </div>
                        <div className='mb-4 md:mb-6'>
                            <h2 className="text-xl md:text-2xl font-bold">A WORLD OF REACH.</h2>
                            <h2 className="text-xl md:text-2xl font-bold">A SIGNAL-LED APPROACH.</h2>
                        </div>
                        <p className='py-3 md:py-6 text-sm md:text-base'>From North America to APAC, we activate global programs with local intelligence and compliance baked in.</p>
                        <h1 className='py-3 md:py-6 text-lg md:text-xl'>TOP PERFORMING GEOS:</h1>
                        <ul className="list-disc list-inside pl-2 md:pl-4 grid grid-cols-2 gap-1">
                            <li className='text-xs'>United States</li>
                            <li className='text-xs'>Canada</li>
                            <li className='text-xs'>United Kingdom</li>
                            <li className='text-xs'>Germany</li>
                            <li className='text-xs'>France</li>
                            <li className='text-xs'>Nordics</li>
                            <li className='text-xs'>APAC</li>
                        </ul>
                    </div>
                    <div className="md:w-2/3 w-full text-black p-4 md:p-8 flex items-center justify-center">
                        <img src="/map.png" alt="World map" className="w-full h-auto" />
                    </div>
                </div>
            </section>

            <section className='p-6 md:p-12' style={{
                backgroundImage: "url('/backgrounds/GALAXY 3.png')",
                backgroundSize: 'cover',
            }}>
                <div className='flex flex-col gap-6 md:gap-12 md:flex-row px-4 md:px-12 m-2 md:m-3'>
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    }} className="w-full  text-white p-6 md:p-12 flex flex-col border-solid border-[rgba(255,255,255,0.6)] border rounded-xl md:rounded-2xl">
                        <h1 className="text-center text-xl md:text-4xl mt-2 font-bold text-[#7852A9]">
                            THE PEOPLE BEHIND THE DATA
                        </h1>
                        <h1 className="text-center text-lg md:text-2xl mt-2 text-white">
                            WE DON'T JUST REACH PEOPLE. <br />
                            WE REACH THE RIGHT PEOPLE.
                        </h1>
                        <p className="text-center text-sm md:text-base mt-2 text-white p-3 md:p-6">
                            From global CIOs to regional HR leaders, our reach spans every major job function driving SMB to enterprise decision-making.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-8">
                            {[
                                { icon: "/icons/it.png", title: "Information Technology" },
                                { icon: "/icons/marketing.png", title: "Marketing" },
                                { icon: "/icons/finance.png", title: "Finance" },
                                { icon: "/icons/hr.png", title: "Human Resources" },
                                { icon: "/icons/Operations.png", title: "Operations" },
                                { icon: "/icons/sales.png", title: "Sales" }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center rounded-lg p-2 md:p-4 shadow-md">
                                    <img src={item.icon} alt={item.title} className=" object-contain mb-1 md:mb-2" />
                                    <h3 className="font-bold text-xs md:text-sm text-center">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    }} className="w-full text-white p-6 md:p-12 flex flex-col border-solid border-[rgba(255,255,255,0.6)] border rounded-xl md:rounded-2xl">
                        <h1 className="text-center text-xl md:text-4xl mt-2 font-bold text-[#7852A9]">
                            INDUSTRY PENETRATION
                        </h1>
                        <h1 className="text-center text-lg md:text-2xl mt-2 text-white">
                            BUILT TO SERVE KEY VERTICALS
                        </h1>
                        <p className="text-center text-sm md:text-base mt-2 p-3 md:p-6 text-white">
                            We focus on industries where complexity meets opportunity—enabling scalable programs for the companies shaping tomorrow.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-8">
                            {[
                                { icon: "/icons/healthcare.png", title: "Healthcare" },
                                { icon: "/icons/manufacturing.png", title: "Manufacturing" },
                                { icon: "/icons/financial services.png", title: "Financial Services" },
                                { icon: "/icons/retail.png", title: "Retail" },
                                { icon: "/icons/technology.png", title: "Technology" }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center rounded-lg p-2 md:p-4 shadow-md">
                                    <img src={item.icon} alt={item.title} className="w object-contain mb-1 md:mb-2" />
                                    <h3 className="font-bold text-xs md:text-sm text-center">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full md:max-w-[75%] mx-auto flex flex-col items-center justify-center p-6 md:p-12">
                    <h1 className="text-center text-xl md:text-3xl mt-2 font-bold text-[#7852A9]">
                        KNOW YOUR ICP. WE'LL MATCH THE SIGNAL. <span className="text-white">ANYWHERE</span>
                    </h1>
                    <p className="text-center text-lg md:text-2xl mt-2 text-white">
                        Build geo-aligned, function-targeted, industry-specific demand – globally.
                    </p>
                    <div className="gap-3 md:gap-4 flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 w-full md:w-auto">
                        <button className="brand-button text-white w-full md:w-auto">REQUEST A PROPOSAL</button>
                        <button className="brand-button text-white w-full md:w-auto">TALK TO A TARGETING SPECIALIST</button>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}