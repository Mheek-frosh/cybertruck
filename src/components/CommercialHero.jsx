import React from 'react';
import { motion } from 'framer-motion';
import videoBg from '../assets/v1.webm';

const CommercialHero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-between py-24 text-white">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={videoBg} type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay for readability if needed */}
            <div className="absolute inset-0 bg-black/10 z-[1]" />

            {/* Content Top */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 text-center"
            >
                <h1 className="text-6xl md:text-7xl font-orbitron font-bold tracking-[0.2em] drop-shadow-2xl">
                    CYBERTRUCK
                </h1>
            </motion.div>

            {/* Content Bottom: Buttons & Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative z-10 w-full max-w-[1440px] px-12 flex flex-col items-center gap-12"
            >
                {/* Stats placeholder to match Tesla style if needed, or just buttons */}
                <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl">
                    <button className="flex-1 bg-[#3E6AE1] hover:bg-[#3457B1] text-white py-3 px-8 rounded-[4px] font-medium transition-colors uppercase text-sm tracking-widest backdrop-blur-md">
                        Order Now
                    </button>
                    <button className="flex-1 bg-white hover:bg-gray-100 text-black py-3 px-8 rounded-[4px] font-medium transition-colors uppercase text-sm tracking-widest backdrop-blur-md">
                        Demo Drive
                    </button>
                </div>

                {/* Cyberpunk Style Detail */}
                <div className="flex gap-12 text-sm font-medium tracking-widest uppercase">
                    <div className="text-center">
                        <span className="block text-2xl font-bold mb-1">2.6s</span>
                        <span className="text-[10px] opacity-80">0-60 mph*</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-2xl font-bold mb-1">340mi</span>
                        <span className="text-[10px] opacity-80">Range (EST.)</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-2xl font-bold mb-1">11,000 lbs</span>
                        <span className="text-[10px] opacity-80">Towing</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CommercialHero;
