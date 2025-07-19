import React from 'react'



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
            <section>
                <video
                    ref={videoRef}
                    src="/videos/video-galaxy.mp4"
                    style={{ width: '100%' }}
                    controls
                    autoPlay
                    muted={isMuted}
                />

            </section>
            <section
                className="p-12 text-white grid grid-cols-12"
                // style={{
                //     backgroundImage: 'url("/backgrounds/bg2.jpg")',
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                // }}
            >

                <div className="px-12 col-span-12 md:col-span-10 xl:col-span-10 md:col-start-2 xl:col-start-2">
                    <div className='my-6'>
                        <h1 className='text-5xl'>ABOUT US</h1>
                    </div>
                    <div>
                        <h2 className='text-2xl mt-4 mb-12 pb-4 text-[#7852A9] border-b-3 border-[#00ffff]'>
                            BUILDING PIPELINE, THE RIGHT WAY.
                        </h2>
                        <p className='my-6'>
                            At ToXPAND, we didn’t set out to become another lead gen agency. We set out to fix lead generation – with transparency, accountability, and AI intelligence at the core.
                        </p>
                        <p className='my-6'>
                            We’ve seen what goes wrong in B2B demand gen: opaque data, recycled contacts, and “spray-and-pray” content syndication. So we built something different – a pipeline partner that doesn’t just promise performance, but proves it.
                        </p>
                        <p className='my-6'>
                            Our mission is simple: Help B2B marketers escape content syndication pitfalls and generate demand that actually converts. Everything we deliver is in-house, first-party, and validated – with visibility at every stage.
                        </p>
                    </div>
                </div>
                <div className='px-12 col-span-12 md:col-span-10 xl:col-span-10 md:col-start-2 xl:col-start-2'>

                    <div>
                        <h2 className='text-2xl mt-4 mb-12 pb-4 text-white border-b-3 border-[#00ffff]'>
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


                    </div>
                </div>



            </section >
            <section className='p-12 text-white bg-gradient-to-r from-[#6a1b9a] to-[#3f51b5]'>
                <div>
                    <h2 className='text-center text-3xl py-6'>
                        “WE'RE NOT HERE TO COMPETE. WE'RE HERE TO REDEFINE THE FIELD.”
                    </h2>
                </div>
            </section>
            <section className="bg-black container-fluid mx-auto p-12 bg-black text-white" style={{
                backgroundImage: 'url("/backgrounds/bg3.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                {/* Titles */}
                <div className="w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col items-center justify-center my-6 px-7">
                    <h1 className="text-center text-4xl text-[#6a1b9a]">
                        HOW WE'RE <span className="text-white">DIFFERENT</span>
                    </h1>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 p-12 md:px-12 ">
                    {/* Card 1 */}
                    <div className=" shadow-lg px-10 text-center border-r-2 border-[#00ffff]">
                        <div className="m-1 text-white px-4 rounded-lg">
                            <div className="p-4 rounded-lg mx-auto">
                                <img width={120}
                                    src="/icons/ethical.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div>
                                <p className="text-xl">ETHICAL FIRST-PARTY DATA</p>
                                <p className='font-rajdhani text-sm pb-3'>52M+ global contacts, all opt-in and fully compliant</p>
                            </div>

                          
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className=" shadow-lg px-10 text-center border-r-2 border-[#00ffff]">
                        <div className="m-1 text-white px-4 rounded-lg">
                            <div className="p-4 rounded-lg mx-auto">
                                <img width={120}
                                    src="/icons/ai powered precision.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div>
                                <p className="text-xl">AI-POWERED PRECISION</p>
                                <p className='font-rajdhani text-sm pb-3'>DemandFusion drives smarter segmentation, engagement, and signal-based outreach.</p>
                            </div>


                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className=" shadow-lg px-10 text-center border-r-2 border-[#00ffff]">
                        <div className="m-1 text-white px-4 rounded-lg">
                            <div className="p-4 rounded-lg mx-auto">
                                <img width={120}
                                    src="/icons/transparent campaign.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div>
                                <p className="text-xl">TRANSPARENT CAMPAIGNS</p>
                                <p className='font-rajdhani text-sm pb-3'>You see what we see – every signal, every engagement, every conversion.</p>
                            </div>


                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className=" shadow-lg px-10 text-center">
                        <div className="m-1 text-white px-4 rounded-lg">
                            <div className="p-4 rounded-lg mx-auto">
                                <img width={120}
                                    src="/icons/full funnel.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div>
                                <p className="text-xl">FULL-FUNNEL FOCUS</p>
                                <p className='font-rajdhani text-sm pb-3'>From brand awareness to pipeline acceleration, we fuse strategy into every stage.</p>
                            </div>


                        </div>
                    </div>
                </div>
              
            </section>
            <section className='bg-black p-12 text-white'>

                <div className="w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col items-center justify-center mb-12 px-7">
                    <h1 className="text-center text-4xl mt-2 font-bold text-[#7852A9]">
                       WANT TO CONNECT
                    </h1>
                    <p className="text-center text-xl mt-2">
                        Whether you're ready to launch or just curious about how we work, we're happy to talk.
                    </p>
                    <div className="w-full gap-4 flex flex-row items-center justify-center mt-6">
                        <button className="brand-button ">CONTACT US</button>
                        <button className="brand-button ">BOOK A STRATEGY CALL</button>

                    </div>
                </div>

            </section>
            
        </>
    );
}