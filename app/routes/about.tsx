import React from 'react'
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';


export default function About() {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = React.useState(true);

    const handleStop = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <>
        <Navbar/>
            {/* Video Hero Section */}
            {/* <section className="relative">
                <video
                    ref={videoRef}
                    src="/videos/about.mp4"
                    className="w-full h-auto  object-cover"
                    controls
                    autoPlay
                    muted={isMuted}
                    playsInline
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                        onClick={handleMute}
                        className="bg-black bg-opacity-50 text-white p-2 rounded-full"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                        {isMuted ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a7.975 7.975 0 015.657 2.343m0 0a7.975 7.975 0 010 11.314m-11.314 0a7.975 7.975 0 010-11.314m0 0a7.975 7.975 0 015.657-2.343" />
                            </svg>
                        )}
                    </button>
                </div>
            </section> */}

            {/* About Us Section */}
            <section className="p-6 md:p-12 text-white bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8 md:mb-12">
                        <h1 className='text-3xl md:text-5xl font-bold'>ABOUT US</h1>
                    </div>

                    <div>
                        <h2 className='text-xl md:text-2xl mt-4 mb-6 md:mb-12 pb-4 text-[#7852A9] border-b-2 border-[#00ffff]'>
                            BUILDING PIPELINE, THE RIGHT WAY.
                        </h2>

                        <div className="space-y-4 md:space-y-6">
                            <p>
                                At ToXPAND, we didn't set out to become another lead gen agency. We set out to fix lead generation – with transparency, accountability, and AI intelligence at the core.
                            </p>
                            <p>
                                We've seen what goes wrong in B2B demand gen: opaque data, recycled contacts, and "spray-and-pray" content syndication. So we built something different – a pipeline partner that doesn't just promise performance, but proves it.
                            </p>
                            <p>
                                Our mission is simple: Help B2B marketers escape content syndication pitfalls and generate demand that actually converts. Everything we deliver is in-house, first-party, and validated – with visibility at every stage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Journey Section */}
            <section className="p-6 md:p-12 text-white bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className='text-xl md:text-2xl mt-4 mb-6 md:mb-12 pb-4 text-white border-b-2 border-[#00ffff]'>
                        OUR JOURNEY
                    </h2>






                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
                        <div className=" rounded-lg p-6 text-white shadow-lg flex flex-col items-center">
                            <img src="/icons/the spark.png" width={200} alt="" />
                            <div className='journey-div text-center pt-12 bg-[#6A1B9A]'>
                                <h3 className="text-3xl">2022</h3>
                            </div>
                            <div className='journey-diamand bg-[#6A1B9A] mt-4'>
                            </div>
                            <div className='journey-text py-3 text-center mt-4 bg-[#6A1B9A]'>
                                <p className='text-sm'>
                                    THE SPARK
                                </p>
                            </div>
                            <div className='text-center py-6'>
                                <p className='text-sm'>
                                    Founder <b>Uky Chong</b> launches TOXPAND with a small, ambitious team – determined to challenge the legacy lead gen playbook and do things differently.
                                </p>
                            </div>

                        </div>
                        <div className=" rounded-lg p-6 text-white shadow-lg flex flex-col items-center">
                            <img src="/icons/momentum builds.png" width={200} alt="" />
                            <div className='journey-div text-center pt-12 bg-[#9C28B1]'>
                                <h3 className="text-3xl">2023</h3>
                            </div>
                            <div className='journey-diamand bg-[#9C28B1] mt-4'>
                            </div>
                            <div className='journey-text py-3 text-center mt-4 bg-[#9C28B1]'>
                                <p className='text-sm'>
                                    MOMENTUM BUILDS
                                </p>
                            </div>
                            <div className='text-center py-6'>
                                <p className='text-sm'>
                                    TOXPAND partners with some of the <b>biggest brands in B2B</b>, earning a reputation as a long-term strategic ally – not a transactional vendor. </p>
                            </div>
                        </div>
                        <div className=" rounded-lg p-6 text-white shadow-lg flex flex-col items-center">
                            <img src="/icons/intelligence in motion.png" width={200} alt="" />
                            <div className='journey-div text-center pt-12 bg-[#3F51B5]'>
                                <h3 className="text-3xl">2024</h3>
                            </div>
                            <div className='journey-diamand bg-[#3F51B5] mt-4'>
                            </div>
                            <div className='journey-text py-3 text-center mt-4 bg-[#3F51B5]'>
                                <p className='text-sm'>
                                    INTELLIGENCE IN MOTION
                                </p>
                            </div>
                            <div className='text-center py-6'>
                                <p className='text-sm'>
                                    We launch our <b>client-facing Campaign Performance dashboard</b>, giving customers full visibility into engagement and results – powered by real-time first-party data and actionable insights.
                                </p>
                            </div>
                        </div>
                        <div className=" rounded-lg p-6 text-white shadow-lg flex flex-col items-center">
                            <img src="/icons/global expansion.png" width={200} alt="" />
                            <div className='journey-div text-center pt-12 bg-[#7852A9]'>
                                <h3 className="text-3xl">2025</h3>
                            </div>
                            <div className='journey-diamand bg-[#7852A9] mt-4'>
                            </div>
                            <div className='journey-text py-3 text-center mt-4 bg-[#7852A9]'>
                                <p className='text-xs'>
                                    GLOBAL EXPANSION, DEEPER INSIGHT
                                </p>
                            </div>
                            <div className='text-center py-6'>
                                <p className='text-sm'>
                                    Now partnering closely with <b>Enterprise teams</b> across <b>North America, EMEA, and APAC</b>, we continue to scale our platform – releasing deeper dashboard features and expanding our global impact.
                                </p>
                            </div>
                        </div>

                    </div>







                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                       
                        <div className="bg-gradient-to-b from-[#6A1B9A] to-black rounded-lg p-4 md:p-6 shadow-lg flex flex-col items-center">
                            <img src="/icons/the spark.png" width={120} height={120} alt="The Spark" className="w-24 md:w-32 h-auto" />
                            <div className='text-center pt-6'>
                                <h3 className="text-2xl md:text-3xl font-bold">2022</h3>
                            </div>
                            <div className='w-4 h-4 rotate-45 bg-[#6A1B9A] mt-4'></div>
                            <div className='py-2 text-center mt-2'>
                                <p className='text-sm md:text-base font-semibold'>
                                    THE SPARK
                                </p>
                            </div>
                            <div className='text-center py-4'>
                                <p className='text-xs md:text-sm'>
                                    Founder <strong>Uky Chong</strong> launches TOXPAND with a small, ambitious team – determined to challenge the legacy lead gen playbook and do things differently.
                                </p>
                            </div>
                        </div>

                      
                        <div className="bg-gradient-to-b from-[#9C28B1] to-black rounded-lg p-4 md:p-6 shadow-lg flex flex-col items-center">
                            <img src="/icons/momentum builds.png" width={120} height={120} alt="Momentum Builds" className="w-24 md:w-32 h-auto" />
                            <div className='text-center pt-6'>
                                <h3 className="text-2xl md:text-3xl font-bold">2023</h3>
                            </div>
                            <div className='w-4 h-4 rotate-45 bg-[#9C28B1] mt-4'></div>
                            <div className='py-2 text-center mt-2'>
                                <p className='text-sm md:text-base font-semibold'>
                                    MOMENTUM BUILDS
                                </p>
                            </div>
                            <div className='text-center py-4'>
                                <p className='text-xs md:text-sm'>
                                    TOXPAND partners with some of the <strong>biggest brands in B2B</strong>, earning a reputation as a long-term strategic ally – not a transactional vendor.
                                </p>
                            </div>
                        </div>

                        
                        <div className="bg-gradient-to-b from-[#3F51B5] to-black rounded-lg p-4 md:p-6 shadow-lg flex flex-col items-center">
                            <img src="/icons/intelligence in motion.png" width={120} height={120} alt="Intelligence in Motion" className="w-24 md:w-32 h-auto" />
                            <div className='text-center pt-6'>
                                <h3 className="text-2xl md:text-3xl font-bold">2024</h3>
                            </div>
                            <div className='w-4 h-4 rotate-45 bg-[#3F51B5] mt-4'></div>
                            <div className='py-2 text-center mt-2'>
                                <p className='text-sm md:text-base font-semibold'>
                                    INTELLIGENCE IN MOTION
                                </p>
                            </div>
                            <div className='text-center py-4'>
                                <p className='text-xs md:text-sm'>
                                    We launch our <strong>client-facing Campaign Performance dashboard</strong>, giving customers full visibility into engagement and results – powered by real-time first-party data and actionable insights.
                                </p>
                            </div>
                        </div>

                        
                        <div className="bg-gradient-to-b from-[#7852A9] to-black rounded-lg p-4 md:p-6 shadow-lg flex flex-col items-center">
                            <img src="/icons/global expansion.png" width={120} height={120} alt="Global Expansion" className="w-24 md:w-32 h-auto" />
                            <div className='text-center pt-6'>
                                <h3 className="text-2xl md:text-3xl font-bold">2025</h3>
                            </div>
                            <div className='w-4 h-4 rotate-45 bg-[#7852A9] mt-4'></div>
                            <div className='py-2 text-center mt-2'>
                                <p className='text-xs md:text-sm font-semibold'>
                                    GLOBAL EXPANSION, DEEPER INSIGHT
                                </p>
                            </div>
                            <div className='text-center py-4'>
                                <p className='text-xs md:text-sm'>
                                    Now partnering closely with <strong>Enterprise teams</strong> across <strong>North America, EMEA, and APAC</strong>, we continue to scale our platform – releasing deeper dashboard features and expanding our global impact.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* Quote Section */}
            <section className='p-8 md:p-12 text-white bg-gradient-to-r from-[#6a1b9a] to-[#3f51b5]'>
                <div className="max-w-4xl mx-auto">
                    <h2 className='text-center text-xl md:text-3xl font-medium'>
                        "WE'RE NOT HERE TO COMPETE. WE'RE HERE TO REDEFINE THE FIELD."
                    </h2>
                </div>
            </section>

            {/* How We're Different Section */}
            <section className="bg-black text-white bg-cover bg-center" style={{
                backgroundImage: 'url("/backgrounds/bg3.jpg")',
            }}>
                <div className="bg-black bg-opacity-80 p-6 md:p-12">
                    <div className="max-w-7xl mx-auto">
                        {/* Title */}
                        <div className="text-center mb-8 md:mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold">
                                HOW WE'RE <span className="text-[#6a1b9a]">DIFFERENT</span>
                            </h1>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Card 1 */}
                            <div className="p-4 text-center border-b md:border-b-0 md:border-r border-[#00ffff]">
                                <div className="p-4 mx-auto">
                                    <img width={80} height={80}
                                        src="/icons/ethical.png"
                                        alt="Ethical First-Party Data"
                                        className="mx-auto"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg md:text-xl font-bold">ETHICAL FIRST-PARTY DATA</p>
                                    <p className='text-sm md:text-base'>52M+ global contacts, all opt-in and fully compliant</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="p-4 text-center border-b md:border-b-0 lg:border-r border-[#00ffff]">
                                <div className="p-4 mx-auto">
                                    <img width={80} height={80}
                                        src="/icons/ai powered precision.png"
                                        alt="AI-Powered Precision"
                                        className="mx-auto"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg md:text-xl font-bold">AI-POWERED PRECISION</p>
                                    <p className='text-sm md:text-base'>DemandFusion drives smarter segmentation, engagement, and signal-based outreach.</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="p-4 text-center border-b md:border-b-0 lg:border-r border-[#00ffff]">
                                <div className="p-4 mx-auto">
                                    <img width={80} height={80}
                                        src="/icons/transparent campaign.png"
                                        alt="Transparent Campaigns"
                                        className="mx-auto"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg md:text-xl font-bold">TRANSPARENT CAMPAIGNS</p>
                                    <p className='text-sm md:text-base'>You see what we see – every signal, every engagement, every conversion.</p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="p-4 text-center">
                                <div className="p-4 mx-auto">
                                    <img width={80} height={80}
                                        src="/icons/full funnel.png"
                                        alt="Full-Funnel Focus"
                                        className="mx-auto"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg md:text-xl font-bold">FULL-FUNNEL FOCUS</p>
                                    <p className='text-sm md:text-base'>From brand awareness to pipeline acceleration, we fuse strategy into every stage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='bg-black p-6 md:p-12 text-white'>
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl md:text-4xl font-bold text-[#7852A9] mb-4">
                        WANT TO CONNECT
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Whether you're ready to launch or just curious about how we work, we're happy to talk.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href='/Contact' className="brand-button">
                            CONTACT US
                        </a>
                        <a href='/Contact' className="brand-button">
                            BOOK A STRATEGY CALL
                        </a>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}


