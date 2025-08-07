
import { Welcome } from "../welcome/welcome";
import { Navbar } from "../header/navbar";
import Carousel from '~/components/Carousel';

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
   <Navbar/>
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
   
   
            
                   {/* Atomic Engineering Section */}
                   <section className="bg-black py-8 md:py-12 text-white px-4 md:px-10">
                       <div className="max-w-6xl mx-auto">
                           {/* Titles */}
                           <div className="text-center mb-8 md:mb-12 px-2">
                               <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9]">
                                   EVERY TACTIC. <span className="text-white">ATOMICALLY ENGINEERED.</span>
                               </h1>
                               <h2 className="text-lg md:text-2xl mt-2 md:mt-4">
                                   We architect campaigns like molecular frameworks — every move intentional,
                                   interconnected, and designed to react.
                               </h2>
                           </div>
   
                           {/* Cards */}
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2 md:px-0">
                               {[
                                   {
                                       icon: "/icons/brand awareness.png",
                                       title: "Tailored Campaigns",
                                       description: "Every campaign is crafted with your unique goals and ideal customer profile in mind. Every campaign is crafted with your unique goals and ideal customer profile in mind."
                                   },
                                   {
                                       icon: "/icons/content syndication.png",
                                       title: "Content Syndication",
                                       description: "Every campaign is crafted with your unique goals and ideal customer profile in mind. Every campaign is crafted with your unique goals and ideal customer profile in mind."
                                   },
                                   {
                                       icon: "/icons/sales enablement.png",
                                       title: "Sales Enablement",
                                       description: "Every campaign is crafted with your unique goals and ideal customer profile in mind. Every campaign is crafted with your unique goals and ideal customer profile in mind."
                                   },
                                   {
                                       icon: "/icons/full funnel campaign.png",
                                       title: "Full Funnel",
                                       description: "Every campaign is crafted with your unique goals and ideal customer profile in mind. Every campaign is crafted with your unique goals and ideal customer profile in mind."
                                   }
                               ].map((card, index) => (
                                   <div key={index} className="rounded-xl shadow-lg p-6 md:p-8 text-center border border-[#00ffff]">
                                       <div className="p-4 mb-4 mx-auto">
                                           <img
                                               src={card.icon}
                                               alt={card.title}
                                               className="mx-auto w-16 h-16 md:w-20 md:h-20 object-contain"
                                           />
                                       </div>
                                       <div>
                                           <h2 className="text-lg md:text-xl font-bold mb-2">{card.title}</h2>
                                           <p className='text-xs md:text-sm mt-3'>{card.description}</p>
                                       </div>
                                       <button className="mt-6 md:mt-8 mb-2 brand-button">
                                           READ MORE
                                       </button>
                                   </div>
                               ))}
                           </div>
   
                           {/* Integration Text */}
                           <div className="text-center mt-8 md:mt-12 px-2">
                               <p className="text-base md:text-xl">
                                   We make the lead handoff seamless. We can integrate with your CRM or any Marketing Automation System. Our delivery capabilities include (but not limited to:)
                                   <br className="hidden md:block" /> Leads delivered seamlessly to:
                               </p>
                           </div>
   
                           {/* Logo Carousel */}
                           <div className="mt-6 md:mt-10 mx-2 md:mx-10">
                               <div className="overflow-x-auto scrollbar-hide">
                                   <div className="flex space-x-4 px-4 py-6 bg-white w-fit snap-x snap-mandatory">
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
                                               className="min-w-[80px] md:min-w-[120px] h-[60px] md:h-[80px] flex items-center justify-center border rounded-md snap-start bg-white p-2"
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
                   <section className='bg-black py-8 md:py-12 text-white px-4 '>
                       <div className="max-w-8xl mx-auto border border-[#00ffff] rounded-xl p-6 md:p-12">
                           <div className="text-center mb-8 md:mb-12">
                               <h1 className="text-2xl md:text-3xl font-bold">
                                   EMAIL MARKETING PROCESS
                               </h1>
                           </div>
   
                           <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                               {/* Pyramid Column */}
                               <div className="w-full md:w-6/12 py-6 px-2 md:px-6">
                                   <div className="pyramid">
                                       {[
                                           { text: "Lead Capture", bg: "bg-[#1b2a6d]" },
                                           { text: "text dd", bg: "bg-[#3f51b5]" },
                                           { text: "text dd", bg: "bg-[#9c27b0]" },
                                           { text: "text dd", bg: "bg-[#6a1b9a]" },
                                           { text: "text", bg: "bg-[#7851a9]" },
                                           { text: "text\ntext", bg: "bg-[#4c2e86]" }
                                       ].map((item, index) => (
                                           <div key={index} className={`pyramid__section flex justify-center items-center ${item.bg}`}>
                                               {item.text}
                                           </div>
                                       ))}
                                   </div>
                               </div>
   
                               {/* Process Cards Column */}
                               <div className="w-full md:w-6/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                   {[
                                       { icon: "/icons/lead capture.png", title: "Lead Capture", bg: "bg-[#1b2a6d]" },
                                       { icon: "/icons/Promo.png", title: "Promo", bg: "bg-[#3f51b5]" },
                                       { icon: "/icons/welcome email.png", title: "Welcome Email", bg: "bg-[#9c27b0]" },
                                       { icon: "/icons/Conversion.png", title: "Conversion", bg: "bg-[#6a1b9a]" },
                                       { icon: "/icons/nurture sequence.png", title: "Nurture", bg: "bg-[#7851a9]" },
                                       { icon: "/icons/re engagement.png", title: "Re-engagement", bg: "bg-[#4c2e86]" }
                                   ].map((item, index) => (
                                       <div key={index} className="p-4">
                                           <div className="flex flex-col items-center">
                                               <img width={48} height={48} src={item.icon} alt={item.title} className="w-12 h-12 md:w-16 md:h-16" />
                                               <div className={`mt-3 ${item.bg} py-2 w-full text-center text-sm md:text-base`}>
                                                   {item.title}
                                               </div>
                                               <div className='mt-3 text-xs text-center'>
                                                   <p>fkafksa ksd askdmkas asd maskdmask asdmmaskdmaskm kamsdmaksdmaksm askmdaksdaksmd</p>
                                               </div>
                                           </div>
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
                               <button className="brand-button">
                                   REQUEST A PROPOSAL
                               </button>
                           <button className="brand-button">
                                   BOOK STRATEGY
                               </button>
                           </div>
                       </div>
                   </section>
   
                   {/* Footer */}
                   <footer className="bg-black text-white py-8 md:py-12 px-4 md:px-12">
                       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                           {/* Logo Column */}
                           <div className="flex flex-col items-start">
                               <img
                                   src="https://toxpand.com/assets/images/icons/xlogo2light.png"
                                   alt="Logo"
                                   className="w-32 md:w-40 mb-4"
                               />
                           </div>
   
                           {/* Company Links */}
                           <div>
                               <h3 className="font-bold mb-2 md:mb-4 text-lg">Company</h3>
                               <ul className="space-y-2 mt-2 md:mt-4">
                                   <li><a href="/about" className="hover:underline text-sm md:text-base">Awards</a></li>
                                   <li><a href="/careers" className="hover:underline text-sm md:text-base">Careers</a></li>
                                   <li><a href="/contact" className="hover:underline text-sm md:text-base">About us</a></li>
                                   <li><a href="/contact" className="hover:underline text-sm md:text-base">FAQs</a></li>
                               </ul>
                           </div>
   
                           {/* Quick Links */}
                           <div>
                               <h3 className="font-bold mb-2 md:mb-4 text-lg">Quick Links</h3>
                               <ul className="space-y-2 mt-2 md:mt-4">
                                   <li><a href="/lead-generation" className="hover:underline text-sm md:text-base">Engagement Tactics</a></li>
                                   <li><a href="/email-marketing" className="hover:underline text-sm md:text-base">Global Reach</a></li>
                                   <li><a href="/consulting" className="hover:underline text-sm md:text-base">Real-Time Insights</a></li>
                                   <li><a href="/consulting" className="hover:underline text-sm md:text-base">Pipeline Performance Scorecard</a></li>
                               </ul>
                           </div>
   
                           {/* Newsletter & Links */}
                           <div>
                               <h3 className="font-bold mb-2 md:mb-4 text-lg">Stay Updated</h3>
                               <form className="flex gap-2 mt-2">
                                   <input
                                       type="email"
                                       placeholder="Your email"
                                       className="rounded bg-white text-black px-3 py-1 text-sm md:text-base flex-grow"
                                   />
                                   <button
                                       type="submit"
                                       className="bg-[#6A1B9A] hover:bg-[#7d2ba9] text-white font-bold py-1 px-3 rounded text-xs md:text-sm"
                                   >
                                       SIGNUP
                                   </button>
                               </form>
                               <ul className="space-y-2 mt-4 md:mt-6">
                                   <li><a href="/blog" className="hover:underline text-sm md:text-base">ROI Calculator</a></li>
                                   <li><a href="/newsletter" className="hover:underline text-sm md:text-base">Request Proposal</a></li>
                                   <li><a href="/privacy-policy" className="hover:underline text-sm md:text-base">Schedule a Call</a></li>
                               </ul>
                           </div>
                       </div>
                   </footer>
               </>
  );
}