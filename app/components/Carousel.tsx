import React, { useState } from 'react';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Sample card data
    const cards = [
        { id: 1, star: 5, name: 'John Doe', text: 'We used ToXPAND for the first time to pilot a content syndication campaign and they delivered! We are very happy with the communication, delivery, quality and the price and look forward to working with them again' },
        { id: 2, star: 3, name: 'Jane Smith', text: 'Great service and excellent results. Highly recommended for anyone looking for quality leads.' },
        { id: 3, star: 5, name: 'Mike Johnson', text: 'The team exceeded our expectations with their professionalism and attention to detail.' },
        { id: 4, star: 4.5, name: 'Sarah Williams', text: 'Consistently good performance and reliable delivery of high-quality leads.' },
        { id: 5, star: 4.5, name: 'David Brown', text: 'Our conversion rates improved significantly after using their services.' },
        { id: 6, star: 4.5, name: 'Emily Davis', text: 'Excellent customer support and quick response times to all our queries.' },
        { id: 7, star: 4.5, name: 'Robert Wilson', text: 'A trusted partner for all our demand generation needs.' },
    ];

    const nextSlide = () => {
        if (currentIndex < cards.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Star rating component
    const StarRating = ({ rating }:{rating:any}) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        return (
            
            <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => {
                    if (i < fullStars) {
                        return (
                            <svg key={i} className="w-5 h-5 text-[#6A1B9A]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        );
                    } else if (hasHalfStar && i === fullStars) {
                        return (
                            <div key={i} className="relative w-5 h-5">
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg className="absolute top-0 left-0 w-5 h-5 text-[#6A1B9A]" fill="currentColor" viewBox="0 0 20 20" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                        );
                    } else {
                        return (
                            <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        );
                    }
                })}
            </div>
        );
    };

    return (
        <section className=' p-8 text-white'>
        <div className="relative max-w-7xl mx-auto p-4 text-white">
            <h1 className="text-center text-3xl mt-2 font-bold mb-8">
                TESTIMONIALS
            </h1>

            <div className="relative overflow-hidden">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`absolute left-[-5px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Cards Container */}
                <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                    {cards.map((card) => (
                        <div key={card.id} className="flex-shrink-0 w-1/3 p-4 text-center">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-700 hover:shadow-lg transition h-full">
                                <div className="p-6 flex flex-col h-full">
                                    <StarRating rating={card.star} />
                                    <div className='border-t-[3px] border-[#6A1B9A] pt-4 flex-grow text-white'>
                                        <p className=" text-sm mb-4 italic text-black">"{card.text}"</p>
                                        <h3 className="text-xl font-semibold text-[#6A1B9A] mt-auto">{card.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    disabled={currentIndex >= cards.length - 3}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition ${currentIndex >= cards.length - 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: cards.length - 2 }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#00ffff]' : 'bg-white'}`}
                    />
                ))}
            </div>
        </div>
    </section>
    );
}