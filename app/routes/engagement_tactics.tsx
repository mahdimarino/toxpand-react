
import { Welcome } from "../welcome/welcome";
import { Navbar } from "../header/navbar";
import Carousel from '~/components/Carousel';
import { Footer } from '~/footer/footer';


// If you're using TypeScript with React Router v6
// interface MetaArgs {
//   params?: Record<string, string>;
//   location?: Location;
// }

// export function meta({ }: MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function EngagementTactics() {
    return (
        <>
            <Navbar />
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
                        <a href="/Contact" className="strategy-button">BOOK A STRATEGY CALL</a>
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
                    <div className="rounded-xl shadow-lg p-10  text-center blueBorder">
                        <div className="m-1 bg-white text-black p-4 rounded-lg">
                            <div className=" img-div p-4 rounded-lg mb-4 mx-auto">
                                <img
                                    src="/icons/Signal Driven.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div className='moveup'>
                                <h2 className="text-xl brandcolor2 font-bold mb-2">Signal-Driven</h2>
                                <p>Activated by real-time
                                    engagement, intent, and
                                    predictive signals</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="rounded-xl shadow-lg p-10 mt-10 md:mt-0 text-center blueBorder">
                        <div className="m-1 bg-white text-black p-4 rounded-lg">
                            <div className=" img-div p-4 rounded-lg mb-4 mx-auto">
                                <img
                                    src="/icons/ICP Centric.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>

                            <div className='moveup'>
                                <h2 className="text-xl brandcolor2 font-bold  mb-2">ICP-Centric</h2>
                                <p>Modeled around the personas
                                    and buying stages that drive
                                    your growth</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="rounded-xl shadow-lg p-10 text-center mt-10 md:mt-0 blueBorder">
                        <div className="m-1 bg-white text-black p-4 rounded-lg">
                            <div className=" img-div p-4 rounded-lg mb-4 mx-auto">
                                <img
                                    src="/icons/Outcome Oriented.png"
                                    alt="Card 1"
                                    className="mx-auto"
                                />
                            </div>
                            <div className='moveup'>
                                <h2 className="text-xl brandcolor2 font-bold mb-2">Outcome-Oriented</h2>
                                <p>Built to eliminate guesswork
                                    and accelerate salesreadiness</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="w-full flex flex-col items-center justify-center mb-12">
                    <button className="strategy-button mt-20">SEE DEMANDFUSION IN ACTION</button>
                </div> */}
            </section>


            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



            {/* Atomic Engineering Section */}
            <section className="py-8 md:py-12 text-white px-4 md:px-10">
                <div className="md:px-10 mx-auto">
                    {/* Titles */}
                    <div className="text-center mb-8 md:px-12 md:mb-12 px-2">
                        <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9]">
                            EVERY TACTIC. <span className="text-white">ATOMICALLY ENGINEERED.</span>
                        </h1>
                        <h2 className="text-lg md:text-2xl mt-2 md:px-12 md:mt-4">
                            We architect campaigns like molecular frameworks — every move intentional,
                            interconnected, and designed to react.
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2 md:px-0">
                        {[
                            {
                                icon: "/icons/brand awareness.png",
                                title: "BRAND AWARENESS CAMPAIGNS",
                                description: "Reach the right buyers before they enter the funnel. Using DemandFusion, we activate targeted outreach across your ideal personas and accounts – building recognition and early-stage engagement."
                            },
                            {
                                icon: "/icons/content syndication.png",
                                title: "CONTENT SYNDICATION CAMPAIGNS",
                                description: "Powered by DemandFusion, we can mirror your target account list – or build a lookalike audience based on your best customers – and scale it with precision."
                            },
                            {
                                icon: "/icons/sales enablement.png",
                                title: "SALES ENABLEMENT CAMPAIGNS",
                                description: "Every lead is curated with intent – using targeted profiling and qualifying questions to uncover buying stage and readiness."
                            },
                            {
                                icon: "/icons/full funnel campaign.png",
                                title: "FULL-FUNNEL CAMPAIGNS",
                                description: "Activate demand at every stage of the buyer journey – from early interest to sales-ready."
                            }
                        ].map((card, index) => (
                            <div key={index} className="rounded-xl shadow-lg p-3 md:p-4 text-center border border-[#00ffff] flex flex-col" >
                                <div className="p-2 mb-4 mx-auto">
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="mx-auto object-contain"
                                    />
                                </div>
                                <div className="md:pb-6">
                                    <h2 className="text-lg md:text-xl font-bold mb-2">{card.title}</h2>
                                    <p className='text-xs md:text-xs mt-3 md:leading-6'>{card.description}</p>
                                </div>
                                {/* <button className="mt-6 md:mt-auto mb-2 brand-button self-center">
                                           READ MORE
                                       </button> */}
                            </div>
                        ))}
                    </div>

                    {/* Integration Text */}
                    <div className="text-center mt-8 md:mt-12 md:px-12 px-2">
                        <p className="text-base md:text-xl md:px-12">
                            We make the lead handoff seamless. We can integrate with your CRM or any Marketing Automation System. Our delivery capabilities include (but not limited to:)
                            {/* <br className="hidden md:block" /> Leads delivered seamlessly to: */}
                        </p>
                    </div>

                    {/* Logo Carousel */}
                    <div className="mt-6 md:mt-10 mx-2 md:mx-10">
                        <div className="overflow-x-auto scrollbar-hide bg-white">
                            <div className="flex space-x-4 px-4 py-6 justify-between w-full  w-fit snap-x snap-mandatory">
                                {[
                                    "/companyLogos/Salesforce.com_logo.svg.png",
                                    "/companyLogos/Marketo_logo.png",
                                    "/companyLogos/download33.png",
                                    "/companyLogos/9818f46032e60cb78d776f780f81941b.avif",
                                    "/companyLogos/download.png",
                                    "/companyLogos/HubSpot_Logo.png",


                                ].map((src, index) => (
                                    <div
                                        key={index}
                                        className="min-w-[80px] md:min-w-[120px] h-[60px] md:h-[80px] flex items-center justify-center   snap-start  p-2"
                                    >
                                        <img
                                            src={src}
                                            alt={`Logo ${index + 1}`}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Email Process Section */}
            <section style={{
                backgroundImage: "url('/backgrounds/GALAXY 3.png')",
                backgroundSize: 'cover',
            }} className=' py-8 md:py-12 text-white px-4 md:px-12 '>
                <div style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }} className="max-w-8xl mx-auto border border-[#00ffff] rounded-xl p-6 md:p-12">
                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-2xl md:text-3xl font-bold">
                            EMAIL MARKETING PROCESS
                        </h1>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                        {/* Pyramid Column */}
                        <div className="w-full hidden md:block md:w-5/12 py-6 px-2 md:px-6">
                            <div className="pyramid">
                                {[
                                    { text: "PPC", bg: "bg-[#1b2a6d]" },
                                    { text: "MQLs", bg: "bg-[#3f51b5]" },
                                    { text: "HQLs", bg: "bg-[#9c27b0]" },
                                    { text: "SQLs", bg: "bg-[#6a1b9a]" },
                                    { text: "Nurture", bg: "bg-[#7851a9]" },
                                    { text: "", bg: "bg-[#7851a9]" }
                                ].map((item, index) => (
                                    <div key={index} className={`pyramid__section text-xl text-bold flex justify-center items-center ${item.bg}`}>
                                        <b> {item.text}</b>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Process Cards Column */}
                        <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-4">
                            {[
                                {
                                    icon: "/update/1.png",
                                    title: "Lead Capture",
                                    description: "Email Marketing Campaign Launch Details​",
                                    bg: "bg-[#1b2a6d]"
                                },
                                {
                                    icon: "/update/2.png",
                                    title: "Promo/Offer",
                                    description: "Data Inputs, Content Casting A.I. tool. Modeling, Assets/Creatives are checked along with the abstracts​​",
                                    bg: "bg-[#3f51b5]"
                                },
                                {
                                    icon: "/update/3.png",
                                    title: "Welcome Email",
                                    description: "Landing Pages and Email samples are shared with the client for Approval​​​",
                                    bg: "bg-[#9c27b0]"
                                },
                                {
                                    icon: "/update/4.png",
                                    title: "Conversion",
                                    description: "Email Sends are scheduled as per the campaign pacing requirements​​​​",
                                    bg: "bg-[#6a1b9a]"
                                },
                                {
                                    icon: "/update/8.png",
                                    title: "Nurture",
                                    description: "QC team also checks the data accuracy on LinkedIn and Google (Also, we ensure no personal emails are captured)​​​​​​",
                                    bg: "bg-[#7851a9]"
                                },
                                {
                                    icon: "/update/7.png",
                                    title: "Nurture",
                                    description: "QC team matches​ the leads against the ​campaign parameters​​​​​​",
                                    bg: "bg-[#7851a9]"
                                },
                                {
                                    icon: "/update/6.png",
                                    title: "Nurture",
                                    description: "Data checked and captured is shared with the QC team​​​​​​​",
                                    bg: "bg-[#7851a9]"
                                },
                                {
                                    icon: "/update/5.png",
                                    title: "Re-engagement",
                                    description: "Post Approval campaign details are shared with the digital team​​",
                                    bg: "bg-[#4c2e86]"
                                }
                            ].map((item, index) => (
                                <div key={index} className="relative p-4">
                                    <div className="flex flex-col items-center ">
                                        <img
                                            width={48}
                                            height={48}
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
                                        />
                                        {(index === 0 || index === 1 || index === 2) && (
                                            <span className="text-5xl absolute top-[40px] right-0 transform -translate-y-1/2 w-6 h-6 text-[white]">&#8594;</span>
                                               )}

                                        {(index === 4 || index === 5 || index === 6) && (
                                            <span className="text-5xl absolute top-[40px] right-0 transform -translate-y-1/2 w-6 h-6 text-[white]">&#8592;</span>
                                        )}
                                        <div className="mt-3 text-xs text-center">
                                            <p className="md:leading-6">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Arrow logic */}
                                    
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* Newsletter Section */}

            <section className="bg-black py-8 md:py-12 text-white px-4 md:px-10 whyitmatter subscribe">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-4/12 bg-[#3F51B5] p-6 md:p-8 flex items-center justify-center">
                        <img src="/icons/subscribe to newsletter.png" alt="Newsletter" className="w-full max-w-[200px]" />
                    </div>
                    <div className="w-full md:w-8/12 bg-[#EDEDED] p-6 md:p-12 flex flex-col justify-center">
                        <h1 className="text-xl md:text-2xl font-bold text-black mb-2"><b>SUBSCRIBE TO OUR NEWSLETTER</b></h1>
                        <h2 className="text-lg md:text-xl text-black font-bold mb-2"><b>Want high-quality leads?</b></h2>
                        <p className='text-black text-sm md:text-base mb-4'>
                            Subscribe for exclusive data trends, lead-generation strategies, and industry insights—delivered straight to your inbox.
                        </p>
                        <form className='flex flex-col md:flex-row gap-3 items-stretch'>
                            <input
                                type="text"
                                placeholder='Name'
                                className='bg-white text-black px-4 py-2 rounded flex-grow text-sm md:text-base'
                            />
                            <input
                                type="email"
                                placeholder='Email Address'
                                className='bg-white text-black px-4 py-2 rounded flex-grow text-sm md:text-base'
                            />
                            <button className="brand-button">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Testimonial Carousel */}
            <Carousel />

            {/* CTA Section */}
            <section className='bg-black py-8 md:py-12 text-white px-4'>
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9]">
                        LET'S BUILD TACTICS THAT <span className="text-white">SPARK PIPELINE</span>
                    </h1>
                    <p className="text-lg md:text-xl mt-2 md:mt-4">
                        Tell us your ICP and growth goals – we'll fuse the rest.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
                        <a href="/RequestProposal" className="brand-button">
                            REQUEST A PROPOSAL
                        </a>
                        <a href="/Contact" className="brand-button">
                            BOOK STRATEGY
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}