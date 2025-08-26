import React, { useState, useEffect } from 'react';
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';

// Define types for our data
type JobFunction = 'sales' | 'marketing' | 'engineering' | 'finance' | 'hr' | '';
type Geography = 'northAmerica' | 'southAmerica' | 'europe' | 'asia' | 'africa' | 'oceania' | '';
type Industry = 'technology' | 'healthcare' | 'finance' | 'manufacturing' | 'retail' | '';

interface HeatmapData {
    regions: string[];
    functions: string[];
    values: number[][];
}

interface HeatmapCellProps {
    value: number;
    title: string;
}

// Heatmap Cell Component
const HeatmapCell: React.FC<HeatmapCellProps> = ({ value, title }) => {
    const getColor = (val: number) => {
        if (val >= 100000) return '#4B2E68'; // deep purple
        if (val >= 80000) return '#5E3E84'; // dark violet
        if (val >= 60000) return '#7852A9'; // main base color
        if (val >= 40000) return '#9B7BC2'; // soft lavender-purple
        if (val >= 20000) return '#C3A8E0'; // light pastel purple
        return '#E3D6F5';
    };

    const formatNumber = (num: number) => {
        if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
        return num.toString();
    };

    return (
        <div
            className="heatmap-cell"
            style={{ backgroundColor: getColor(value) }}
            title={title}
        >
            {formatNumber(value)}
        </div>
    );
};

