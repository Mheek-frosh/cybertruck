import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bolt, X } from 'lucide-react';
import cybertruckFront from '../assets/front.png';
import cybertruckSide from '../assets/rightside.png';
import cybertruckRear from '../assets/back.png';
import tesla1 from '../assets/tesla1.png';
import tesla2 from '../assets/telsa2.png';
import tesla3 from '../assets/telsa3.png';
import tesla4 from '../assets/front.png'; // Using Cybertruck front as the 4th car

const CAR_SLIDES = [
    {
        id: 'cybertruck-side',
        title: 'Cybertruck 2025',
        subtitle: 'Fully electric crossover',
        image: cybertruckSide,
        view: 'R',
    },
    {
        id: 'cybertruck-front',
        title: 'Cybertruck 2025',
        subtitle: 'Fully electric crossover',
        image: cybertruckFront,
        view: 'F',
    },
    {
        id: 'cybertruck-rear',
        title: 'Cybertruck 2025',
        subtitle: 'Fully electric crossover',
        image: cybertruckRear,
        view: 'B',
    },
];

const SELECTOR_CARS = [
    { id: 1, name: 'Model S', image: tesla1 },
    { id: 2, name: 'Model 3', image: tesla2 },
    { id: 3, name: 'Model X', image: tesla3 },
    { id: 4, name: 'Cybertruck', image: tesla4 },
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAssistantOpen, setIsAssistantOpen] = useState(true);
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('2024-07-20');
    const [selectedTime, setSelectedTime] = useState('10:25');
    const [aiMessage, setAiMessage] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);

    const handleLocationClick = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=Vermont+Square,+Los+Angeles', '_blank');
    };

    const handleSend = () => {
        if (!aiMessage.trim()) return;
        setAiMessage('');
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    const currentSlide = CAR_SLIDES[activeIndex];

    return (
        <section className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden flex flex-col p-6 pt-24 font-inter">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            {/* Left Fixed Icons */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
                <button className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/10 shadow-sm">
                    <ChevronLeft size={20} />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/10 shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </button>
                <button
                    onClick={() => {
                        setIsDashboardOpen(!isDashboardOpen);
                        if (!isDashboardOpen) setIsAssistantOpen(false);
                    }}
                    className={`w-12 h-12 rounded-2xl backdrop-blur-md flex items-center justify-center transition-all border shadow-sm ${isDashboardOpen ? 'bg-[#3E6AE1] text-white border-[#3E6AE1]' : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10 border-white/10'}`}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/10 shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                </button>
            </div>

            {/* Right Fixed Icons (Toggles) */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
                {!isAssistantOpen && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={() => setIsAssistantOpen(true)}
                        className="w-12 h-12 rounded-2xl bg-[#3E6AE1] shadow-lg flex items-center justify-center text-white hover:bg-[#3457B1] transition-colors"
                    >
                        <Bolt size={20} />
                    </motion.button>
                )}
                <button className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white/30 hover:text-white transition-all border border-white/10 shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white/30 hover:text-white transition-all border border-white/10 shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" /></svg>
                </button>
            </div>

            {/* Main Content Grid */}
            <div className="flex-1 max-w-[1440px] w-full mx-auto grid grid-cols-12 gap-6 relative px-12">

                {/* Dashboard Popup Section - Left Side */}
                <AnimatePresence>
                    {isDashboardOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
                            className="absolute left-12 top-0 w-[900px] z-50 pointer-events-auto"
                        >
                            <div className="bg-black/40 backdrop-blur-2xl rounded-[32px] p-8 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] h-auto relative overflow-hidden flex flex-col">
                                <div className="flex items-center justify-between mb-10">
                                    <div>
                                        <h3 className="font-orbitron font-bold text-white tracking-[0.3em] text-sm uppercase">Vehicle Selection</h3>
                                        <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest font-inter">Choose your configuration</p>
                                    </div>
                                    <button
                                        onClick={() => setIsDashboardOpen(false)}
                                        className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all border border-white/10 shadow-sm"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                <div className="grid grid-cols-4 gap-6">
                                    {SELECTOR_CARS.map((car) => (
                                        <motion.div
                                            key={car.id}
                                            whileHover={{ y: -5 }}
                                            className="group relative bg-white/5 hover:bg-white/10 rounded-[24px] p-6 border border-white/5 hover:border-[#3E6AE1]/30 transition-all cursor-pointer flex flex-col items-center"
                                        >
                                            <div className="w-full h-24 relative flex items-center justify-center mb-4">
                                                <img
                                                    src={car.image}
                                                    alt={car.name}
                                                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(62,106,225,0.2)] group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <span className="block text-[10px] font-orbitron font-bold text-white tracking-widest uppercase mb-1">{car.name}</span>
                                                <div className="h-1 w-0 bg-[#3E6AE1] mx-auto group-hover:w-full transition-all duration-300" />
                                            </div>

                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 bg-[#3E6AE1]/5 opacity-0 group-hover:opacity-100 rounded-[24px] transition-opacity pointer-events-none" />
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-10 flex justify-center">
                                    <div className="w-8 h-0.5 bg-[#3E6AE1] rounded-full mx-1" />
                                    <div className="w-2 h-0.5 bg-white/20 rounded-full mx-1" />
                                    <div className="w-2 h-0.5 bg-white/20 rounded-full mx-1" />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Image & Main Area - Always col-span-12 to stay centered */}
                <div className="col-span-12 relative flex flex-col transition-all duration-500">

                    {/* Title & View Selector */}
                    <div className="absolute top-0 left-0 z-10">
                        <h1 className="text-5xl font-orbitron font-extrabold text-white tracking-widest glow-text uppercase">{currentSlide.title}</h1>
                        <p className="text-gray-400 mt-2 text-lg uppercase tracking-[0.3em] font-light">{currentSlide.subtitle}</p>

                        <div className="flex items-center gap-3 mt-8">
                            <button
                                onClick={() => setActiveIndex(0)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors border ${activeIndex === 0 ? 'bg-white text-black border-white' : 'bg-transparent text-white/50 border-white/20 hover:border-white/40 hover:text-white'}`}
                            >R</button>
                            <button
                                onClick={() => setActiveIndex(1)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors border ${activeIndex === 1 ? 'bg-white text-black border-white' : 'bg-transparent text-white/50 border-white/20 hover:border-white/40 hover:text-white'}`}
                            >F</button>
                            <button
                                onClick={() => setActiveIndex(2)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors border ${activeIndex === 2 ? 'bg-white text-black border-white' : 'bg-transparent text-white/50 border-white/20 hover:border-white/40 hover:text-white'}`}
                            >B</button>
                        </div>
                    </div>

                    {/* Car Image Area */}
                    <div className="flex-1 flex items-center justify-center relative mt-20 lg:mt-0 min-h-[550px]">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentSlide.id}
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1.35 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-full h-auto max-h-[650px] object-contain drop-shadow-[0_20px_40px_rgba(255,255,255,0.05)] z-0"
                            />
                        </AnimatePresence>
                        {/* Shadow */}
                        <div className="absolute bottom-10 w-3/4 h-12 bg-white/5 blur-3xl rounded-full pointer-events-none" />
                    </div>

                    {/* Bottom Info Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-auto mb-4 max-w-full lg:max-w-4xl mx-auto w-full">
                        {/* My Location Card */}
                        <div
                            onClick={handleLocationClick}
                            className="bg-white/5 backdrop-blur-xl rounded-[32px] p-6 relative group border border-white/10 shadow-2xl cursor-pointer hover:bg-white/10 transition-all"
                        >
                            <div className="absolute top-4 right-4 text-white/20 group-hover:text-[#3E6AE1] transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /><polyline points="9 21 3 21 3 15" /><line x1="14" y1="10" x2="3" y2="21" /></svg>
                            </div>
                            <p className="text-white/40 text-xs font-orbitron uppercase tracking-widest mb-1">My Location</p>
                            <p className="text-white text-sm mb-8 font-medium">Vermont Square, Los Angeles</p>
                            <div className="h-24 bg-white/5 rounded-2xl w-full relative overflow-hidden border border-white/5">
                                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-118.2437,34.0522,12,0/500x300?access_token=YOUR_TOKEN')] bg-cover opacity-20 grayscale group-hover:opacity-40 transition-opacity" />
                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#3E6AE1] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#3E6AE1]/40 animate-pulse">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* My Dates Card */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-[32px] p-6 relative border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="absolute top-4 right-4 text-white/20">
                                <Bolt size={16} />
                            </div>
                            <div className="flex-1 w-full sm:w-auto">
                                <p className="text-white/40 text-xs font-orbitron uppercase tracking-widest mb-1">My Dates</p>
                                <div className="flex flex-col gap-2 mb-4">
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="bg-transparent text-white text-sm font-medium border-none focus:ring-0 cursor-pointer w-full text-center sm:text-left"
                                    />
                                    <input
                                        type="time"
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="bg-transparent text-[#3E6AE1] text-xs font-bold border-none focus:ring-0 cursor-pointer w-full text-center sm:text-left"
                                    />
                                </div>

                                <div className="flex items-center gap-4 justify-center sm:justify-start">
                                    <div className="text-center bg-white/10 px-4 py-2 rounded-2xl border border-white/10">
                                        <span className="block text-2xl font-bold text-white font-orbitron">{selectedDate.split('-')[2]}</span>
                                        <span className="text-[10px] text-white/40 uppercase font-orbitron tracking-tighter">
                                            {new Date(selectedDate).toLocaleString('default', { month: 'short' })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center sm:pl-6 sm:border-l border-white/10 w-full sm:w-auto">
                                <span className="text-3xl font-light text-white font-orbitron tracking-tighter">{selectedTime}</span>
                                <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] mt-1 font-orbitron">
                                    {parseInt(selectedTime.split(':')[0]) >= 12 ? 'PM' : 'AM'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Right Panel: Assistant Overlay - Absolute Positioning */}
                <AnimatePresence>
                    {isAssistantOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
                            className="absolute right-12 top-0 w-[420px] h-[calc(100%-120px)] flex flex-col gap-6 z-40 pointer-events-auto"
                        >
                            {/* AI Assistant Card */}
                            <div className="bg-black/40 backdrop-blur-2xl rounded-[32px] p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] h-auto relative overflow-hidden">
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <h3 className="font-orbitron font-bold text-white tracking-widest text-sm uppercase">AI Assistant</h3>
                                        <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest font-inter">How can I help you?</p>
                                    </div>
                                    <button
                                        onClick={() => setIsAssistantOpen(false)}
                                        className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all border border-white/10 shadow-sm"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    <button className="p-3 rounded-[20px] bg-white/10 border border-white/10 shadow-sm text-left group hover:bg-white hover:text-black transition-all">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-1.5 h-1.5 bg-[#3E6AE1] rounded-full" />
                                            <span className="text-xs font-orbitron font-bold uppercase tracking-widest">Book a rent</span>
                                        </div>
                                        <div className="text-[9px] opacity-60 pl-3.5">5 min</div>
                                    </button>
                                    <button className="p-3 rounded-[20px] bg-transparent hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all text-left">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                                            <span className="text-xs font-orbitron font-medium text-white/60 uppercase tracking-widest">Analysis</span>
                                        </div>
                                        <div className="text-[9px] text-white/30 pl-3.5">Damages</div>
                                    </button>
                                    <button className="p-3 rounded-[20px] bg-transparent hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all text-left">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                                            <span className="text-xs font-orbitron font-medium text-white/60 uppercase tracking-widest">Insurance</span>
                                        </div>
                                        <div className="text-[9px] text-white/30 pl-3.5">Pick a Plan</div>
                                    </button>
                                    <button
                                        onClick={() => setIsPaymentOpen(true)}
                                        className="p-3 rounded-[20px] bg-transparent hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all text-left"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-1.5 h-1.5 bg-[#3E6AE1] rounded-full shadow-[0_0_10px_rgba(62,106,225,0.5)]" />
                                            <span className="text-xs font-orbitron font-medium text-white/60 uppercase tracking-widest">Payment</span>
                                        </div>
                                        <div className="text-[9px] text-white/30 pl-3.5">Calculate</div>
                                    </button>
                                </div>

                                <div className="bg-white/5 rounded-[24px] p-4 backdrop-blur-sm border border-white/10 focus-within:border-[#3E6AE1]/40 transition-all">
                                    <div className="flex flex-col mb-4">
                                        <input
                                            type="text"
                                            value={aiMessage}
                                            onChange={(e) => setAiMessage(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                            placeholder="Write message..."
                                            className="bg-transparent text-xs text-white placeholder:text-white/20 border-none focus:ring-0 w-full p-0 font-inter"
                                        />
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white shadow-sm text-xs border border-white/5 active:scale-95 transition-all group">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#3E6AE1]"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                                            </button>
                                            <button className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white shadow-sm text-xs border border-white/5 active:scale-95 transition-all group">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#3E6AE1]"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                                            </button>
                                            <button className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white shadow-sm text-xs border border-white/5 active:scale-95 transition-all group">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#3E6AE1]"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                                            </button>
                                        </div>
                                        <button
                                            onClick={handleSend}
                                            disabled={!aiMessage.trim()}
                                            className="ml-auto px-5 py-2 rounded-xl bg-[#3E6AE1] text-white text-xs font-orbitron font-bold uppercase hover:bg-[#3457B1] disabled:opacity-30 disabled:hover:bg-[#3E6AE1] transition-all shadow-lg shadow-[#3E6AE1]/20"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method Dialog */}
                            <AnimatePresence>
                                {isPaymentOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                        className="bg-black/60 backdrop-blur-3xl rounded-[32px] p-6 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative"
                                    >
                                        <button
                                            onClick={() => setIsPaymentOpen(false)}
                                            className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors"
                                        >
                                            <X size={14} />
                                        </button>
                                        <p className="text-white/40 text-[10px] font-orbitron font-bold uppercase tracking-widest mb-4">Payment Method</p>

                                        <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-white/20 transition-all cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-6 bg-white flex items-center justify-center text-black text-[8px] font-bold rounded-sm">VISA</div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-orbitron font-bold text-white tracking-widest uppercase">Credit Card</span>
                                                    <span className="text-[9px] text-white/40 font-inter">3451 **** **** 7896</span>
                                                </div>
                                            </div>
                                            <div className="w-5 h-5 rounded-full border border-[#3E6AE1] flex items-center justify-center group-hover:bg-[#3E6AE1]/20 transition-all">
                                                <div className="w-2.5 h-2.5 bg-[#3E6AE1] rounded-full shadow-lg shadow-[#3E6AE1]/50" />
                                            </div>
                                        </div>

                                        <div className="mt-4 p-3 rounded-xl bg-[#3E6AE1]/10 border border-[#3E6AE1]/20">
                                            <p className="text-[9px] text-[#3E6AE1] font-orbitron uppercase tracking-widest text-center">Auto-billing active</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notifications */}
                <AnimatePresence>
                    {showNotification && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, x: '-50%' }}
                            animate={{ opacity: 1, y: 0, x: '-50%' }}
                            exit={{ opacity: 0, y: 50, x: '-50%' }}
                            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] px-8 py-4 bg-[#3E6AE1] rounded-[24px] shadow-[0_20px_40px_rgba(62,106,225,0.4)] flex items-center gap-4 border border-[#ffffff20]"
                        >
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                <Bolt size={14} className="text-white" />
                            </div>
                            <span className="text-white font-orbitron font-bold text-xs uppercase tracking-widest">Your message has been sent</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </section>
    );
};

export default Hero;
