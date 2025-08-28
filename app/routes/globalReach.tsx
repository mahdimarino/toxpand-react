import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';
import $ from "jquery";
import "jqvmap/dist/jqvmap.min.css";

// Define types for our selections
type JobFunction = 'sales' | 'marketing' | 'engineering' | 'finance' | 'hr' | '';
type GeographyType = 'northAmerica' | 'southAmerica' | 'europe' | 'asia' | 'africa' | 'oceania' | '';
type Industry = 'technology' | 'healthcare' | 'finance' | 'manufacturing' | 'retail' | '';

// Continent to country code mapping
const continentCountries: Record<string, string[]> = {
    northAmerica: ['us', 'ca', 'mx', 'gl', 'bm', 'gt', 'sv', 'hn', 'ni', 'cr', 'pa', 'bs', 'cu', 'jm', 'ht', 'do', 'pr'],
    southAmerica: ['br', 'ar', 'cl', 'co', 'pe', 've', 'ec', 'bo', 'py', 'uy', 'sr', 'gf', 'gy', 'fk'],
    europe: ['gb', 'fr', 'de', 'it', 'es', 'pl', 'ro', 'nl', 'be', 'se', 'cz', 'gr', 'pt', 'hu', 'at', 'ch', 'ie', 'dk', 'fi', 'no', 'sk', 'bg', 'rs', 'hr', 'lt', 'si', 'lv', 'ee', 'is', 'al', 'ba', 'mk', 'me', 'cy', 'lu', 'mt', 'ad', 'li', 'mc', 'sm', 'va'],
    asia: ['cn', 'in', 'ru', 'jp', 'id', 'pk', 'tr', 'th', 'kr', 'vn', 'ph', 'my', 'kz', 'sa', 'ir', 'uz', 'mm', 'iq', 'af', 'ye', 'sy', 'kh', 'tj', 'np', 'lk', 'bd', 'la', 'jo', 'az', 'ae', 'il', 'tw', 'hk', 'kg', 'tm', 'sg', 'ge', 'mn', 'om', 'kw', 'qa', 'bh', 'am', 'ps', 'bt', 'mv', 'bn', 'tl'],
    africa: ['ng', 'eg', 'za', 'dz', 'sd', 'ly', 'ma', 'ke', 'et', 'gh', 'cm', 'ci', 'mg', 'mz', 'ang', 'ne', 'bf', 'ml', 'zw', 'tn', 'ss', 'sn', 'td', 'so', 'er', 'cf', 'rw', 'bj', 'gn', 'ug', 'zm', 'sl', 'mw', 'tg', 'lr', 'mr', 'na', 'bw', 'gm', 'ga', 'ls', 'gw', 'gq', 'mu', 'eq', 'dj', 're', 'km', 'cv', 'sc', 'eh', 'st', 'sh'],
    oceania: ['au', 'nz', 'pg', 'fj', 'sb', 'vu', 'nc', 'pf', 'ws', 'ki', 'fm', 'to', 'mh', 'pw', 'nr', 'tv']
};

// Mock data for demonstration
const mockData = {
    northAmerica: { count: 18500000, color: "#7852A9" },
    southAmerica: { count: 7200000, color: "#5E3E84" },
    europe: { count: 15200000, color: "#4A2F6B" },
    asia: { count: 19800000, color: "#3B2556" },
    africa: { count: 6800000, color: "#2E1C43" },
    oceania: { count: 4500000, color: "#221532" }
};

