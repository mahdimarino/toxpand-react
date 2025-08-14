import React, { useEffect, useRef } from 'react';
import Carousel from '~/components/Carousel';
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';

interface MetaArgs {
    params?: Record<string, string>;
    location?: Location;
}

interface LinkBoxProps {
    imageUrl: string;
    text: string;
    rowType: string;

    delay: number;
    //  initialPosition: { x: number; y: number };
    finalPosition: { x: number; y: number };
}

export function meta({ }: MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

const LinkBox: React.FC<LinkBoxProps> = ({
    imageUrl,
    text,
    delay,
    finalPosition,
    rowType, // 'first' | 'second' | 'third'
}) => {
    const getAnimationClass = () => {
        if (rowType === 'second') {
            return finalPosition.x > 0
                ? 'moveIn-second-right'
                : 'moveIn-second-left';
        } else if (rowType === 'third') {
            return finalPosition.x > 0
                ? 'moveIn-third-right'
                : 'moveIn-third-left';
        }
        return finalPosition.x > 0
            ? 'moveIn-first-right'
            : 'moveIn-first-left';
    };

    return (
        <div
            className="link-box"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animation: `${getAnimationClass()} 1s ${delay}s forwards`
            }}
        >
            <div className="link-box-overlay text-center" style={{ backgroundColor: 'transparent !important' }}>
                <span className="link-box-text">{text}</span>
            </div>
        </div>
    );
};

