import React from 'react'



export default function globalReach() {
    return (
        <>
            <section
                className="p-12"
                style={{
                    backgroundImage: "url('/backgrounds/GALAXY 5.png')",
                    backgroundSize: 'cover',
                }}
            >
                <div className="p-12 flex-col inset-0 bg-opacity-50 flex items-center justify-center z-10">
                    <div className="text-center p-6 px-4 text-white max-w-4xl">

                        <h1 className="text-6xl md:text-6xl text-[#7852A9] font-semibold brandColor">
                            GLOBAL REACH
                        </h1>
                        {/* Description Text */}
                        <p className="text-2xl mx-auto max-w-1xl">
                            designed to convert signal into sales momentum.
                        </p>

                    </div>
                </div>
            </section>
            <section className='bg-black px-12 pt-12 text-white'>

                <div className="w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col items-center justify-center m-6 px-7">
                    <h1 className="text-center text-3xl mt-2 font-bold text-[#7852A9]">
                        BUILD PIPLINE WHERE YOUR BUYERS ARE
                    </h1>
                    <p className="text-center text-2xl mt-2">
                        Tap into over 62 million verified global subscribers — all ethically sourced, privacy-compliant, and aligned to your ICP.
                    </p>

                </div>

            </section>
            <section className="bg-black px-12 ">
                <div className="w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col items-center justify-center my-12 ">
                    <h1 className="text-center text-3xl text-white">
                        EXPLORE OUR GLOBAL REACH
                    </h1>
                </div>
                <div className='flex flex-col md:flex-row gap-4 px-12'>
                    <div className="md:w-1/3 w-full bg-white text-black p-8 flex flex-col items-center justify-center">
                        <p className='mb-4 text-center'>
                            hello my name is mahdi and I'm developing a new project that will revolutionize the way new project that will revolutionize the way
                        </p>
                        <div className='my-6'>
                            <select className="w-full border-0 border-t-3 border-solid border-[#7852A9] py-4">
                                <option value="">Select option 1</option>
                                <option value="option1a">Option 1A</option>
                                <option value="option1b">Option 1B</option>
                                <option value="option1c">Option 1C</option>
                            </select>
                            <select className="w-full border-0 border-t-3 border-solid border-[#7852A9] py-4">
                                <option value="">Select option 2</option>
                                <option value="option2a">Option 2A</option>
                                <option value="option2b">Option 2B</option>
                                <option value="option2c">Option 2C</option>
                            </select>
                            <select className="w-full border-0 border-t-3 border-b-3 border-solid border-[#7852A9] py-4">
                                <option value="">Select option 3</option>
                                <option value="option3a">Option 3A</option>
                                <option value="option3b">Option 3B</option>
                                <option value="option3c">Option 3C</option>
                            </select>
                        </div>
                        <div className="flex gap-4 my-6">
                            <button className="brand-button text-white ">RESET</button>
                            <button className="brand-button text-white">SEE RESULT</button>
                        </div>
                    </div>
                    <div className="md:w-2/3 w-full bg-white text-black p-8  flex items-center justify-center">
                        {/* Right column content */}
                        <h2 className="text-2xl font-bold">Column 2</h2>
                    </div>
                </div>
            </section>
            <section className="bg-black p-12" style={{
                backgroundImage: "url('/backgrounds/GALAXY 6.png')",

                backgroundSize: 'cover',

            }}> 
                <div className="w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col items-center justify-center m-6"
                   >
                    <h1 className="text-center text-4xl mt-2 font-bold text-[#7852A9]">
                        THE FOUNDATION — FIRST-PARTY BY DESIGN
                    </h1>
                    <h1 className="text-center text-2xl mt-2 text-white">
                        100% FIRST-PARTY, ZERO COMPROMISES.
                    </h1>
                    <p className="text-center text-1xl mt-2 text-white">
                        Every contact in our ecosystem is opt-in, verified, and refreshed continuously. That means no third-party guesswork, no data resellers – just compliant, accurate, and active buyers.
                    </p>
                    <div className='m-6 text-2xl'>
                        <h1 className='text-white'>KEY VALUES:</h1>
                    </div>
                    <div className="flex flex-col gap-8 md:flex-row mt-8 w-full justify-between items-center px-6">
                        {/* All cards now have consistent sizing */}
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
                                className="relative rounded-full w-48 h-48 md:w-56 md:h-56 flex-shrink-0 flex items-center justify-center "
                            >
                                <img
                                    src={card.img}
                                    alt=""
                                    className="absolute w-full h-full object-cover"
                                />
                                <div className="relative z-10 text-center p-4  bg-opacity-40 rounded-full w-full h-full flex flex-col items-center justify-center">
                                    {card.title && (
                                        <h2 className="text-2xl md:text-3xl mb-1 font-bold text-white px-2">
                                            {card.title}
                                        </h2>
                                    )}
                                    {card.subtitle ? (
                                        <p className="text-xs md:text-base uppercase tracking-wider text-white px-1">
                                            {card.subtitle}
                                        </p>
                                    ) : (
                                        <p className="text-xs md:text-sm uppercase tracking-wider text-white px-2">
                                            {card.content}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
                <div className="flex flex-row p-12 gap-2 justify-between items-center">
                    {['Inc Power', 'ISO', 'gdpr', 'ccpa', 'casl', 'canspam'].map((num) => (
                        <div key={num} className=" rounded-lg shadow-md p-4 flex items-center justify-center">
                            <img

                                src={`/logos/${num}.png`}
                                alt={`Image ${num}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section className='bg-black p-12 text-white border-solid border-[#7852A9] border-b-20 border-t-20'>
                <div className='flex flex-col md:flex-row  px-12'>
                    <div className="md:w-1/3 w-full text-white py-12 flex flex-col">
                        <div className='mb-6'>
                            <h2 className="text-2xl font-bold text-[#7852A9]">GLOBAL BY NATURE,</h2>
                            <h2 className="text-2xl font-bold">LOCAL BY SIGNAL</h2>
                        </div>
                        <div className='mb-6'>
                            <h2 className="text-2xl font-bold">A WORLD OF REACH.</h2>
                            <h2 className="text-2xl font-bold">A SIGNAL-LED APPROACH.</h2>

                        </div>
                        <p className='py-6'>From North America to APAC, we activate global programs with local intelligence and compliance baked in.</p>
                        <h1 className='py-6'>TOP PERFORMING GEOS:</h1>
                        <ul className="list-disc list-inside pl-4">
                            <li className='text-xs'>United States</li>
                            <li className='text-xs'>Canada</li>
                            <li className='text-xs'>United Kingdom</li>
                            <li className='text-xs'>Germany</li>
                            <li className='text-xs'>France</li>
                            <li className='text-xs'>Nordics</li>
                            <li className='text-xs'>APAC</li>
                        </ul>
                    </div>
                    <div className="md:w-2/3 w-full text-black p-8  flex items-center justify-center">

                        <img src="/map.png" alt="" />
                    </div>
                </div>
            </section>
            <section className='p-12' style={{
                backgroundImage: "url('/backgrounds/GALAXY 3.png')",
                backgroundSize: 'cover',
            }}>

                <div className='flex flex-col gap-12 md:flex-row  px-12 m-3'>
                    <div className=" w-full bg-black text-white p-12 flex flex-col border-solid border-[rgba(255,255,255,0.6)] border-1 rounded-2xl">
                        <h1 className="text-center text-2xl mt-2 font-bold text-[#7852A9]">
                            THE PEOPLE BEHIND THE DATA
                        </h1>
                        <h1 className="text-center text-xl mt-2 text-white">
                            WE DON'T JUST REACH PEOPLE. <br />
                            WE REACH THE RIGHT PEOPLE.
                        </h1>

                        <p className="text-center text-1xl mt-2 text-white p-6">
                            From global CIOs to regional HR leaders, our reach spans every major job function driving SMB to enterprise decision-making.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            {/* First Row */}
                            <div className="flex flex-col items-center rounded-lg p-4 shadow-md">
                                <img src="/icons/it.png" alt="CIO" className=" object-contain mb-2" />
                                <h3 className="font-bold text-sm text-center">Information Technology</h3>
                            </div>
                            <div className="flex flex-col items-center  rounded-lg p-4 shadow-md">
                                <img src="/icons/marketing.png" alt="HR Leaders" className=" object-contain mb-2" />
                                <h3 className="font-bold text-sm text-center">Marketing </h3>
                            </div>
                            <div className="flex flex-col items-center  rounded-lg p-4 shadow-md">
                                <img src="/icons/finance.png" alt="Marketing" className=" object-contain mb-2" />
                                <h3 className="font-bold text-sm text-center">Finance</h3>
                            </div>
                            {/* Second Row */}
                            <div className="flex flex-col items-center  rounded-lg p-4 shadow-md">
                                <img src="/icons/hr.png" alt="Finance" className=" object-contain mb-2" />
                                <h3 className="font-bold text-sm text-center">Human Resources</h3>
                            </div>
                            <div className="flex flex-col items-center  rounded-lg p-4 shadow-md">
                                <img src="/icons/Operations.png" alt="Sales" className=" object-contain mb-2" />
                                <h3 className="font-bold text-sm text-center">Operations</h3>
                            </div>
                            <div className="flex flex-col items-center  rounded-lg p-4 shadow-md">
                                <img src="/icons/sales.png" alt="IT" className=" object-contain mb-2" />
                                <h3 className="font-bold text-sm text-center">Sales</h3>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full bg-black text-white p-12 flex flex-col border-solid border-[rgba(255,255,255,0.6)] border-1 rounded-2xl">
                        <h1 className="text-center text-2xl mt-2 font-bold text-[#7852A9]">
                            INDUSTRY PENETRATION
                        </h1>
                        <h1 className="text-center text-xl mt-2 text-white">

                            BUILT TO SERVE KEY VERTICALS
                        </h1>

                        <p className="text-center text-1xl mt-2 p-6 text-white">
                            We focus on industries where complexity meets opportunity—enabling scalable programs for the companies shaping tomorrow.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 flex gap-4 mt-8 justify-center items-center">
                            {/* First Row */}
                            <div className="flex flex-col items-center rounded-lg p-4 shadow-md">
                                <img src="/icons/healthcare.png" alt="CIO" className=" object-contain mb-2" />
                                <h3 className="font-bold text-sm text-center">Healthcare</h3>
                            </div>
                            <div className="flex flex-col items-center  rounded-lg p-4 shadow-md">
                                <img src="/icons/manufacturing.png" alt="HR Leaders" className=" object-contain mb-2" />
                                <h3 className="font-bold text-sm text-center">Marketing </h3>
                            </div>
                            <div className="flex flex-col items-center  rounded-lg p-4 shadow-md">
                                <img src="/icons/financial services.png" alt="Marketing" className=" object-contain mb-2" />
                                <h3 className="font-bold text-sm text-center">Manufacturing</h3>
                            </div>


                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 px-12 flex gap-4 mt-8 justify-center items-center">
                            {/* First Row */}

                            {/* Second Row */}
                            <div className="flex flex-col items-center  rounded-lg p-4 shadow-md">
                                <img src="/icons/retail.png" alt="Finance" className=" object-contain mb-2" />
                                <h3 className="font-bold text-sm text-center">Retail</h3>
                            </div>
                            <div className="flex flex-col items-center  rounded-lg p-4 shadow-md">
                                <img src="/icons/technology.png" alt="Sales" className=" object-contain mb-2" />
                                <h3 className="font-bold text-sm text-center">Technology</h3>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col items-center justify-center p-12">
                    <h1 className="text-center text-3xl mt-2 font-bold text-[#7852A9]">
                        KNOW YOUR ICP. WE’LL MATCH THE SIGNAL.  <span className="text-white">ANYWHERE</span>
                    </h1>
                    <p className="text-center text-2xl mt-2 text-white">
                        Build geo-aligned, function-targeted, industry-specific demand – globally.
                    </p>
                    <div className="gap-4 flex flex-row items-center justify-between mt-6">
                        <button className="brand-button text-white">REQUEST A PROPOSAL</button>
                        <button className="brand-button text-white">TALK TO A TARGETING SPECIALIST</button>

                    </div>
                </div>
            </section>

        </>
    )
}

