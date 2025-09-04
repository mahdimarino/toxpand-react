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

const MultiSelect = ({ name, options, selected, onChange, required = false }: MultiSelectProps) => {
    const handleChange = (value: string, isChecked: boolean) => {
        const newSelected = isChecked
            ? [...selected, value]
            : selected.filter(v => v !== value);
        onChange(name, newSelected);
    };

    return (
        <div className={`border border-gray-300 rounded-md p-2 max-h-40 overflow-y-auto ${required && selected.length === 0 ? 'border-red-500' : ''}`}>
            {options.map(option => (
                <div key={option.value} className="flex items-center mb-1">
                    <input
                        type="checkbox"
                        id={`${name}-${option.value}`}
                        checked={selected.includes(option.value)}
                        onChange={(e) => handleChange(option.value, e.target.checked)}
                        className="mr-2 rounded text-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor={`${name}-${option.value}`} className="text-sm text-gray-700">
                        {option.label}
                    </label>
                </div>
            ))}
            {required && selected.length === 0 && (
                <p className="text-red-500 text-xs mt-1">Please select at least one option</p>
            )}
        </div>
    );
};

export default function CampaignBookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate required fields
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Full Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email Address is required';
        if (formData.campaign_type.length === 0) newErrors.campaign_type = 'Campaign Type is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                // Form is valid, submit data to API
                const response = await fetch('https://analytics.toxpand.com/api/external-campaign-booking', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add any additional headers required by the API
                        // 'Authorization': 'Bearer your-token-here' // if authentication is needed
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log('API Response:', result);

                // Handle successful submission (e.g., show success message, reset form, etc.)
                 alert('Form submitted successfully!');

            } catch (error) {
                console.error('Error submitting form:', error);
                // Handle error (e.g., show error message to user)
                // alert('There was an error submitting the form. Please try again.');
            }
        } else {
            // Scroll to first error
            const firstError = Object.keys(newErrors)[0];
            document.getElementById(firstError)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
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
                        {/* <h1 className="text-center text-3xl md:text-5xl mt-2 font-bold text-[#7852A9]">
                            CONTACT US
                        </h1> */}
                        <h1 className="text-center text-3xl md:text-5xl mt-2 text-white">
                            Book Your <span className='text-[#7852A9]'>Campaign</span>
                        </h1>
                        <div className='mt-3 md:px-4 text-center'>
                            <p className="text-xl md:text-2xl mt-4 md:mt-6 text-white">
                                <b>Fill out the form below to get started with your customized marketing campaign</b>
                            </p>
                           
                           
                        </div>
                    </div>


                    <div className="w-full max-w-full md:max-w-[75%] mx-auto border p-2 md:p-3 border-[#00ffff]">
                        <div className=" md:p-12">
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
                                            onChange={handleInputChange}
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
                                            onChange={handleInputChange}
                                            className={`w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border ${errors.email ? 'border-red-500' : ''
                                                }`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                            placeholder="(123) 456-7890"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                            placeholder="Company Name"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Campaign Details */}
                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-[#00ffff]">
                                <h2 className="text-xl font-semibold text-purple-700 mb-4">Campaign Details</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div id="campaign_type">
                                        <label htmlFor="campaign_type" className="block text-sm font-medium text-gray-700 mb-1">
                                            Campaign Type <span className="text-red-500">*</span>
                                        </label>
                                        <MultiSelect
                                            name="campaign_type"
                                            options={campaignTypeOptions}
                                            selected={formData.campaign_type}
                                            onChange={handleMultiSelectChange}
                                            required
                                        />
                                        {errors.campaign_type && <p className="text-red-500 text-xs mt-1">{errors.campaign_type}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="content_type" className="block text-sm font-medium text-gray-700 mb-1">
                                            Content Type
                                        </label>
                                        <MultiSelect
                                            name="content_type"
                                            options={contentTypeOptions}
                                            selected={formData.content_type}
                                            onChange={handleMultiSelectChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="start_date" className="block text-sm font-medium text-gray-700 mb-1">
                                            Start Date
                                        </label>
                                        <input
                                            type="date"
                                            id="start_date"
                                            name="start_date"
                                            value={formData.start_date}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="due_date" className="block text-sm font-medium text-gray-700 mb-1">
                                            Due Date
                                        </label>
                                        <input
                                            type="date"
                                            id="due_date"
                                            name="due_date"
                                            value={formData.due_date}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="lead_volumes" className="block text-sm font-medium text-gray-700 mb-1">
                                            Expected Lead Volume
                                        </label>
                                        <input
                                            type="number"
                                            id="lead_volumes"
                                            name="lead_volumes"
                                            value={formData.lead_volumes}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                            placeholder="e.g., 500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="outreach_method" className="block text-sm font-medium text-gray-700 mb-1">
                                            Outreach Method
                                        </label>
                                        <MultiSelect
                                            name="outreach_method"
                                            options={outreachMethodOptions}
                                            selected={formData.outreach_method}
                                            onChange={handleMultiSelectChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Target Audience */}
                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-[#00ffff]">
                                <h2 className="text-xl font-semibold text-purple-700 mb-4">Target Audience</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="geo" className="block text-sm font-medium text-gray-700 mb-1">
                                            Geographies
                                        </label>
                                        <MultiSelect
                                            name="geo"
                                            options={geoOptions}
                                            selected={formData.geo}
                                            onChange={handleMultiSelectChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="industries" className="block text-sm font-medium text-gray-700 mb-1">
                                            Industries
                                        </label>
                                        <input
                                            type="text"
                                            id="industries"
                                            name="industries"
                                            value={formData.industries}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                            placeholder="e.g., Technology, Healthcare, Finance"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="job_titles" className="block text-sm font-medium text-gray-700 mb-1">
                                            Job Titles
                                        </label>
                                        <input
                                            type="text"
                                            id="job_titles"
                                            name="job_titles"
                                            value={formData.job_titles}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                            placeholder="e.g., CEO, Marketing Director, IT Manager"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="job_levels" className="block text-sm font-medium text-gray-700 mb-1">
                                            Job Levels
                                        </label>
                                        <MultiSelect
                                            name="job_levels"
                                            options={jobLevelsOptions}
                                            selected={formData.job_levels}
                                            onChange={handleMultiSelectChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company_size" className="block text-sm font-medium text-gray-700 mb-1">
                                            Company Size
                                        </label>
                                        <MultiSelect
                                            name="company_size"
                                            options={companySizeOptions}
                                            selected={formData.company_size}
                                            onChange={handleMultiSelectChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company_revenue" className="block text-sm font-medium text-gray-700 mb-1">
                                            Company Revenue
                                        </label>
                                        <MultiSelect
                                            name="company_revenue"
                                            options={companyRevenueOptions}
                                            selected={formData.company_revenue}
                                            onChange={handleMultiSelectChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="campaign_tactic" className="block text-sm font-medium text-gray-700 mb-1">
                                            Campaign Tactic
                                        </label>
                                        <MultiSelect
                                            name="campaign_tactic"
                                            options={campaignTacticOptions}
                                            selected={formData.campaign_tactic}
                                            onChange={handleMultiSelectChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Additional Information */}
                            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-[#00ffff]">
                                <h2 className="text-xl font-semibold text-purple-700 mb-4">Additional Information</h2>

                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="client_type" className="block text-sm font-medium text-gray-700 mb-1">
                                            Client Type
                                        </label>
                                        <select
                                            id="client_type"
                                            name="client_type"
                                            value={formData.client_type}
                                            onChange={handleSelectChange}
                                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                                        >
                                            {clientTypeOptions.map(option => (
                                                <option key={option.value} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">
                                            Attachment (Optional)
                                        </label>
                                        <div
                                            className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-colors"
                                            onClick={triggerFileInput}
                                            onDragOver={(e) => e.preventDefault()}
                                            onDrop={(e) => {
                                                e.preventDefault();
                                                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                                                    const file = e.dataTransfer.files[0];
                                                    setFormData(prev => ({ ...prev, attachment: file }));
                                                    setFileName(file.name);
                                                }
                                            }}
                                        >
                                            <input
                                                type="file"
                                                id="attachment"
                                                name="attachment"
                                                ref={fileInputRef}
                                                className="hidden"
                                                onChange={handleFileChange}
                                            />
                                            <div className="text-purple-500 mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-600">
                                                Click to upload files or drag and drop<br />
                                                <span className="text-xs">PDF, DOC, PPT, XLS (Max 2MB)</span>
                                            </p>
                                            {fileName && (
                                                <p className="mt-2 text-sm font-medium text-purple-700">{fileName}</p>
                                            )}
                                        </div>
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
                                        Submit Campaign Request
                                    </button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>

                </section>
            </section>

            <Footer />
        </div>
    );
}