export default function HomePage() {

    const videoRef = useRef<HTMLVideoElement>(null);
    const startedOnceRef = useRef(false); // tracks if video has already looped

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleEnded = () => {
            // On first end, start playing again from 7 seconds
            if (!startedOnceRef.current) {
                startedOnceRef.current = true;
                video.currentTime = 11; // jump to 7 seconds
                video.play();
            } else {
                // After that, loop from 7 seconds every time
                video.currentTime = 11;
                video.play();
            }
        };

        video.addEventListener("ended", handleEnded);
        return () => {
            video.removeEventListener("ended", handleEnded);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            const container = document.getElementById('links-container');
            if (container) {
                container.style.opacity = '1';
                container.style.transition = 'opacity 1s ease-in';
            }
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    const videoRef2 = React.useRef<HTMLVideoElement>(null);
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
            <Navbar />
            <section className="relative h-screen w-full overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0 w-full h-full">
                    <video

                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        onError={(e) => {
                            const error = (e.target as HTMLVideoElement).error;
                            console.error("Video error:", error);
                        }}
                    >
                        <source src="/videos/toxpand.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Links Container - Initially hidden */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center z-10"
                    id="links-container"
                    style={{ opacity: 0 }}
                >
                    {/* Row 1 */}
                    <div className="flex justify-center space-x-24 mb-12">
                        <LinkBox
                            imageUrl="/icons/atom.png"
                            text="100% FIRST PARTY DATA"
                            delay={0.1}
                            finalPosition={{ x: -200, y: 0 }}
                            rowType="first"
                        />
                        <LinkBox
                            imageUrl="/icons/atom.png"
                            text="BEST IN CLASS SERVICE"
                            delay={0.1}
                            finalPosition={{ x: 200, y: 0 }}
                            rowType="first"
                        />
                    </div>

                    {/* Second Row (300px) */}
                    <div className="flex justify-center space-x-24 mb-12">
                        <LinkBox
                            imageUrl="/icons/atom.png"
                            text="LIVE INTENT TRACKING"
                            delay={0.3}
                            finalPosition={{ x: -300, y: 0 }}
                            rowType="second"
                        />
                        <LinkBox
                            imageUrl="/icons/atom.png"
                            text="PIPELINE ESTIMATOR "
                            delay={0.3}
                            finalPosition={{ x: 300, y: 0 }}
                            rowType="second"
                        />
                    </div>

                    {/* Third Row (200px) */}
                    <div className="flex justify-center space-x-24">
                        <LinkBox
                            imageUrl="/icons/atom.png"
                            text="SIGNAL-LED TACTICS"
                            delay={0.5}
                            finalPosition={{ x: -200, y: 0 }}
                            rowType="third"
                        />
                        <LinkBox
                            imageUrl="/icons/atom.png"
                            text="CLARITY AT SCALE  "
                            delay={0.5}
                            finalPosition={{ x: 200, y: 0 }}
                            rowType="third"
                        />
                    </div>
                </div>
            </section>





            <section className='p-6 md:p-12'>

                <div className="w-full  md:max-w-[75%] mx-auto flex flex-col items-center justify-center m-6"
                >
                    <h1 className="text-center text-3xl md:text-5xl mt-2 font-bold text-[#7852A9]">
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
                className=" p-6 md:p-12 border-b-20 border-[#7852A9]"
                style={{
                    backgroundImage: "url('/backgrounds/GALAXY 2.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center', // This will align the bottom of the image with the bottom of the container
                    // Ensures the section is tall enough to show the bottom
                }}
            >
                {/* Your content here */}

                <div className="w-full mx-auto flex flex-col items-center justify-center md:m-6"
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
            <section className='p-6 md:p-12'>

                <div className="w-full  mx-auto flex flex-col items-center justify-center md:m-6"
                >
                    <h1 className="text-center text-2xl md:text-4xl mt-2 font-bold text-[#7852A9]">
                        DEMANDFUSION AI
                    </h1>
                    <p className="text-center text-1xl mt-2 text-white">
                        Our proprietary engine fusing real-time signals with campaign execution.
                    </p>
                    <p className="text-center text-1xl text-white">
                        DemandFusion powers every campaign with:
                    </p>

                    {/* <div className="gap-4 flex flex-row items-center justify-between mt-6">
                        <button className="brand-button text-white">HOW IT WORKS</button>
                    </div> */}
                </div>
                <div className='flex flex-col md:flex-row  md:px-12'>
                    <div className=" w-full text-white p-8 flex flex-col">

                        <div className='my-6 flex flex-col md:flex-row  gap-2 md:gap-6'>
                            {/* Card 1 */}
                            <div className="flex items-center bg-[#6A1B9A] p-2 md:p-4">
                                <img
                                    src="/icons/Predictive Targeting.png"
                                    alt="Card 1"
                                    className="w-16 h-16 object-cover rounded-md mr-1 md:mr-4"
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
                                    className="w-16 h-16 object-cover rounded-md mr-1 md:mr-4"
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
                        {/* <div className="flex gap-4 my-6">
                            <button className="brand-button text-white">LEARN MORE</button>
                        </div> */}
                    </div>

                </div>

            </section>

            <section className=" md:px-12 border-b-20 border-[#7852A9]">

                <section className="relative px-12">
                    <video
                        ref={videoRef2}
                        src="/videos/about.mp4"
                        className=""
                        controls
                        autoPlay
                        muted={isMuted}
                        playsInline
                    />
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        {/* <button
                            onClick={handleMute}
                            className=" bg-opacity-50 text-white p-2 rounded-full"
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
                        </button> */}
                    </div>
                </section>


                <div className='md:p-12'>
                    <div className="w-full mx-auto flex flex-col items-center justify-center m-7 border-t-2 border-white pt-6">
                        <h1 className="text-center text-4xl text-[#7852A9]">
                            FUSION WORKFLOW
                        </h1>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-12 md:px-12 place-items-center">
                        {/* Card 1 */}
                        <div className="rounded-full border-10 p-6 border-white">
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
                        <div className="rounded-full border-10 p-6 border-white">
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
                        <div className="rounded-full border-10 p-6 border-white">
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
            <section className=" container-fluid mx-auto py-12  text-white md:px-10">
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center item-center px-4 md:px-10 ">
                    {/* Card 1 */}
                    <div className="rounded-xl shadow-lg  text-center ">
                        <div className="m-1 text-white p-2 md:p-4 rounded-lg">
                            <div className="rounded-lg relative top-10 mx-auto">
                                <img
                                    src="/icons/target smarter.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div className='p-6 border-1 border-white rounded-xl '>
                                <div className='relative top-10'>
                                    <h2 className="text-xl md:text-2xl font-bold">TARGET SMARTER,</h2>
                                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#7852A9]">ANYWHERE</h2>


                                    <p className='font-rajdhani text-sm mt-3'>Whether you're focused on IT, Marketing, Finance – or targeting the US, EMEA, or APAC – we connect you to the right buyers, in the right moment.</p>
                                    <p className='mt-2'>By Job Function, By Industry, By Region, By Company Size</p>
                                </div>

                                <button className="brand-button mt-10 relative top-10">SEE OUR GLOBAL REACH</button>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl shadow-lg  text-center ">
                        <div className="m-1 text-white p-2 md:p-4 rounded-lg">
                            <div className="rounded-lg relative top-10 mx-auto">
                                <img
                                    src="/icons/ready to build.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div className='p-6 border-1 border-white rounded-xl '>
                                <div className='relative top-10'>
                                    <h2 className="text-xl md:text-2xl font-bold">READY TO BUILD</h2>
                                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#7852A9]">SMARTER PIPELINE?</h2>


                                    <p className='font-rajdhani text-sm mt-3'>Let's create demand that drives real outcomes.</p>
                                    <p>No fluff, No recycled leads.</p>
                                    <p className='mt-2'>Just verified engagement at scale.</p>
                                </div>

                                <button className="brand-button mt-10 relative top-10">BOOK A STRATEGY CALL</button>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
            <Footer />
        </>
    )
}