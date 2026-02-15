import React from 'react';
import { motion } from 'framer-motion';

const InteriorSection = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#111111] text-white flex items-center overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#3E6AE110] to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#3E6AE1] font-orbitron text-xs tracking-[0.5em] uppercase mb-4 block">
                        Cockpit
                    </span>
                    <h2 className="text-4xl md:text-6xl font-orbitron font-extrabold mb-8 glow-text leading-tight">
                        DESIGNED FOR <br />THE FUTURE
                    </h2>

                    <div className="space-y-8">
                        <div className="max-w-md">
                            <h3 className="text-lg font-orbitron font-bold mb-2 uppercase tracking-widest text-gray-300">
                                Immersive Touchscreen
                            </h3>
                            <p className="text-gray-400 font-inter leading-relaxed">
                                A massive 18.5-inch infinity touchscreen in the front and a 9.4-inch touchscreen in the back provide all your controls and entertainment.
                            </p>
                        </div>

                        <div className="max-w-md border-l-2 border-[#3E6AE1] pl-6 py-2">
                            <h3 className="text-lg font-orbitron font-bold mb-2 uppercase tracking-widest text-gray-300">
                                Futuristic Steer
                            </h3>
                            <p className="text-gray-400 font-inter leading-relaxed">
                                Experience a complete rethink of vehicle control with the rectangular steering yoke.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Placeholder for an Interior Image/Render */}
                    <div className="aspect-video cyber-border overflow-hidden bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                        <div className="absolute inset-0 cyber-grid opacity-10" />
                        <div className="text-center group cursor-pointer">
                            <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-[#3E6AE1] group-hover:border-[#3E6AE1] transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="font-orbitron text-xs tracking-widest uppercase text-gray-500 group-hover:text-white">Watch Interior Tour</span>
                        </div>
                    </div>

                    {/* Floating geometric detail */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 cyber-border opacity-20 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};

export default InteriorSection;
