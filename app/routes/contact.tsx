import React, { useState } from 'react';
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    comment: string;
}

export default function Contact() {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        comment: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const response = await fetch('https://analytics.toxpand.com/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Check if response is OK
            if (!response.ok) {
                let errorMessage = `Server returned ${response.status} status`;

                // Try to get error message from response body
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorData.error || errorMessage;
                } catch (parseError) {
                    // If we can't parse JSON, use status text
                    errorMessage = response.statusText || errorMessage;
                }

                throw new Error(errorMessage);
            }

            const data = await response.json();

            if (data.success) {
                setMessage(data.message);
                if (data.redirect_url) {
                    window.location.href = data.redirect_url;
                } else {
                    setFormData({ name: '', email: '', subject: '', comment: '' });
                }
            } else {
                setMessage(data.message || 'There was an error submitting the form. Please try again.');
            }
        } catch (error) {
            console.error('Error details:', error);

            // Handle different error types
            if (error instanceof Error) {
                setMessage(error.message);
            } else if (typeof error === 'string') {
                setMessage(error);
            } else {
                setMessage('There was an unexpected error submitting the form. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />

            <section
                className='p-4 md:p-12'
                style={{
                    backgroundImage: "url('/backgrounds/GALAXY 3.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <section className='p-4 md:p-6 mx-0 md:mx-6' style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}>
                    <div className="w-full max-w-full md:max-w-[75%] mx-auto flex flex-col items-center justify-center my-4 md:my-6">
                        <h1 className="text-center text-3xl md:text-5xl mt-2 font-bold text-[#7852A9]">
                            CONTACT US
                        </h1>
                        <h1 className="text-center text-3xl md:text-5xl mt-2 text-white">
                            SCHEDULE A CALL
                        </h1>
                        <div className='mt-3 px-4 text-center'>
                            <p className="text-xl md:text-3xl mt-4 md:mt-6 text-white">
                                <b>Schedule a 30-minute chat with our Demand Generation Strategists</b>
                            </p>
                            <p className="text-sm md:text-base mt-2 text-white">
                                During our call you can expect:
                            </p>
                            <p className="text-sm md:text-base mt-2 text-white">
                                A high-level overview of our program process, targeting capabilities, and 1st party audience.
                            </p>
                            <p className="text-sm md:text-base mt-2 text-white">
                                Recommendations on how we can help support your demand generation initiatives
                            </p>
                            <p className="text-sm md:text-base mt-2 text-white">
                                Go over our backed guarantee
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-full md:max-w-[75%] mx-auto border p-2 md:p-3 border-[#00ffff]">
                        <div className="bg-white md:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Section 1: Contact Information */}
                                <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-[#00ffff]">
                                    <h2 className="text-xl font-semibold text-purple-700 mb-4">Contact Information</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div id="name">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div id="email">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-[#00ffff]">
                                    <div className="space-y-4">
                                        <div id="subject">
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                                Subject <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                                placeholder="Subject here"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                                                Message
                                            </label>
                                            <textarea
                                                id="comment"
                                                name="comment"
                                                rows={4}
                                                value={formData.comment}
                                                onChange={handleChange}
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                                placeholder="Any special instructions or details about your ..."
                                            />
                                        </div>
                                    </div>

                                    <div className="text-center mt-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition duration-150 inline-flex items-center disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                    </svg>
                                                    Submit The Request
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {message && (
                                        <div className={`mt-4 p-3 rounded text-center ${message.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                            {message}
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </section>

            <Footer />
        </>
    );
}