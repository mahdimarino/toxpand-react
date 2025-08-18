import React, { useState, useRef } from 'react';
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';

// MultiSelect Component
type MultiSelectProps = {
    name: string;
    options: { value: string; label: string }[];
    selected: string[];
    onChange: (name: string, values: string[]) => void;
    required?: boolean;
};



export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        campaign_type: [] as string[],
        content_type: [] as string[],
        start_date: '',
        due_date: '',
        lead_volumes: '',
        outreach_method: [] as string[],
        geo: [] as string[],
        industries: '',
        job_titles: '',
        job_levels: [] as string[],
        company_size: [] as string[],
        company_revenue: [] as string[],
        campaign_tactic: [] as string[],
        client_type: 'New',
        attachment: null as File | null,
        notes: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState('');

    // Options for all multi-select fields
    const campaignTypeOptions = [
        { value: 'HQL', label: 'HQL' },
        { value: 'MQL', label: 'MQL' },
        { value: 'SQL', label: 'SQL' },
        { value: 'Full Funnel', label: 'Full Funnel' }
    ];

    const contentTypeOptions = [
        { value: 'Webinar', label: 'Webinar' },
        { value: 'Whitepaper', label: 'Whitepaper' },
        { value: 'eBook', label: 'eBook' },
        { value: 'Case Study', label: 'Case Study' },
        { value: 'Infographic', label: 'Infographic' }
    ];

    const outreachMethodOptions = [
        { value: 'Email Only', label: 'Email Only' },
        { value: 'Email + TM', label: 'Email + TM' }
    ];

    const geoOptions = [
        { value: 'US', label: 'United States' },
        { value: 'UK', label: 'United Kingdom' },
        { value: 'Canada', label: 'Canada' },
        { value: 'APAC', label: 'APAC' },
        { value: 'Australia', label: 'Australia' },
        { value: 'Germany', label: 'Germany' },
        { value: 'France', label: 'France' },
        { value: 'Global', label: 'Global' }
    ];

    const jobLevelsOptions = [
        { value: 'C-level', label: 'C-level' },
        { value: 'Manager', label: 'Manager' },
        { value: 'Director', label: 'Director' },
        { value: 'VP', label: 'VP' }
    ];

    const companySizeOptions = [
        { value: '1-10', label: '1-10' },
        { value: '11-50', label: '11-50' },
        { value: '51-200', label: '51-200' },
        { value: '201-500', label: '201-500' },
        { value: '501-1,000', label: '501-1,000' },
        { value: '1,001-5,000', label: '1,001-5,000' },
        { value: '5,001-10,000', label: '5,001-10,000' },
        { value: '10,001+', label: '10,001+' }
    ];

    const companyRevenueOptions = [
        { value: '>$1 Billion', label: '>$1 Billion' },
        { value: '$500M - $1B', label: '$500M - $1B' },
        { value: '$100M - $499M', label: '$100M - $499M' },
        { value: '$50M - $99M', label: '$50M - $99M' },
        { value: '$10M - $49M', label: '$10M - $49M' },
        { value: '$1M - $9M', label: '$1M - $9M' }
    ];

    const campaignTacticOptions = [
        { value: 'ABM', label: 'ABM' },
        { value: 'Look-A-Like', label: 'Look-A-Like' },
        { value: 'Suppression needed', label: 'Suppression needed' },
        { value: 'Filter Only', label: 'Filter Only' }
    ];

    const clientTypeOptions = [
        { value: 'New', label: 'New' },
        { value: 'Existing', label: 'Existing' }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleMultiSelectChange = (name: string, values: string[]) => {
        setFormData(prev => ({ ...prev, [name]: values }));
        // Clear error when user selects
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFormData(prev => ({ ...prev, attachment: file }));
            setFileName(file.name);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate required fields
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Full Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email Address is required';
        if (formData.campaign_type.length === 0) newErrors.campaign_type = 'Campaign Type is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form is valid, submit data
            console.log('Form submitted:', formData);
            // Here you would typically send the data to your API
        } else {
            // Scroll to first error
            const firstError = Object.keys(newErrors)[0];
            document.getElementById(firstError)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
                                    During our call you can expect:   </p>
                                <p className="text-sm md:text-base mt-2 text-white">
                                A high-level overview of our program process, targeting capabilities, and 1st party audience.
                                </p>
                            <p className="text-sm md:text-base mt-2 text-white">
                                 Recommendations on how we can help support your demand generation initiatives
                            </p>
                            <p className="text-sm md:text-base mt-2 text-white">
                                Go over our backed guarantee
                            </p>
                                {/* <p className="text-xl md:text-3xl mt-4 md:mt-6 text-white">
                                    <b>NO GUESSWORK. <span className='text-[#00ffff]'>JUST CLARITY.</span></b>
                                </p> */}
                            </div>
                        </div>


                    <div className="w-full max-w-full md:max-w-[75%] mx-auto border p-2 md:p-3 border-[#00ffff]">
                        <div className="bg-white  md:p-12">
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
                                           
                                            className={`w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border ${errors.name ? 'border-red-500' : ''
                                                }`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
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
                                        
                                            className={`w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border ${errors.email ? 'border-red-500' : ''
                                                }`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>

                                    {/* <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                           
                                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                            placeholder="(123) 456-7890"
                                        />
                                    </div> */}
                                   

                                    
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

                                                className={`w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border ${errors.name ? 'border-red-500' : ''
                                                    }`}
                                                placeholder="Subject here"
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                                        </div>

                                  
                                    <div>
                                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                                            Additional Notes
                                        </label>
                                        <textarea
                                            id="notes"
                                            name="notes"
                                            rows={4}
                                            value={formData.notes}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                            placeholder="Any special instructions or details about your campaign..."
                                        />
                                    </div>
                                </div>

                                <div className="text-center mt-6">
                                    <button
                                        type="submit"
                                        className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition duration-150 inline-flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Submit The Request
                                    </button>
                                </div>
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