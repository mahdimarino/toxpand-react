import React from 'react';
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';

export default function ThankYou() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col">
                <section style={{
                    backgroundImage: "url('/backgrounds/GALAXY 3.png')",
                    backgroundSize: 'cover',
                }} className=' py-8 md:py-12 text-white px-4 md:px-12 '>
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    }} className="max-w-8xl mx-auto border border-[#00ffff] rounded-xl p-6 md:p-12">
                        <div className="flex justify-center">
                            <div className="w-full max-w-2xl text-center">

                                {/* Success Icon */}
                                <div className="mb-8">
                                    <svg className="mx-auto" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" fill="#4BB543"></circle>
                                        <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>

                                {/* Main Heading */}
                                <h1 className="mb-4 text-5xl font-bold text-[#7852A9]">Thank You!</h1>
                                <h3 className="mb-8 text-2xl font-semibold text-[white]">Your Campaign Request Has Been Received</h3>

                                {/* Description */}
                                <p className="mb-8 text-lg text-white leading-relaxed">
                                    We've received your campaign details and our team will review your request shortly. You'll receive a confirmation email with next steps.
                                </p>

                                {/* Info Card */}
                                <div className="mb-8  rounded-lg shadow-sm p-6 border-0 text-center">
                                    <h5 className="text-xl font-semibold mb-4 ">What Happens Next?</h5>
                                    <p className="mb-2">
                                        Our team will review your request within 24 hours
                                    </p>
                                    <p className="mb-2">
                                        We'll contact you to discuss your campaign details
                                    </p>
                                    <p className="mb-2">
                                        You'll receive a customized proposal
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row justify-center gap-4">

                                    <div className="gap-4 flex flex-row items-center justify-between mt-6">
                                        <a href='/' className="brand-button text-white">Back Home</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}