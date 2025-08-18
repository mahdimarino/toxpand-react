import React from 'react'
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';

export default function DoNotSellMyInfo() {
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
                            Do Not Sell My Personal Information
                        </h1>
                    </div>
                </div>
            </section>

            <section className="p-6 md:p-12 max-w-6xl mx-auto text-white">
                <p className="mb-6 text-lg font-semibold">
                    Effective as of January 1st, 2022
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">
                    Information We Share with Third Parties
                </h1>
                <p className="mb-6">
                    We may share your personal information with our subsidiaries, affiliates, advertising partners and clients. Our advertising partners and clients use and also share this information to tailor and deliver ads and contents to you on their Services or to help you get the best marketing content. For more details, please see our <a href="/privacy-policy" className="text-[#00ffff] hover:underline">Privacy Policy</a>. Our subsidiaries and affiliates, advertising partners and clients use and may also further share this information for their own purposes. The California Consumer Privacy Act considers the sharing of some of this personal information to be a "sale".
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">
                    Your Opt-Out Rights
                </h1>
                <p className="mb-6">
                    If you do not wish for us or our clients to sell your personal information to others for such purposes, please indicate your preferences through the links provided below. If you access this site from other devices or browsers, or clear your cookies on your devices or browsers, you will need to indicate your preferences again from those devices or browsers. Please note that after making your "Do Not Sell" request, you may still see advertising and we may continue to share personal information with our clients who use such information on our behalf.
                </p>

                <div className="bg-[#1e1e2d] p-6 rounded-lg mb-6">
                    <h2 className="text-xl font-bold text-[#00ffff] mb-4">How to Opt-Out</h2>
                    <p className="mb-4">
                        If you want to opt-out from our/clients sale or disclosure of your personal information to advertising and marketing partners, email your request to:
                    </p>
                    <a href="mailto:dataprotection@toxpand.com" className="text-[#00ffff] hover:underline font-semibold">
                        dataprotection@toxpand.com
                    </a>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">
                    Your Other CA Privacy Rights
                </h1>
                <p className="mb-6">
                    CA residents have certain other rights with respect to their personal information. Should you wish to exercise any of those other rights, please indicate your preferences by emailing us at <a href="mailto:dataprotection@toxpand.com" className="text-[#00ffff] hover:underline">dataprotection@toxpand.com</a>.
                </p>

                <div className="mt-10 p-6 border-t border-[#2F3D86]">
                    <p className="text-sm text-gray-400">
                        Last Updated: January 1, 2022
                    </p>
                </div>
            </section>

            <Footer />
        </>
    )
}