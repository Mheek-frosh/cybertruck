import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bolt, X } from 'lucide-react';
import cybertruckFront from '../assets/front.png';
import cybertruckSide from '../assets/rightside.png';
import cybertruckRear from '../assets/back.png';

const CAR_SLIDES = [
    {
        id: 'cybertruck-main',
        title: 'Volvo EX30',
        subtitle: 'Fully electric crossover',
        image: cybertruckSide,
        view: 'R',
    },
    {
        id: 'cybertruck-front',
        title: 'Volvo EX30',
        subtitle: 'Fully electric crossover',
        image: cybertruckFront,
        view: 'F',
    },
    {
        id: 'cybertruck-rear',
        title: 'Volvo EX30',
        subtitle: 'Fully electric crossover',
        image: cybertruckRear,
        view: 'B',
    },
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAssistantOpen, setIsAssistantOpen] = useState(true);

    const currentSlide = CAR_SLIDES[activeIndex];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + CAR_SLIDES.length) % CAR_SLIDES.length);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % CAR_SLIDES.length);
    };

    return (
        <section className="relative min-h-screen w-full bg-[#E0E2E5] text-[#111827] overflow-hidden flex flex-col p-6 font-sans">
            {/* Header */}
            <header className="flex items-center justify-between w-full max-w-[1440px] mx-auto z-50 mb-8">
                {/* Left: Logo */}
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    Q
                </div>

                {/* Center: Rent/Buy/Sell - Absolutely centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#D1D5DB]/40 backdrop-blur-sm rounded-full p-1 flex gap-1 shadow-inner">
                    {['Rent', 'Buy', 'Sell'].map((item, index) => (
                        <button
                            key={item}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${index === 0
                                ? 'bg-[#D1D5DB] text-gray-800 shadow-sm'
                                : 'text-gray-600 hover:bg-white/20'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Right: Location & Settings */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-xs text-gray-600 bg-[#D1D5DB]/40 rounded-full px-4 py-2.5 shadow-sm border border-white/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-transparent border-2 border-gray-500" />
                        <span>Your location: <span className="font-semibold text-gray-800">Los Angeles</span></span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-[#D1D5DB]/40 flex items-center justify-center text-gray-600 hover:bg-white/30 transition-colors">
                        <Bolt size={18} />
                    </button>
                </div>
            </header>

            {/* Main Content Grid */}
            <div className="flex-1 max-w-[1440px] w-full mx-auto grid grid-cols-12 gap-6 relative">

                {/* Left Controls (Floating) */}
                <div className="col-span-1 flex flex-col gap-4 mt-12 z-20">
                    <button className="w-12 h-12 rounded-2xl bg-[#D1D5DB]/40 flex items-center justify-center text-gray-600 hover:bg-white/40 backdrop-blur-sm transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-[#D1D5DB]/40 flex items-center justify-center text-gray-600 hover:bg-white/40 backdrop-blur-sm transition-colors mt-8">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-[#D1D5DB]/40 flex items-center justify-center text-gray-600 hover:bg-white/40 backdrop-blur-sm transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-[#D1D5DB]/40 flex items-center justify-center text-gray-600 hover:bg-white/40 backdrop-blur-sm transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    </button>
                </div>


                {/* Main Hero & Car Display */}
                <div className={`col-span-12 ${isAssistantOpen ? 'lg:col-span-8' : 'lg:col-span-11'} relative flex flex-col transition-all duration-500`}>

                    {/* Title & View Selector */}
                    <div className="absolute top-0 left-16 z-10">
                        <h1 className="text-5xl font-medium text-gray-900 tracking-tight">{currentSlide.title}</h1>
                        <p className="text-gray-500 mt-2 text-lg">{currentSlide.subtitle}</p>

                        <div className="flex items-center gap-3 mt-8">
                            <button
                                onClick={() => setActiveIndex(0)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${activeIndex === 0 ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}`}
                            >L</button> {/* Assuming L is Left/Side for now, mapped to slide 0 */}
                            <button
                                onClick={() => setActiveIndex(0)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${activeIndex === 0 ? 'bg-[#111827] text-white' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}`}
                            >R</button>
                            <button
                                onClick={() => setActiveIndex(1)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${activeIndex === 1 ? 'bg-[#111827] text-white' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}`}
                            >F</button>
                            <button
                                onClick={() => setActiveIndex(2)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${activeIndex === 2 ? 'bg-[#111827] text-white' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}`}
                            >B</button>
                        </div>
                    </div>

                    {/* Car Image Area */}
                    <div className="flex-1 flex items-center justify-center relative mt-20 lg:mt-0 min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentSlide.id}
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-auto max-h-[550px] object-contain drop-shadow-2xl z-0 scale-110"
                            />
                        </AnimatePresence>
                        {/* Shadow */}
                        <div className="absolute bottom-10 w-3/4 h-12 bg-black/20 blur-3xl rounded-full pointer-events-none" />
                    </div>

                    {/* Bottom Info Cards */}
                    <div className="grid grid-cols-2 gap-6 mt-auto">
                        {/* My Location Card */}
                        <div className="bg-[#E8EAED]/80 backdrop-blur-sm rounded-[32px] p-6 relative group border border-white/40 shadow-sm">
                            <div className="absolute top-4 right-4 text-gray-400">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /><polyline points="9 21 3 21 3 15" /><line x1="14" y1="10" x2="3" y2="21" /></svg>
                            </div>
                            <p className="text-gray-500 text-sm font-medium mb-1">My Location</p>
                            <p className="text-gray-400 text-xs mb-8">Vermont Square, Los Angeles</p>
                            {/* Map Placeholder */}
                            <div className="h-24 bg-gray-200/50 rounded-2xl w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-118.2437,34.0522,12,0/300x200?access_token=YOUR_TOKEN')] bg-cover opacity-30 grayscale" />
                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* My Dates Card */}
                        <div className="bg-[#E8EAED]/80 backdrop-blur-sm rounded-[32px] p-6 relative border border-white/40 shadow-sm flex items-center justify-between">
                            <div className="absolute top-4 right-4 text-gray-400">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /><polyline points="9 21 3 21 3 15" /><line x1="14" y1="10" x2="3" y2="21" /></svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-500 text-sm font-medium mb-1">My Dates</p>
                                <p className="text-gray-400 text-xs mb-6">20th of July · 10:25 AM</p>

                                <div className="flex items-center gap-4">
                                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-emerald-500 shadow-sm hover:scale-105 transition-transform"><ChevronLeft size={16} /></button>
                                    <div className="text-center">
                                        <span className="block text-2xl font-bold text-gray-800">20</span>
                                        <span className="text-xs text-gray-500 uppercase font-medium">Jul</span>
                                    </div>
                                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-emerald-500 shadow-sm hover:scale-105 transition-transform"><ChevronRight size={16} /></button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center pl-6 border-l border-gray-300/50">
                                <span className="text-3xl font-light text-gray-800">10:25</span>
                                <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">AM</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Assistant & Payment */}
                <AnimatePresence>
                    {isAssistantOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
                            className="col-span-12 lg:col-span-4 flex flex-col gap-6"
                        >
                            {/* AI Assistant Card */}
                            <div className="bg-[#F3F4F6]/60 backdrop-blur-xl rounded-[32px] p-6 border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-auto relative overflow-hidden">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">AI Assistant</h3>
                                        <p className="text-xs text-gray-400 mt-1">How can I help you?</p>
                                    </div>
                                    <button
                                        onClick={() => setIsAssistantOpen(false)}
                                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors shadow-sm"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>

                                {/* Quick Actions Grid */}
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    <button className="p-3 rounded-[20px] bg-white border border-gray-100 shadow-sm text-left group hover:border-gray-300 transition-colors">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full" />
                                            <span className="text-sm font-semibold text-gray-800">Book a rent</span>
                                        </div>
                                        <div className="text-[10px] text-gray-400 pl-3.5">5 min</div>
                                    </button>
                                    <button className="p-3 rounded-[20px] bg-transparent hover:bg-white/50 border border-transparent hover:border-gray-200 transition-all text-left">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-3 h-3 text-gray-800"><div className="w-1.5 h-1.5 bg-black rounded-full/50 mix-blend-multiply" /></div> {/* Simple icon placeholder */}
                                            <span className="text-sm font-medium text-gray-600">Analysis</span>
                                        </div>
                                        <div className="text-[10px] text-gray-400 pl-5">Damages</div>
                                    </button>
                                    <button className="p-3 rounded-[20px] bg-transparent hover:bg-white/50 border border-transparent hover:border-gray-200 transition-all text-left">
                                        <div className="flex items-center gap-2 mb-1">
                                            {/* Icon */}
                                            <span className="text-sm font-medium text-gray-600">Insurance</span>
                                        </div>
                                        <div className="text-[10px] text-gray-400">Pick a Plan</div>
                                    </button>
                                    <button className="p-3 rounded-[20px] bg-transparent hover:bg-white/50 border border-transparent hover:border-gray-200 transition-all text-left">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-medium text-gray-600">Payment</span>
                                        </div>
                                        <div className="text-[10px] text-gray-400">Calculate</div>
                                    </button>
                                </div>

                                {/* Chat Input Area */}
                                <div className="bg-white/60 rounded-[24px] p-4 backdrop-blur-sm border border-white/40">
                                    <p className="text-sm text-gray-600 mb-4">Arrange to rent this car for <span className="text-emerald-600 font-semibold border-b border-emerald-200">8am</span>|</p>

                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 shadow-sm text-xs">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                                            </button>
                                            <button className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 shadow-sm text-xs">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                                            </button>
                                            <button className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 shadow-sm text-xs">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                                            </button>
                                        </div>
                                        <button className="ml-auto px-5 py-2 rounded-xl bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method Card */}
                            <div className="bg-[#E8EAED]/80 backdrop-blur-sm rounded-[32px] p-6 relative border border-white/40 shadow-sm">
                                <div className="absolute top-4 right-4 text-gray-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /><polyline points="9 21 3 21 3 15" /><line x1="14" y1="10" x2="3" y2="21" /></svg>
                                </div>
                                <p className="text-gray-500 text-sm font-medium mb-4">Payment Method</p>
                                <p className="text-gray-400 text-xs mb-4">Credit Card</p>

                                <div className="flex items-center justify-between bg-white/50 p-3 rounded-2xl border border-white/60">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-6 bg-black rounded flex items-center justify-center text-white text-[8px] font-bold">VISA</div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-semibold text-gray-800">Credit Card</span>
                                            <span className="text-[10px] text-gray-500">3451 **** **** 7896</span>
                                        </div>
                                    </div>
                                    <div className="w-5 h-5 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Right Floating Toggle (Visible when Assistant is closed) */}
            <AnimatePresence>
                {!isAssistantOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4"
                    >
                        <button
                            onClick={() => setIsAssistantOpen(true)}
                            className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-500 transition-colors"
                        >
                            <Bolt size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        </button>
                        <button className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" /></svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Hero;
