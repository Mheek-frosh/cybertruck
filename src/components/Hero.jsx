import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cybertruckFront from '../assets/front.png';
import cybertruckSide from '../assets/rightside.png';
import cybertruckRear from '../assets/back.png';

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

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState('2024-07-20');
    const [selectedTime, setSelectedTime] = useState('10:25');

    const handleLocationClick = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=Vermont+Square,+Los+Angeles', '_blank');
    };

    const currentSlide = CAR_SLIDES[activeIndex];

    return (
        <section className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden flex flex-col p-6 pt-24 font-inter">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            {/* Main Content Grid */}
            <div className="flex-1 max-w-[1440px] w-full mx-auto grid grid-cols-12 gap-6 relative px-12">

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
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" /></svg>
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
            </div>

        </section>
    );
};

export default Hero;
