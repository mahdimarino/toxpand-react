import React, { useState } from 'react';

const FAQItem = ({ question, answer }: { question: any; answer: any }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4 overflow-hidden rounded-lg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between bg-white p-4 text-left text-black hover:bg-gray-100 transition-colors duration-200"
            >
                <p className="font-medium">{question}</p>
                <span className="ml-4 transition-transform duration-200">
                    {isOpen ? (
                        <span className="bg-[#6A1B9A] rounded-full p-1 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" style={{ color: '#00ffff' }} clipRule="evenodd" />
                            </svg>
                        </span>
                    ) : (
                        <span className="bg-[#6A1B9A] rounded-full p-1 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" style={{ color: 'white' }} clipRule="evenodd" />
                            </svg>
                        </span>
                    )}
                </span>
            </button>

            {isOpen && (
                <div className="bg-[#6A1B9A] p-4 text-white">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default function Fandq() {
    const faqs = [
        {
            category: "🛠 Campaign Execution",
            questions: [
                {
                    question: "Do you outsource any part of your campaigns?",
                    answer: "No. Everything is run in-house — from creative development to audience activation and reporting."
                },
                {
                    question: "Can you customize campaigns to our brand and ICP?",
                    answer: "Yes. Every campaign is uniquely designed around your goals, ideal customer profile, and funnel stage."
                },
                {
                    question: "How long does it take to launch a campaign?",
                    answer: "Campaigns typically go live within 3-5 business days, depending on scope and asset availability."
                }
            ]
        },
        {
            category: "🎯 Data & Targeting",
            questions: [
                {
                    question: "Where does your data come from?",
                    answer: "All 62M+ records in our database are ethically sourced, first-party, and refreshed regularly. No third-party rentals. No data scraping."
                },
                {
                    question: "Are your programs GDPR, CCPA, and CASL compliant?",
                    answer: "Yes. All data collection and usage strictly adhere to global privacy standards."
                },
                {
                    question: "Can I filter by region, job function, industry, or company size?",
                    answer: "Yes — and with signal layering, we can go even further with behavioral triggers and funnel-stage insights."
                }
            ]
        },
        {
            category: "🤖 DemandFusion™ AI",
            questions: [
                {
                    question: "What is DemandFusion™?",
                    answer: "It's our proprietary AI engine that fuels intelligent campaign delivery by merging real-time signals, persona targeting, and predictive behavior patterns."
                },
                {
                    question: "How does it improve performance?",
                    answer: "It dynamically adjusts campaign outreach based on engagement signals, increasing relevance and reducing wasted spend."
                }
            ]
        },
        {
            category: "🚀 Lead Quality & Delivery",
            questions: [
                {
                    question: "What makes a lead 'sales-ready'?",
                    answer: "Every lead meets your agreed ICP and engagement thresholds, with intent, action, and timing signals factored in."
                },
                {
                    question: "How are leads delivered?",
                    answer: "Via CRM integration, automation platform, or formatted spreadsheets — with full activity and enrichment fields."
                },
                {
                    question: "Do you guarantee lead quality?",
                    answer: "Yes. Any lead that doesn't meet your predefined criteria will be replaced."
                }
            ]
        },
        {
            category: "📊 Reporting & Optimization",
            questions: [
                {
                    question: "Do I get performance reporting?",
                    answer: "Yes. Reports include engagement metrics, content performance, lead quality, and behavioral signal breakdowns."
                },
                {
                    question: "Do I know what content or signal triggered engagement?",
                    answer: "Absolutely. We provide full transparency into every trigger, from keywords to content type to format."
                }
            ]
        },
        {
            category: "👥 Support & Collaboration",
            questions: [
                {
                    question: "Will we have a dedicated services team?",
                    answer: "Yes. You'll be assigned a dedicated Engagement Strategist who oversees all aspects of your program."
                },
                {
                    question: "Can we optimize campaigns while they're live?",
                    answer: "Yes. Our team monitors signals in real-time and adjusts as needed to maximize results."
                }
            ]
        }
    ];

    return (
        <>
            <section className='p-12 text-white'>
                <div className='w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col p-12'>
                    <h1 className='text-5xl text-[#7852A9]'>FREQUENTLY ASKED QUESTIONS</h1>
                    <h2 className='text-xl'>Real Answers. No Black Boxes.</h2>
                    <p className='my-6'>
                        At ToXPAND, we believe transparency builds trust. Every campaign
                        is designed, launched, and optimized 100% in-house – never outsourced, never offloaded.
                        From data capture to signal activation, what you see is what we deliver. This FAQ page
                        is designed to give you clear, candid answers to how we operate, how we protect privacy,
                        and how we fuel your pipeline.
                    </p>
                </div>

                <div className='mx-8 border rounded-4xl border-[#00ffff]'>
                    {faqs.map((section, index) => (
                        <div key={index} className='w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col py-12 border-b-2 border-solid border-[#00ffff]'>
                            <h2 className='text-xl mb-6'><b>{section.category}</b></h2>
                            {section.questions.map((item, qIndex) => (
                                <FAQItem key={qIndex} question={item.question} answer={item.answer} />
                            ))}
                        </div>
                    ))}
                </div>
            </section>
            <section
                className='p-12'
                style={{
                    backgroundImage: "url('/backgrounds/GALAXY 3.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col items-center justify-center m-6"
                >
                    <h1 className="text-center text-5xl mt-2 font-bold text-[#7852A9]">
                        UNDER THE HOOD:
                    </h1>
                    <h1 className="text-center text-5xl mt-2 text-white">
                        HOW WE OPERATE (AND PROVE IT)
                    </h1>
                    <p className="text-center text-1xl mt-6 text-white">
                        We understand that some partners want to dive deeper — into consent models, legal bases, capture methods, and data suppression.
                    </p>
                    <p className="text-center text-1xl mt-2 text-white">
                        This section outlines how we run things behind the curtain — so you can trust we're not just compliant, but conscientious.
                    </p>
                </div>
                <div className='w-full max-w-[75%] md:max-w-[75%] mx-auto mx-8 border rounded-2xl p-3 border-[#00ffff]'>
                    <div className='bg-white rounded-2xl p-12 '>
                       
                        <div className='py-6 border-b-2 border-solid border-[#00ffff]'>
                            <h4 className='text-xl text-[#7852A9]'><b>NATURE OF BUSINESS</b></h4>
                            <ul className='my-6'>
                                <li className='text-sm'>• ToXPAND is an AI-powered pipeline generation platform, not a publisher, aggregator, or list vendor.</li>
                                <li className='text-sm'>• We operate on performance-based models — clients only pay if satisfied.</li>
                                <li className='text-sm'>• Our programs use first-party opt-in data and emphasize email as the primary channel (telemarketing available if requested).</li>
                                <li className='text-sm'>• All deployments originate from our in-house teams.</li>
                            </ul>
                        </div>

                       
                        <div className='py-6 border-b-2 border-solid border-[#00ffff]'>
                            <h4 className='text-xl text-[#7852A9]'><b>CAMPAIGN FULFILLMENT TACTICS</b></h4>
                            <ul className='my-6'>
                                <li className='text-sm'>• Standard guaranteed lead programs are fulfilled via 1:1 targeted email sends.</li>
                                <li className='text-sm'>• Telemarketing is available (with native English, German, French, and Spanish speakers), but not required for program success.</li>
                                <li className='text-sm'>• We do not use newsletters, mass e-blasts, or publisher networks.</li>
                            </ul>
                        </div>

                     
                        <div className='py-6 border-b-2 border-solid border-[#00ffff]'>
                            <h4 className='text-xl text-[#7852A9]'><b>LEGAL BASIS FOR PROCESSING DATA</b></h4>
                            <ul className='my-6'>
                                <li className='text-sm'>• We rely on explicit consent and legitimate interest under GDPR, CCPA, and CASL.</li>
                                <li className='text-sm'>• Consent is recorded on all landing pages and telemarketing interactions and stored securely.</li>
                                <li className='text-sm'>• Legitimate Interest Assessments (LIAs) are conducted for every client campaign, and outcomes are respected.</li>
                            </ul>
                        </div>

                      
                        <div className='py-6 border-b-2 border-solid border-[#00ffff]'>
                            <h4 className='text-xl text-[#7852A9]'><b>CAPTURE POINTS & CONSENT</b></h4>
                            <ul className='my-6'>
                                <li className='text-sm'>• Data is collected via:</li>
                                <li className='ml-4'>o Landing pages</li>
                                <li className='ml-4'>o Email forms</li>
                                <li className='ml-4'>o Telemarketing calls</li>
                                <li className='text-sm'>• Consent is logged per contact, with evidence stored and updated.</li>
                                <li className='text-sm'>• Our capture pages clearly display privacy policies, and our callers provide them post-confirmation.</li>
                            </ul>
                        </div>

                        
                        <div className='py-6 border-b-2 border-solid border-[#00ffff]'>
                            <h4 className='text-xl text-[#7852A9]'><b>PRIVACY, SUPPRESSION & OPT-OUT MANAGEMENT</b></h4>
                            <ul className='my-6'>
                                <li className='text-sm'>• We clean and update suppression files daily.</li>
                                <li className='text-sm'>• All marketing emails include unsubscribe links.</li>
                                <li className='text-sm'>• Requests to opt out, suppress, or amend contact details are processed within 24 hours.</li>
                                <li className='text-sm'>• Contacts can update preferences via unsubscribe pages or by emailing us directly at privacy@toxpand.com.</li>
                            </ul>
                        </div>

                        <div className='py-6 border-b-2 border-solid border-[#00ffff]'>
                            <h4 className='text-xl text-[#7852A9]'><b>TELEMARKETING SPECIFICS</b></h4>
                            <ul className='my-6'>
                                <li className='text-sm'>• Yes, we offer telemarketing — but always clean numbers daily against TPS and CTPS.</li>
                                <li className='text-sm'>• No outreach occurs to numbers registered for more than 28 days.</li>
                                <li className='text-sm'>• Consent is recorded via call recordings and LIA documentation is available upon request.</li>
                            </ul>
                        </div>

                   
                        <div className='py-6 border-b-2 border-solid border-[#00ffff]'>
                            <h4 className='text-xl text-[#7852A9]'><b>DATA INTEGRITY & TRAINING</b></h4>
                            <ul className='my-6'>
                                <li className='text-sm'>• Our data is validated daily via tech tools and human review.</li>
                                <li className='text-sm'>• Staff are trained quarterly on privacy laws and CTPS compliance via certified trainers (e.g. Laurel Institute).</li>
                                <li className='text-sm'>• All staff are equipped to answer how data was sourced and when consent was captured.</li>
                            </ul>
                        </div>

                     
                        <div className='pt-6'>
                            <h4 className='text-xl text-[#7852A9]'><b>WE DO NOT...</b></h4>
                            <ul className='my-6'>
                                <li className='text-sm'>• Rent or buy third-party data</li>
                                <li className='text-sm'>• Use co-registration lists or publisher inventory</li>
                                <li className='text-sm'>• Push generic "spray-and-pray" email blasts</li>
                                <li className='text-sm'>• Hide our brand behind shadow domains</li>

                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[75%] md:max-w-[75%] mx-auto flex flex-col items-center justify-center p-12">
                    <h1 className="text-center text-2xl mt-2 font-bold text-[#7852A9]">
                        HAVE A COMPLIANCE OR DUE DILIGENCE QUESTION WE HAVEN'T ANSWERED?
                    </h1>
                    <p className="text-center text-lg text-white">
                        Reach out to our Privacy Officer at privacy@taxpand.com or request our full compliance playbook.
                    </p>
                    <h1 className="text-center text-3xl mt-4 font-bold text-[#7852A9]">
                        LET'S BUILD TACTICS THAT  <span className="text-white">SPARK PIPELINE</span>
                    </h1>
                    <p className="text-center text-lg text-white">
                        Tell us your ICP and growth goals – we'll fuse the rest.
                    </p>
                    <div className="gap-4 flex flex-row items-center justify-between mt-6">
                        <button className="brand-button text-white">REQUEST A PROPOSAL</button>
                        <button className="brand-button text-white">BOOK STRATEGY</button>

                    </div>
                </div>
            </section>
        </>
    );
}