export default function GlobalReach() {
    const [jobFunction, setJobFunction] = useState<JobFunction>('');
    const [geography, setGeography] = useState<GeographyType>('');
    const [industry, setIndustry] = useState<Industry>('');
    const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const mapInitialized = useRef(false);
    const mapInstance = useRef<any>(null);
    const allCountries = useRef<string[]>([]);

    useEffect(() => {
        // Expose jQuery globally
        (window as any).jQuery = $;
        (window as any).$ = $;

        // Only initialize the map once
        if (!mapInitialized.current) {
            // Dynamically import jqvmap only in the browser
            import("jqvmap/dist/jquery.vmap.min.js").then(() => {
                import("jqvmap/dist/maps/jquery.vmap.world.js").then(() => {
                    mapInstance.current = ($("#vmap") as any).vectorMap({
                        map: "world_en",
                        backgroundColor: "transparent",
                        borderColor: "#818181",
                        borderOpacity: 0.25,
                        borderWidth: 1,
                        color: "#7852A9",
                        enableZoom: true,
                        hoverColor: "#49f6ffff",
                        normalizeFunction: "linear",
                        showTooltip: true,
                        onRegionClick: (event: any, code: string) => {
                            // Handle click on region if needed
                        },
                        onLoad: function (event: any, map: any) {
                            // Store all country codes when map is loaded
                            allCountries.current = Object.keys(map);
                        }
                    });
                    mapInitialized.current = true;
                });
            });
        }

        return () => {
            // Clean up the map when component unmounts
            if (mapInstance.current) {
                try {
                    mapInstance.current.remove();
                } catch (e) {
                    console.log("Error removing map:", e);
                }
            }
        };
    }, []);

    const updateHeatmap = () => {
        setIsLoading(true);
        if (geography === 'africa') {
            mapInstance.current = ($("#vmap") as any).vectorMap({
            
                
                
                map: "world_en",
                backgroundColor: "transparent",
                borderColor: "#818181",
                borderOpacity: 0.25,
                borderWidth: 1,
                colors: {
                    // Set all countries to a default color
                    ...Object.fromEntries(allCountries.current.map(code => [code, "#333344"])),
                    // Set African countries to red
                    ...Object.fromEntries(continentCountries.africa.map(code => [code, "red"]))
                },
                enableZoom: true,
                hoverColor: "green",
                normalizeFunction: "linear",
                showTooltip: true,
                onRegionClick: (event: any, code: string) => {
                    // Handle click on region if needed
                },
                onLoad: function (event: any, map: any) {
                    // Store all country codes when map is loaded
                    allCountries.current = Object.keys(map);
                }
            
                
               
            });
        }

        // Simulate API call with timeout
        setTimeout(() => {

            if (geography && mapInstance.current) {
                // Highlight selected geography
                const colors: Record<string, string> = {};

                // Set all countries to a dim color initially
                allCountries.current.forEach(countryCode => {
                    colors[countryCode] = "red"; // Dim color for all countries
                });

                // Highlight the selected continent with its specific color
                if (geography in continentCountries) {
                    const countries = continentCountries[geography];
                    countries.forEach(code => {
                        if (allCountries.current.includes(code)) {
                            colors[code] = mockData[geography as keyof typeof mockData].color;
                        }
                    });
                    setSubscriberCount(mockData[geography as keyof typeof mockData].count);
                }

                // Update the map colors
                mapInstance.current.setColors(colors);
            } else {
                // Reset to default if no geography selected
                if (mapInstance.current) {
                    const defaultColors: Record<string, string> = {};

                    allCountries.current.forEach(countryCode => {
                        defaultColors[countryCode] = "red"; // Default color
                    });
                    mapInstance.current.setColors(defaultColors);
                }
                setSubscriberCount(null);
            }

            setIsLoading(false);
        }, 800);
    };

    const handleReset = () => {
        setJobFunction('');
        setGeography('');
        setIndustry('');
        setSubscriberCount(null);

        // Reset map to show all regions with default color
        if (mapInstance.current) {
            const defaultColors: Record<string, string> = {};

            allCountries.current.forEach(countryCode => {
                defaultColors[countryCode] = "#333344"; // Default color
            });
            mapInstance.current.setColors(defaultColors);
        }
    };

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


            {/* /////////////////////////////////////////////////////////////////////////////// */}

            <section className="px-6 md:px-12  pb-16">
                <div className="w-full max-w-full md:max-w-[75%] mx-auto flex flex-col items-center justify-center my-6 md:my-12">
                    <h1 className="text-center text-2xl md:text-3xl text-white">
                        EXPLORE OUR GLOBAL REACH
                    </h1>
                </div>
                <div className='flex flex-col md:flex-row gap-4 px-4 md:px-12'>
                    <div className="md:w-1/3 w-full bg-white text-black p-4 md:p-8 flex flex-col items-center justify-center">
                        <p className='mb-4 text-center text-sm md:text-base'>
                            Select your target Job Function and Geography to see how many subscribers we have in your market
                        </p>
                        <div className='my-4 md:my-6 w-full'>
                            <select
                                value={jobFunction}
                                onChange={(e) => setJobFunction(e.target.value as JobFunction)}
                                className="w-full border-0 border-t-3 border-solid border-[#7852A9] py-3 md:py-4 text-sm md:text-base"
                            >
                                <option value="">Job Function</option>
                                <option value="sales">Sales</option>
                                <option value="marketing">Marketing</option>
                                <option value="engineering">Engineering</option>
                                <option value="finance">Finance</option>
                                <option value="hr">Human Resources</option>
                            </select>
                            <select
                                value={geography}
                                onChange={(e) => setGeography(e.target.value as GeographyType)}
                                className="w-full border-0 border-t-3 border-solid border-[#7852A9] py-3 md:py-4 text-sm md:text-base"
                            >
                                <option value="">Geography</option>
                                <option value="northAmerica">North America</option>
                                <option value="southAmerica">South America</option>
                                <option value="europe">Europe</option>
                                <option value="asia">Asia</option>
                                <option value="africa">Africa</option>
                                <option value="oceania">Oceania</option>
                            </select>
                            <select
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value as Industry)}
                                className="w-full border-0 border-t-3 border-b-3 border-solid border-[#7852A9] py-3 md:py-4 text-sm md:text-base"
                            >
                                <option value="">Industry</option>
                                <option value="technology">Technology</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="finance">Finance</option>
                                <option value="manufacturing">Manufacturing</option>
                                <option value="retail">Retail</option>
                            </select>
                        </div>
                        <div className="flex flex-wrap gap-2 md:gap-4 my-4 md:my-6 w-full justify-center">
                            <button
                                onClick={handleReset}
                                className="brand-button text-white text-sm md:text-base px-4 py-2 bg-[#7852A9] hover:bg-[#5E3E84] transition-colors"
                            >
                                RESET
                            </button>
                            <button
                                onClick={updateHeatmap}
                                disabled={isLoading}
                                className="brand-button text-white text-sm md:text-base px-4 py-2 bg-[#7852A9] hover:bg-[#5E3E84] disabled:bg-gray-400 transition-colors"
                            >
                                {isLoading ? 'LOADING...' : 'SEE RESULT'}
                            </button>
                        </div>

                        {/* Display results */}
                        {subscriberCount !== null && (
                            <div className="mt-4 p-4 bg-[#7852A9] text-white text-center w-full">
                                <h3 className="text-xl font-bold">{geography?.replace(/([A-Z])/g, ' $1').toUpperCase()}</h3>
                                <p className="text-3xl mt-2">{subscriberCount.toLocaleString()}</p>
                                <p className="text-sm mt-2">verified contacts</p>
                            </div>
                        )}
                    </div>
                    <div className="md:w-2/3 w-full text-black p-4 flex items-center justify-center min-h-[400px]  rounded-lg relative">
                        <div id="vmap" style={{ width: "100%", height: "500px", }} />
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center  b rounded-lg">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                            </div>
                        )}
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
                <div className='flex flex-col gap-6 md:gap-12 md:flex-row px-1 md:px-12 m-2 md:m-3'>
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    }} className="w-full  text-white p-4 md:p-12 flex flex-col border-solid border-[rgba(255,255,255,0.6)] border rounded-xl md:rounded-2xl">
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
                    }} className="w-full text-white p-4 md:p-12 flex flex-col border-solid border-[rgba(255,255,255,0.6)] border rounded-xl md:rounded-2xl">
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
                        <a href='/RequestProposal' className="brand-button text-white w-full md:w-auto">REQUEST A PROPOSAL</a>
                        <a href='/Contact'  className="brand-button text-white w-full md:w-auto">TALK TO A TARGETING SPECIALIST</a>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}