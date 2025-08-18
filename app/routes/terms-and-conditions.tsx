import React from 'react'
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';

export default function TermsAndConditions() {
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
                            Terms & Conditions
                        </h1>
                    </div>
                </div>
            </section>

            <section className="p-6 md:p-12 max-w-6xl mx-auto text-white">
                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6">AGREEMENT TO TERMS OF USE</h1>
                <p className="mb-6">
                    The toxpand website, situated at www.toxpand.com, and all affiliated sites associated with www.toxpand.com by toxpand, its subsidiaries, and affiliates, including toxpand sites worldwide (collectively, the "Site") are subject to these terms and conditions of use (the "Terms of Use"). IF YOU DO NOT AGREE, DO NOT USE THE SITE. BY USING THE SITE, YOU AGREE TO THESE TERMS OF USE. toxpand reserves the right to alter, amend, add, or take away any part of these Terms of Use at any moment. You must regularly check these Terms of Use for updates. You will be deemed to have accepted and agreed to the changes if you continue to use the Site after they have been posted. toxpand gives you a limited, non-exclusive, personal right to access and use the Site so long as you abide by these Terms of Use.
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">CONTENT</h1>
                <p className="mb-6">
                    All text, graphics, user interfaces, visual interfaces, photos, trademarks, logos, artwork, and computer code (collectively, "Content"), including but not limited to the design, structure, choice, coordination, expression, "look and feel" and arrangement of such Content, are owned, controlled, or licensed by or to toxpand and are protected by trade dress, copyright, patent and trademark laws, and various other intellectual property rights. Except as expressly permitted in these Terms of Use, no part of the Site and no Content may be distributed in any way (including "mirroring") to any other computer, server, Web site, or another medium for publishing or distribution or any commercial enterprise without the express prior written consent of toxpand.
                </p>
                <p className="mb-6">
                    You are allowed to use information about toxpand products and services (like data sheets, knowledge base articles, and similar materials) that has been made available by toxpand for downloading from the Website, provided that you:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li>Do not remove any proprietary notice language throughout all copies of such documents,</li>
                    <li>Use such data only for your personal, non-commercial informational purpose, and do not copy, post, or broadcast it in any way on any networked computer.</li>
                    <li>Not alter any such information;</li>
                    <li>Not provide any further representations or guarantees concerning such materials.</li>
                </ol>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">YOUR USE OF THE SITE</h1>
                <p className="mb-6">
                    You may not access, acquire, copy, or monitor any portion of the Site or any Content through the use of any "deep link," "page-scrape," "robot," "spider," or another automatic device, program, algorithm, or methodology, or through the use of any similar or equivalent manual process, or in any way reproduce or get around the navigational structure or presentation of the Site or any Content, to obtain or attempt to obtain any materials, documents, or information through any means not intended for such purpose. Any such conduct may be prohibited by toxpand.
                </p>
                <p className="mb-6">
                    By hacking, password "mining," or any other illegal methods, you may not attempt to gain unauthorized access to any area or feature of the Site, any other networks or systems connected to the Site or any toxpand server, or any of the services made available on or through the Site.
                </p>
                <p className="mb-6">
                    You are not permitted to test the security or authentication mechanisms on the Site or any network connected to the Site, nor may you probe, scan, or test their vulnerability. You may not use the Site or any service or data made available or offer by or through the Site in any way that reveals any information, such as but not limited to personally identifiable information or information, other than your information. You may not reverse look-up, trace, or seek to trace any information on any additional user of or visitor to the Site, or any additional customer of toxpand, along with any toxpand account not owned by you, to its source. The infrastructure of the Site, the systems or networks of toxpand, or any other systems or networks connected to the Site or toxpand, may not be subjected to any actions that impose an excessively large or unreasonable strain.
                </p>
                <p className="mb-6">
                    You hereby undertake not to use any tool, program, or routine to disrupt or attempt to disrupt the correct operation of the Site, any transaction being carried out on the Site, or the use of the Site by any other person.
                </p>
                <p className="mb-6">
                    You are not permitted to alter identifiers or forge headers in any way to hide the source of any message or transmission you submit to toxpand on or via the website or any service made available on or through the website. You are not permitted to impersonate any other person or entity or to represent yourself as someone else.
                </p>
                <p className="mb-6">
                    You are not permitted to use the Site or other Content for any illegal or prohibited purposes outlined in these Terms of Use or to solicit others to engage in any illegal or prohibited action that violates toxpand's or third parties' rights.
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">PRIVACY</h1>
                <p className="mb-6">
                    The terms of toxpand's Privacy Policy are made a component of these Terms of Use through this reference and apply to the use of this Site. Click here to view toxpand's privacy statement. You also realize and acknowledge that Internet transmissions are not ever entirely private or secure by utilizing the Site. Even if there is a specific warning stating that a particular communication (for instance, personal information) is encrypted, you realize that any message or information you submit to the Site could be accessed or intercepted by others.
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">LINKS TO OTHER SITES AND THE toxpand SITE</h1>
                <p className="mb-6">
                    Links to other independent third-party Web sites ("Linked Sites") may be found on this website. These Linked Sites are only offered to our users as a convenience. The contents of such Linked Sites, along with any information or materials therein, are not under toxpand's control, thus toxpand is not accountable for and does not support the content of such Linked Sites. About your interaction with these Linked Sites, you must exercise independent discretion.
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">DISCLAIMERS</h1>
                <p className="mb-6">
                    toxpand DOES NOT GUARANTEE THAT YOUR USE OF THE SITE WILL RESULT IN ANY PARTICULAR OUTCOME OR THAT THE SITE OR OTHER CONTENT, SERVICE, OR FUNCTION OF THE SITE WILL INDEED BE ERROR-FREE OR UNINTERRUPTED, OR IF ANY DEFECTS WILL BE CORRECTED. THE WEBSITE AND ITS CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" BASIS. THE SITE'S INFORMATION IS ALL SUBJECT TO CHANGE AT ANY TIME WITHOUT PRIOR NOTICE. ANY FILES OR OTHER INFORMATION YOU DOWNLOAD FROM THE SITE MAY CONTAIN VIRUSES, CONTAMINATION, OR DESTRUCTIVE FEATURES, BUT toxpand CAN NOT ENSURE THIS. INCLUDING ANY WARRANTY OF ACCURACY, NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE, toxpand DISCLAIMS ALL WARRANTIES, IMPLIED OR EXPRESS. IN CONNECTION WITH OR IN CONNECTION WITH YOUR ACCESS TO THE SITE AND/OR ANY toxpand SERVICES, toxpand DISCLAIMS ALL SUCH LIABILITY FOR THE ACTS, OMISSIONS, AND CONDUCT OF ANY THIRD PARTIES. YOU AGREE THAT YOUR USE OF THE SITE AS WELL AS ANY LINKED SITES IS AT YOUR SOLE RISK. TO STOP USING THE SITE AND ANY SUCH CONTENT IS YOUR ONLY REMEDY AGAINST toxpand FOR DISSATISFACTION WITH THE SITE OR ANY CONTENT. THIS LIMITATION OF RELIEF IS A CONDITION OF THE PARTIES' AGREEMENT.
                </p>
                <p className="mb-6">
                    The aforementioned disclaimer applies to any damages, liabilities, or injuries brought on by any breach of performance, mistake, omission, interruption, erasure, defect, lag in operation or transmission, communication line failure, theft, computer virus, or destruction of, unauthorized access to, alteration of, or use, whether for tort, negligence, or other reasons. toxpand reserves the right, at any time and without notice, to:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li>Modify, suspend, or terminate operation of or access to the Site, or any portion of the Site, for any reason;</li>
                    <li>Modify or change the Site, or any portion of the Site, and any applicable policies or terms; and</li>
                    <li>Disturb the operation of the Site, or indeed any portion of the Site, as necessary to carry out routine or non-routine maintenance, error correction, or other changes.</li>
                </ol>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">INDEMNITY</h1>
                <p className="mb-6">
                    By using the Site, you agree to hold toxpand, its officers, directors, shareholders, predecessors, successors in interest, employees, agents, subsidiaries, and affiliates harmless from any demands, losses, liabilities, claims, or expenses (including attorneys' fees) made against toxpand by any third party as a result of or arising from or in connection with your use of the Site.
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">VIOLATION OF THESE TERMS OF USE</h1>
                <p className="mb-6">
                    If toxpand determines that disclosing such information is necessary in connection with any inquiry into or grievance regarding your use of the Site, or to identify, contact, or seek legal action against anyone who may be causing harm to or interference with toxpand's rights or property, or the rights or property of visitors to or users of the Site, including The right to disclose any information that toxpand deems necessary to satisfy any relevant law, regulation, legal process, or governmental request is a right that toxpand reserves at all times. When toxpand determines that the law allows or enables such disclosure, including exchanging data with other businesses and organizations for fraud protection purposes, toxpand may also release your information.
                </p>
                <p className="mb-6">
                    You recognize and accept that toxpand may keep a copy of any transmission or communication you make to toxpand through the Site or any service made available on or through the Site and that toxpand may also disclose such data if required to do so by law or if toxpand determines that such preservation or disclosure is necessary to:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li>abide by court orders,</li>
                    <li>uphold the terms of this agreement,</li>
                    <li>address complaints that any such data breaches the rights of third parties, or</li>
                    <li>defend the rights, property, or personal safety of toxpand, its staff, users of the site, and the general public.</li>
                </ol>
                <p className="mb-6">
                    You acknowledge and agree that toxpand may, in its sole discretion and without prior notice, terminate your access to the Site and/or block your future access to the Site if we determine that you have broken any of these Terms of Use or other agreements or guidelines that may be related to your use of the Site. You also acknowledge that any violation of these Terms of Use by you will be illegal, and unfair, and will result in toxpand suffering irreparable harm for which monetary compensation would be inadequate. Accordingly, you agree to allow toxpand to seek any injunctive or equitable relief that toxpand may find necessary or appropriate in such a situation. These remedies are in addition to any other legal or equitable options toxpand may have.
                </p>
                <p className="mb-6">
                    You acknowledge that toxpand may terminate your access to the Site for any reason, including (but not limited to) (1) requests from law enforcement or other government agencies, (2) requests from you (self-initiated account deletions), (3) discontinuance or material modification of the Site or any service provided on or through the Site, or (4) unexpected technical issues or problems. toxpand reserves the right to exercise its sole discretion in determining the grounds for termination.
                </p>
                <p className="mb-6">
                    toxpand will be entitled to recover from you, and you agree to pay, any reasonable lawyers' fees and costs of such action, in addition to any other relief granted to toxpand, if toxpand does take any legal action against you as a result of your breach of these Terms of Use. You acknowledge that if these Terms of Use are violated, toxpand may terminate your access to the Site without notice and liability to you or any third person.
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">GOVERNING LAW; DISPUTE RESOLUTION</h1>
                <p className="mb-6">
                    You accept that the laws of Dubai jurisdiction, without respect to its rules on conflicts of laws, will govern all things relating to your access to or use of the Site, including all disputes. This restriction does not apply to claims made by the specific terms and conditions of purchase for goods and services. Other than for actual out-of-pocket costs, no recovery may be requested or collected; nonetheless, the victorious party shall be entitled to costs and attorneys' fees.
                </p>
                <p className="mb-6">
                    toxpand and you must quickly and in good faith endeavor to resolve any issue or dispute that may arise between you and toxpand about your use of the Site. Either party may request mediation if we are unable to settle any such issue within a reasonable amount of time (not to exceed thirty (30) days). If mediation is unsuccessful, the parties are free to pursue any legal rights or remedies that may be available to them.
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">VOID WHERE PROHIBITED</h1>
                <p className="mb-6">
                    The www.toxpand.com Site is managed and run by toxpand from its Dubai Data Center location; other toxpand sites might be managed and run from different places outside of Dubai. Despite being accessible from anywhere in the globe, not all features, products, or services mentioned, provided, or offered through or on the Site are accessible to all users, in all places, or suitable for use outside of Dubai. In its sole discretion, toxpand reserves the right to restrict who is eligible to use a particular feature, product, or service as well as how much is offered to them. Any offer made on the site for any feature, item, or service is void where prohibited. If you choose to visit the Site from a location outside of Dubai, you do so voluntarily and are solely responsible for abiding by any local laws in that location.
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">MISCELLANEOUS</h1>
                <p className="mb-6">
                    Any product or service offered on the Site, as well as any copy or adaption of such a product or service, may not be used, exported, or reexported in contravention of any relevant laws or regulations, including without limitation the export laws and regulations of Dubai. If a court or other tribunal of competent jurisdiction finds any provision of these Terms of Use to be invalid or unenforceable, that provision shall be limited or eliminated to the absolute minimum amount necessary and shall be replaced with a valid provision that most closely reflects the intent of these Terms of Use, such that these Terms of Use shall continue to be in full force and effect.
                </p>
                <p className="mb-6">
                    Any prior written or oral agreements or understandings between you and toxpand regarding such use are therefore superseded and revoked. These Terms of Use represent the complete agreement between you and toxpand about your use of the Site. toxpand will not accept any counter-offers to these Terms of Use, save as specified in a purchase agreement you engage into with toxpand, and all such offers are hereby expressly refused. The purpose of these Terms of Use is not to grant any third parties any rights or remedies. toxpand may refer to or cross-refer to toxpand products, programs, and services that have not yet been made public in your country because it gives access to toxpand international data. Any mention of such items, programs, or services does not indicate that toxpand in your nation intends to announce them.
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-[#7852A9] mb-6 mt-10">FEEDBACK AND INFORMATION</h1>
                <p className="mb-6">
                    Any comments you make on this website will be regarded as non-confidential. Such information shall be available for unrestricted use by toxpand. Please contact info@toxpand.com if you have any questions. The information contained in this website is subject to change without notice
                </p>
            </section>

            <Footer />
        </>
    )
}