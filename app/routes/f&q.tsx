import React, { useState } from 'react';
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';


const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
       
        
            <div className="mb-4 overflow-hidden rounded-lg">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-center justify-between bg-white p-4 text-left text-black hover:bg-gray-100 transition-colors duration-200"
                >
                    <p className="text-sm md:text-base font-medium">{question}</p>
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
                        <p className="text-sm md:text-base">{answer}</p>
                    </div>
                )}
            </div>
       
    );
};

export default function Fandq() {
    const faqs = [
        {
            category: "Campaign Execution",
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
            category: "Data & Targeting",
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
            category: "DemandFusion™ AI",
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
            category: "Lead Quality & Delivery",
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
            category: "Reporting & Optimization",
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
            category: "Support & Collaboration",
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
            <Navbar />
            {/* FAQ Header Section */}
            <section className='p-6 md:p-12 text-white bg-black'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-3xl md:text-5xl text-[#7852A9] font-bold'>FREQUENTLY ASKED QUESTIONS</h1>
                    <h2 className='text-lg md:text-xl mt-2'>Real Answers. No Black Boxes.</h2>
                    <p className='my-4 md:my-6 text-sm md:text-base'>
                        At ToXPAND, we believe transparency builds trust. Every campaign
                        is designed, launched, and optimized 100% in-house – never outsourced, never offloaded.
                        From data capture to signal activation, what you see is what we deliver. This FAQ page
                        is designed to give you clear, candid answers to how we operate, how we protect privacy,
                        and how we fuel your pipeline.
                    </p>
                </div>
            </section>

            {/* FAQ Content Section */}
            <section className='p-4 md:p-8 bg-black'>
                <div className='max-w-6xl mx-auto border rounded-3xl border-[#00ffff] overflow-hidden'>
                    {faqs.map((section, index) => (
                        <div key={index} className='p-4 md:p-8 border-b border-[#00ffff] last:border-b-0'>
                            <h2 className='text-lg md:text-xl font-bold text-white mb-4'><b>{section.category}</b></h2>
                            <div className='space-y-4'>
                                {section.questions.map((item, qIndex) => (
                                    <FAQItem key={qIndex} question={item.question} answer={item.answer} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Under the Hood Section */}
            <section
                className='p-6 md:p-12 bg-cover bg-center'
                style={{
                    backgroundImage: "url('/backgrounds/GALAXY 3.png')",
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl md:text-4xl font-bold text-[#7852A9]">
                        UNDER THE HOOD:
                    </h1>
                    <h1 className="text-2xl md:text-4xl mt-2 text-white">
                        HOW WE OPERATE (AND PROVE IT)
                    </h1>
                    <p className="text-sm md:text-base mt-4 text-white">
                        We understand that some partners want to dive deeper — into consent models, legal bases, capture methods, and data suppression.
                    </p>
                    <p className="text-sm md:text-base mt-2 text-white">
                        This section outlines how we run things behind the curtain — so you can trust we're not just compliant, but conscientious.
                    </p>
                </div>

                <div className='max-w-6xl mx-auto mt-8 border rounded-2xl border-[#00ffff] overflow-hidden'>
                    <div className='bg-white rounded-2xl p-4 md:p-8'>
                        {/* Compliance Sections */}
                        {[
                            {
                                title: "NATURE OF BUSINESS",
                                items: [
                                    "ToXPAND is an AI-powered pipeline generation platform, not a publisher, aggregator, or list vendor.",
                                    "We operate on performance-based models — clients only pay if satisfied.",
                                    "Our programs use first-party opt-in data and emphasize email as the primary channel (telemarketing available if requested).",
                                    "All deployments originate from our in-house teams."
                                ]
                            },
                            {
                                title: "CAMPAIGN FULFILLMENT TACTICS",
                                items: [
                                    "Standard guaranteed lead programs are fulfilled via 1:1 targeted email sends.",
                                    "Telemarketing is available (with native English, German, French, and Spanish speakers), but not required for program success.",
                                    "We do not use newsletters, mass e-blasts, or publisher networks."
                                ]
                            },
                            {
                                title: "LEGAL BASIS FOR PROCESSING DATA",
                                items: [
                                    "We rely on explicit consent and legitimate interest under GDPR, CCPA, and CASL.",
                                    "Consent is recorded on all landing pages and telemarketing interactions and stored securely.",
                                    "Legitimate Interest Assessments (LIAs) are conducted for every client campaign, and outcomes are respected."
                                ]
                            },
                            {
                                title: "CAPTURE POINTS & CONSENT",
                                items: [
                                    "Data is collected via:",
                                    "• Landing pages",
                                    "• Email forms",
                                    "• Telemarketing calls",
                                    "Consent is logged per contact, with evidence stored and updated.",
                                    "Our capture pages clearly display privacy policies, and our callers provide them post-confirmation."
                                ]
                            },
                            {
                                title: "PRIVACY, SUPPRESSION & OPT-OUT MANAGEMENT",
                                items: [
                                    "We clean and update suppression files daily.",
                                    "All marketing emails include unsubscribe links.",
                                    "Requests to opt out, suppress, or amend contact details are processed within 24 hours.",
                                    "Contacts can update preferences via unsubscribe pages or by emailing us directly at privacy@toxpand.com."
                                ]
                            },
                            {
                                title: "TELEMARKETING SPECIFICS",
                                items: [
                                    "Yes, we offer telemarketing — but always clean numbers daily against TPS and CTPS.",
                                    "No outreach occurs to numbers registered for more than 28 days.",
                                    "Consent is recorded via call recordings and LIA documentation is available upon request."
                                ]
                            },
                            {
                                title: "DATA INTEGRITY & TRAINING",
                                items: [
                                    "Our data is validated daily via tech tools and human review.",
                                    "Staff are trained quarterly on privacy laws and CTPS compliance via certified trainers (e.g. Laurel Institute).",
                                    "All staff are equipped to answer how data was sourced and when consent was captured."
                                ]
                            },
                            {
                                title: "WE DO NOT...",
                                items: [
                                    "Rent or buy third-party data",
                                    "Use co-registration lists or publisher inventory",
                                    "Push generic 'spray-and-pray' email blasts",
                                    "Hide our brand behind shadow domains"
                                ]
                            }
                        ].map((section, index) => (
                            <div key={index} className='py-4 md:py-6 border-b border-[#00ffff] last:border-b-0'>
                                <h4 className='text-lg md:text-xl text-[#7852A9] font-bold'>{section.title}</h4>
                                <ul className='mt-2 md:mt-4 space-y-2'>
                                    {section.items.map((item, i) => (
                                        <li key={i} className='text-xs text-black md:text-sm'>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto text-center mt-8 md:mt-12">
                    <h1 className="text-xl md:text-2xl font-bold text-[#7852A9]">
                        HAVE A COMPLIANCE OR DUE DILIGENCE QUESTION WE HAVEN'T ANSWERED?
                    </h1>
                    <p className="text-sm md:text-base text-white mt-2">
                        Reach out to our Privacy Officer at privacy@toxpand.com or request our full compliance playbook.
                    </p>
                    <h1 className="text-xl md:text-3xl mt-4 md:mt-6 font-bold text-[#7852A9]">
                        LET'S BUILD TACTICS THAT <span className="text-white">SPARK PIPELINE</span>
                    </h1>
                    <p className="text-sm md:text-base text-white mt-2">
                        Tell us your ICP and growth goals – we'll fuse the rest.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
                        <a href='/RequestProposal' className="brand-button text-white">
                            REQUEST A PROPOSAL
                        </a>
                        <a href='/Contact' className="brand-button text-white">
                            BOOK STRATEGY
                        </a>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}