// Heatmap Component
const Heatmap: React.FC<{ data: HeatmapData }> = ({ data }) => {
    return (
        <div className="heatmap-container">
            <div className="heatmap-title">Subscriber Distribution</div>
            <div className="heatmap">
                {/* Header row */}
                <div className="heatmap-header">
                    <div className="heatmap-corner">Job Function →</div>
                    {data.regions.map(region => (
                        <div key={region} className="heatmap-region-header">{region}</div>
                    ))}
                </div>

                {/* Data rows */}
                {data.functions.map((func, i) => (
                    <div key={func} className="heatmap-row">
                        <div className="heatmap-function-header">{func}</div>
                        {data.values[i].map((value, j) => (
                            <HeatmapCell
                                key={`${i}-${j}`}
                                value={value}
                                title={`${func} - ${data.regions[j]}: ${value.toLocaleString()} subscribers`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="heatmap-legend">
                {[
                    { color: '#E3D6F5', label: '0-20K' },   // very light lavender
                    { color: '#C3A8E0', label: '20-40K' },  // soft pastel purple
                    { color: '#9B7BC2', label: '40-60K' },  // medium lavender
                    { color: '#7852A9', label: '60-80K' },  // base purple
                    { color: '#5E3E84', label: '80-100K' }, // dark violet
                    { color: '#4B2E68', label: '100K+' }    // deep purple
                ].map((item, index) => (
                    <div key={index} className="legend-item">
                        <div className="legend-color" style={{ backgroundColor: item.color }}></div>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main Page Component
export default function GlobalReach() {
    const [jobFunction, setJobFunction] = useState<JobFunction>('');
    const [geography, setGeography] = useState<Geography>('');
    const [industry, setIndustry] = useState<Industry>('');
    const [heatmapData, setHeatmapData] = useState<HeatmapData>({
        regions: ["North America", "South America", "Europe", "Asia", "Africa", "Oceania"],
        functions: ["Sales", "Marketing", "Engineering", "Finance"],
        values: [
            [45000, 32000, 78000, 56000, 23000, 38000],
            [52000, 41000, 68000, 49000, 31000, 42000],
            [89000, 65000, 125000, 98000, 45000, 67000],
            [61000, 48000, 95000, 72000, 38000, 54000]
        ]
    });

    // Fake data for the heatmap
    const dataMap: Record<string, Partial<HeatmapData>> = {
        // Job functions
        sales: {
            values: [
                [65000, 52000, 98000, 76000, 43000, 58000],
                [72000, 61000, 88000, 69000, 51000, 62000],
                [109000, 85000, 145000, 118000, 65000, 87000],
                [81000, 68000, 115000, 92000, 58000, 74000]
            ]
        },
        marketing: {
            values: [
                [35000, 22000, 58000, 36000, 13000, 28000],
                [42000, 31000, 48000, 29000, 11000, 22000],
                [69000, 45000, 105000, 78000, 25000, 47000],
                [41000, 28000, 75000, 52000, 18000, 34000]
            ]
        },
        engineering: {
            values: [
                [75000, 62000, 118000, 86000, 53000, 68000],
                [82000, 71000, 108000, 89000, 61000, 72000],
                [119000, 95000, 155000, 128000, 75000, 97000],
                [91000, 78000, 125000, 102000, 68000, 84000]
            ]
        },
        finance: {
            values: [
                [25000, 12000, 38000, 26000, 3000, 18000],
                [32000, 21000, 28000, 19000, 1000, 12000],
                [59000, 35000, 85000, 58000, 5000, 27000],
                [31000, 18000, 55000, 32000, 8000, 14000]
            ]
        },
        hr: {
            values: [
                [15000, 8000, 28000, 16000, 5000, 12000],
                [22000, 11000, 18000, 9000, 3000, 8000],
                [49000, 25000, 75000, 48000, 15000, 27000],
                [21000, 8000, 45000, 22000, 6000, 10000]
            ]
        },
        // Geographies
        northAmerica: {
            regions: ["North America"],
            values: [
                [95000], [102000], [139000], [111000]
            ]
        },
        southAmerica: {
            regions: ["South America"],
            values: [
                [25000], [32000], [59000], [31000]
            ]
        },
        europe: {
            regions: ["Europe"],
            values: [
                [55000], [62000], [99000], [71000]
            ]
        },
        asia: {
            regions: ["Asia"],
            values: [
                [85000], [92000], [129000], [101000]
            ]
        },
        africa: {
            regions: ["Africa"],
            values: [
                [5000], [12000], [39000], [11000]
            ]
        },
        oceania: {
            regions: ["Oceania"],
            values: [
                [35000], [42000], [79000], [51000]
            ]
        },
        // Industries
        technology: {
            values: [
                [75000, 62000, 118000, 86000, 53000, 68000],
                [82000, 71000, 108000, 89000, 61000, 72000],
                [119000, 95000, 155000, 128000, 75000, 97000],
                [91000, 78000, 125000, 102000, 68000, 84000]
            ]
        },
        healthcare: {
            values: [
                [35000, 22000, 58000, 36000, 13000, 28000],
                [42000, 31000, 48000, 29000, 11000, 22000],
                [69000, 45000, 105000, 78000, 25000, 47000],
                [41000, 28000, 75000, 52000, 18000, 34000]
            ]
        },
        manufacturing: {
            values: [
                [45000, 32000, 78000, 56000, 23000, 38000],
                [52000, 41000, 68000, 49000, 31000, 42000],
                [89000, 65000, 125000, 98000, 45000, 67000],
                [61000, 48000, 95000, 72000, 38000, 54000]
            ]
        },
        retail: {
            values: [
                [25000, 12000, 48000, 26000, 3000, 18000],
                [32000, 21000, 38000, 19000, 1000, 12000],
                [59000, 35000, 95000, 58000, 5000, 27000],
                [31000, 18000, 65000, 32000, 8000, 14000]
            ]
        }
    };

    // Update heatmap when filters change
    useEffect(() => {
        updateHeatmap();
    }, [jobFunction, geography, industry]);

    const updateHeatmap = () => {
        // Start with default data
        let newData: HeatmapData = {
            regions: ["North America", "South America", "Europe", "Asia", "Africa", "Oceania"],
            functions: ["Sales", "Marketing", "Engineering", "Finance"],
            values: [
                [45000, 32000, 78000, 56000, 23000, 38000],
                [52000, 41000, 68000, 49000, 31000, 42000],
                [89000, 65000, 125000, 98000, 45000, 67000],
                [61000, 48000, 95000, 72000, 38000, 54000]
            ]
        };

        // Apply job function filter if selected
        if (jobFunction && dataMap[jobFunction]) {
            const jobData = dataMap[jobFunction];
            if (jobData.values) newData.values = jobData.values as number[][];
        }

        // Apply geography filter if selected
        if (geography && dataMap[geography]) {
            const geoData = dataMap[geography];
            if (geoData.regions) newData.regions = geoData.regions;
            if (geoData.values) newData.values = geoData.values as number[][];
        }

        // Apply industry filter if selected
        if (industry && dataMap[industry]) {
            const industryData = dataMap[industry];
            if (industryData.values) newData.values = industryData.values as number[][];
        }

        setHeatmapData(newData);
    };

    const handleReset = () => {
        setJobFunction('');
        setGeography('');
        setIndustry('');
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

            <section className="px-6 md:px-12">
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
                                onChange={(e) => setGeography(e.target.value as Geography)}
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
                        <div className="flex gap-2 md:gap-4 my-4 md:my-6 w-full justify-center">
                            <button
                                onClick={handleReset}
                                className="brand-button text-white text-sm md:text-base px-4 py-2"
                            >
                                RESET
                            </button>
                            <button
                                onClick={updateHeatmap}
                                className="brand-button text-white text-sm md:text-base px-4 py-2"
                            >
                                SEE RESULT
                            </button>
                        </div>
                    </div>
                    <div className="md:w-2/3 w-full bg-white text-black p-4 md:p-8 flex items-center justify-center min-h-[300px]">
                        <Heatmap data={heatmapData} />
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