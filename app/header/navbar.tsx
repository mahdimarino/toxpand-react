import React from 'react'
import './navbar.css';
import Carousel from '~/components/Carousel';



export function Navbar() {
    return (
        // <nav className="container mx-auto py-4">
        //     <div className="grid grid-cols-2 items-center">
        //     <a
        //         href="/"
        //         className="font-bold text-2xl text-gray-800 no-underline"
        //     >
        //         Logo
        //     </a>
        //     <ul className="flex justify-end gap-6 list-none m-0 p-0">
        //         <li><a href="/" className="hover:underline">Home</a></li>
        //         <li><a href="/about" className="hover:underline">About</a></li>
        //         <li><a href="/contact" className="hover:underline">Contact</a></li>
        //         <li><a href="/login" className="hover:underline">Login</a></li>
        //         <li><a href="/register" className="hover:underline">Register</a></li>
        //     </ul>
        //     </div>
        // </nav>
        // <nav className="navbar">
        //     <div className="navbar-logo">
        //         <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        //             <img
        //                 src="https://toxpand.com/assets/images/icons/xlogo2light.png"
        //                 alt="Logo"
        //                 style={{ width: '160px', marginRight: '8px' }}
        //             />
        //         </a>

        //     </div>

        //     <div className="navbar-links" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        //         <a className='me-7 ms-7' href="/" >Home</a>|
        //         <a className='me-7 ms-7' href="/about"> About </a> |
        //         <a className='me-7 ms-7' href="/contact"> Contact Contact Contact </a>
        //         <a
        //             className="me-7 ms-7 navbar-button"
        //             href="/about">
        //             <span>
        //                 About About
        //             </span>
        //         </a>
        //         <a className="me-7 ms-7 navbar-button" href="/about">
        //             <span>About About</span>
        //         </a>
        //         <hr style={{color:'rebeccapurple'}} className=' mt-4' />
        //     </div>

        //     <div className="navbar-actions navbar-links">
        //         <a className='me-9 ms-9' href="/login" style={{ color: 'inherit', textDecoration: 'none' }}> Login </a>|
        //         <a className='me-9 ms-9' href="/register" style={{ color: 'inherit', textDecoration: 'none' }}> Register </a>|
        //         <a className='me-9 ms-9' href="/register" style={{ color: 'inherit', textDecoration: 'none' }}> Register </a>|
        //         <a className='me-9 ms-9' href="/register" style={{ color: 'inherit', textDecoration: 'none' }}> Register </a>|
        //         <a className='me-9 ms-9' href="/register" style={{ color: 'inherit', textDecoration: 'none' }}> Register </a>

        //     </div>
        // </nav>
        <>
            <section className="relative h-screen w-full overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        onError={(e) => {
                            const error = (e.target as HTMLVideoElement).error;
                            console.error("Video error:", error);
                        }}
                    >
                        <source src="/videos/video-galaxy.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center z-10">
                    <div className="text-center px-4 text-white max-w-4xl">
                        {/* Main Title */}
                        <h1 className="text-3xl md:text-5xl font-bold mb-3 animate-fade-in">
                            WHERE PRECISION
                        </h1>
                        {/* Subtitle */}
                        <h2 style={{ color: '#00ffff' }} className="text-4xl md:text-5xl font-semibold mb-6">
                            MEETS PERFORMANCE
                        </h2>
                        {/* Description Text */}
                        <p className="text-lg mb-8 mx-auto max-w-1xl">
                            Every campaign we build is tailored to your goals & ICP, powered by AI, and designed to convert signal into sales momentum.
                        </p>
                        {/* Call-to-Action Button */}
                        <button className="strategy-button">BOOK A STRATEGY CALL</button>
                    </div>
                </div>

            </section>
            <section className="whyitmatter container-fluid mx-auto py-12 bg-black text-white px-10">
                {/* Titles */}
                <div className="w-full flex flex-col items-center justify-center mb-12">
                    <h1 className="text-center text-3xl mt-2 font-bold brandcolor">"WHY IT MATTERS"</h1>
                    <h1 className="text-center text-2xl mt-2">CUSTOM-FIT, SIGNAL-FUELED, REVENUE-READY</h1>
                </div>

                {/* Cards */}
                <div style={{ marginTop: '7rem' }} className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mt-10 md:px-10 ">
                    {/* Card 1 */}
                    <div className="rounded-xl shadow-lg p-10 text-center blueBorder">
                        <div className="m-1 bg-white text-black p-4 rounded-lg">
                            <div className=" img-div p-4 rounded-lg mb-4 mx-auto">
                                <img
                                    src="/icons/Signal Driven.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div className='moveup'>
                                <h2 className="text-xl brandcolor2 font-bold mb-2">Tailored Campaigns</h2>
                                <p>Every campaign is crafted with your unique goals and ideal customer profile in mind.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="rounded-xl shadow-lg p-10 text-center blueBorder">
                        <div className="m-1 bg-white text-black p-4 rounded-lg">
                            <div className=" img-div p-4 rounded-lg mb-4 mx-auto">
                                <img
                                    src="/icons/ICP Centric.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>

                            <div className='moveup'>
                                <h2 className="text-xl brandcolor2 font-bold mb-2">Tailored Campaigns</h2>
                                <p>Every campaign is crafted with your unique goals and ideal customer profile in mind.</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="rounded-xl shadow-lg p-10 text-center blueBorder">
                        <div className="m-1 bg-white text-black p-4 rounded-lg">
                            <div className=" img-div p-4 rounded-lg mb-4 mx-auto">
                                <img
                                    src="/icons/Outcome Oriented.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div className='moveup'>
                                <h2 className="text-xl brandcolor2 font-bold mb-2">Tailored Campaigns</h2>
                                <p>Every campaign is crafted with your unique goals and ideal customer profile in mind.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center mb-12">
                    <button className="strategy-button mt-20">SEE DEMANDFUSION IN ACTION</button>
                </div>
            </section>


            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


            <section className="bg-black container-fluid mx-auto py-12 bg-black text-white px-10">
                {/* Titles */}
                <div className="w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col items-center justify-center mb-12 px-7">
                    <h1 className="text-center text-3xl mt-2 font-bold brandcolor">
                        EVERY TACTIC. <span className="text-white">ATOMICALLY ENGINEERED.</span>
                    </h1>
                    <h2 className="text-center text-2xl mt-2">
                        We architect campaigns like molecular frameworks — every move intentional,
                        interconnected, and designed to react.
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 mt-10 md:px-10 ">
                    {/* Card 1 */}
                    <div className="rounded-xl shadow-lg p-10 text-center blueBorder">
                        <div className="m-1 text-white p-4 rounded-lg">
                            <div className="p-4 rounded-lg mb-4 mx-auto">
                                <img
                                    src="/icons/brand awareness.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-2">Tailored Campaigns</h2>
                                <p className='font-rajdhani text-sm mt-3'>Every campaign is crafted with your unique goals and ideal customer profile in mind. Every campaign is crafted with your unique goals and ideal customer profile in mind.</p>
                            </div>

                            <button className="strategy-button mt-10 mb-5">READ MORE</button>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="rounded-xl shadow-lg p-10 text-center blueBorder">
                        <div className="m-1 text-white p-4 rounded-lg">
                            <div className="p-4 rounded-lg mb-4 mx-auto">
                                <img
                                    src="/icons/content syndication.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-2">Tailored Campaigns</h2>
                                <p className='text-sm mt-3'>Every campaign is crafted with your unique goals and ideal customer profile in mind. Every campaign is crafted with your unique goals and ideal customer profile in mind.</p>
                            </div>

                            <button className="strategy-button mt-10 mb-5">READ MORE</button>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="rounded-xl shadow-lg p-10 text-center blueBorder">
                        <div className="m-1 text-white p-4 rounded-lg">
                            <div className="p-4 rounded-lg mb-4 mx-auto">
                                <img
                                    src="/icons/sales enablement.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-2">Tailored Campaigns</h2>
                                <p className='text-sm mt-3'>Every campaign is crafted with your unique goals and ideal customer profile in mind. Every campaign is crafted with your unique goals and ideal customer profile in mind.</p>
                            </div>

                            <button className="strategy-button mt-10 mb-5">READ MORE</button>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="rounded-xl shadow-lg p-10 text-center blueBorder">
                        <div className="m-1 text-white p-4 rounded-lg">
                            <div className="p-4 rounded-lg mb-4 mx-auto">
                                <img
                                    src="/icons/full funnel campaign.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-2">Tailored Campaigns</h2>
                                <p className='text-sm mt-3'>Every campaign is crafted with your unique goals and ideal customer profile in mind. Every campaign is crafted with your unique goals and ideal customer profile in mind.</p>
                            </div>

                            <button className="strategy-button mt-10 mb-5">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col items-center justify-center mb-12 px-7">
                    <p className="text-center text-2xl mt-10">
                        We make the lead handoff seamless. We can integrate with your CRM or any Marketing Automation System. Our delivery capabilities include (but not limited to:) <br />
                        Leads delivered seamlessly to:
                    </p>
                </div>
                {/* Carousel */}
                <div className='mx-10'>
                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex space-x-4 px-6 py-8 bg-white w-fit snap-x snap-mandatory">
                            {[
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgUUzbtl0YjneQOpbr_xXfs49lkaBfPjXqw&s",
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgUUzbtl0YjneQOpbr_xXfs49lkaBfPjXqw&s",
                                "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                                "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
                                "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                                "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
                                "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
                                "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
                                "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
                                "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
                                "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
                                "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                            ].map((src, index) => (
                                <div
                                    key={index}
                                    className="min-w-[120px] h-[80px] flex items-center justify-center border rounded-md snap-start bg-white"
                                >
                                    <img
                                        src={src}
                                        alt={`Logo ${index + 1}`}
                                        className="h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='emailprocess container-fluid mx-auto py-12 text-white px-10'>
                <div className="grid flex bg-black blueBorder p-12">
                    <div className="mx-auto flex flex-col items-center justify-center mb-6 mt-12 px-7">
                        <h1 className="text-center text-3xl font-bold">
                            EMAIL MARKETING PROCESS
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 px-4 mt-10 md:px-10">
                        {/* Left column - col-5 (≈ 41.67%) */}
                        <div className="w-full md:basis-5/12 py-12 px-6">
                            <div className="pyramid">
                                <div className="pyramid__section flex justify-center items-center bg-[#1b2a6d]">Lead Capture</div>
                                <div className="pyramid__section flex justify-center items-center bg-[#3f51b5]">text dd</div>
                                <div className="pyramid__section flex justify-center items-center bg-[#9c27b0]">text dd</div>
                                <div className="pyramid__section flex justify-center items-center bg-[#6a1b9a]">text dd</div>
                                <div className="pyramid__section flex justify-center items-center bg-[#7851a9]">text</div>
                                <div className="pyramid__section flex justify-center text-xs bg-[#4c2e86]">text <br /> text</div>
                            </div>
                        </div>

                        {/* Right column - col-7 (≈ 58.33%) */}
                        <div className="w-full md:basis-7/12 grid grid-rows-2 grid-flow-col gap-4 pb-6 mb-12">
                            <div className="p-5">
                                <div className="flex flex-col items-center">
                                    <img width={64} src="/icons/lead capture.png" alt="" />
                                    <div className='mt-3 bg-[#1b2a6d] py-2 w-full text-center'>
                                        Lead Capture
                                    </div>
                                    <div className='align-center mt-3 text-xs text-center'>
                                        <p>fkafksa ksd askdmkas asd maskdmask asdmmaskdmaskm kamsdmaksdmaksm askmdaksdaksmd</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-col items-center">
                                    <img width={64} src="/icons/Promo.png" alt="" />
                                    <div className='mt-3 bg-[#3f51b5] py-2 w-full text-center'>
                                        Lead Capture
                                    </div>
                                    <div className='align-center mt-3 text-xs text-center'>
                                        <p>fkafksa ksd askdmkas asd maskdmask asdmmaskdmaskm kamsdmaksdmaksm askmdaksdaksmd</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-col items-center">
                                    <img width={64} src="/icons/welcome email.png" alt="" />
                                    <div className='mt-3 bg-[#9c27b0] py-2 w-full text-center'>
                                        Lead Capture
                                    </div>
                                    <div className='align-center mt-3 text-xs text-center'>
                                        <p>fkafksa ksd askdmkas asd maskdmask asdmmaskdmaskm kamsdmaksdmaksm askmdaksdaksmd</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-col items-center">
                                    <img width={64} src="/icons/Conversion.png" alt="" />
                                    <div className='mt-3 bg-[#6a1b9a] py-2 w-full text-center'>
                                        Lead Capture
                                    </div>
                                    <div className='align-center mt-3 text-xs text-center'>
                                        fkafksa ksd askdmkas asd maskdmask asdmmaskdmaskm kamsdmaksdmaksm askmdaksdaksmd
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-col items-center">
                                    <img width={64} src="/icons/nurture sequence.png" alt="" />
                                    <div className='mt-3 bg-[#7851a9] py-2 w-full text-center'>
                                        Lead Capture
                                    </div>
                                    <div className='align-center mt-3 text-xs text-center'>
                                        fkafksa ksd askdmkas asd maskdmask asdmmaskdmaskm kamsdmaksdmaksm askmdaksdaksmd
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex flex-col items-center">
                                    <img width={64} src="/icons/re engagement.png" alt="" />
                                    <div className='mt-3 bg-[#4c2e86] py-2 w-full text-center'>
                                        Lead Capture dd
                                    </div>
                                    <div className='align-center mt-3 text-xs text-center'>
                                        fkafksa ksd askdmkas asd maskdmask asdmmaskdmaskm kamsdmaksdmaksm askmdaksdaksmd
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="whyitmatter subscribe container-fluid mx-auto text-white px-10">
                <div className="flex px-12 py-6 gap-2">
                    <div className="md:basis-4/12  pl-3 bg-[#3F51B5] text-black p-12 newsletter-img flex items-center justify-center">
                        <img src="/icons/subscribe to newsletter.png" alt="" />
                    </div>
                    <div className=" md:basis-8/12  bg-[#EDEDED]  p-[5rem] newsletter-form flex flex-col  justify-center">
                        <h1 ><b>SUBSCRIBE TO OUR NEWS LETTER</b></h1>
                        <h2 className='text-black text-bold'><b>Want high-quality leads?</b></h2>
                        <p className='text-black text-sm'>Subscribe for exclusive data trends, lead-generation strategies, and industry insights—delivered straight to your inbox.</p>
                        <form action="" className='flex flex-row gap-4 items-center justify-center mt-6'>
                            <input type="text" name="" id="" placeholder='Name' className='bg-white w-full text-black px-2 py-1 rounded' />
                            <input type="email" name="" placeholder='Email Address' id="" className='bg-white w-full text-black px-2 py-1 rounded' />
                            <button className="strategy-button">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>

            </section>


            <Carousel />

            <section className='bg-black p-8 text-white'>

                <div className="w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col items-center justify-center mb-12 px-7">
                    <h1 className="text-center text-3xl mt-2 font-bold brandcolor">
                        LET’S BUILD TACTICS THAT  <span className="text-white">SPARK PIPELINE</span>
                    </h1>
                    <p className="text-center text-2xl mt-2">
                        Tell us your ICP and growth goals – we’ll fuse the rest.
                    </p>
                    <div className="w-full gap-4 flex flex-row items-center justify-center mt-6">
                        <button className="strategy-button ">REQUEST A PROPOSAL</button>
                        <button className="strategy-button ">BOOK STRATEGY</button>

                    </div>
                </div>

            </section>
            <footer className="bg-black text-white py-12 px-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-12">
                    {/* Logo Column */}
                    <div className="flex flex-col items-start">
                        <img
                            src="https://toxpand.com/assets/images/icons/xlogo2light.png"
                            alt="Logo"
                            className="w-50 mb-4"
                        />

                    </div>
                    {/* Column 2 */}
                    <div>
                        <h3 className="font-bold mb-4">Company</h3>
                        <ul className="space-y-2 mt-8">
                            <li><a href="/about" className="hover:underline">Awards</a></li>
                            <li><a href="/careers" className="hover:underline">Careers</a></li>
                            <li><a href="/contact" className="hover:underline">About us</a></li>
                            <li><a href="/contact" className="hover:underline">FAQs</a></li>

                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 mt-8">
                            <li><a href="/lead-generation" className="hover:underline">Engagement Tactics</a></li>
                            <li><a href="/email-marketing" className="hover:underline">Global Reach</a></li>
                            <li><a href="/consulting" className="hover:underline">Real-Time Insights</a></li>
                            <li><a href="/consulting" className="hover:underline">Pipeline Performance Scorecard</a></li>

                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div>

                        <form className="flex gap-2 mt-2 h-6">
                            <input
                                type="email"
                                className="rounded bg-white text-black"
                            />
                            <button
                                type="submit"
                                className="strategy-button p-0 text-xs"
                            >
                                SIGNUP
                            </button>
                        </form>
                        <ul className="space-y-2 mt-8">
                            <li><a href="/blog" className="hover:underline">ROI Calculator</a></li>
                            <li><a href="/newsletter" className="hover:underline">Request Proposal</a></li>
                            <li><a href="/privacy-policy" className="hover:underline">Schedule a Call</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    );
}

// export default Navbarsemibold