import React from 'react';
import { motion } from 'framer-motion';

import cockpitImg from '../assets/interior.png';
import roofImg from '../assets/world.png';

const InteriorSection = () => {
    return (
        <section className="relative min-h-[150vh] w-full bg-[#111111] text-white overflow-hidden">
            {/* Main Cockpit View */}
            <div className="min-h-screen flex items-center relative">
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
                        <h2 className="text-4xl md:text-6xl font-orbitron font-extrabold mb-8 glow-text leading-tight uppercase">
                            THE FUTURE <br />OF DRIVING
                        </h2>

                        <div className="space-y-8">
                            <div className="max-w-md">
                                <h3 className="text-lg font-orbitron font-bold mb-2 uppercase tracking-widest text-gray-300">
                                    18.5" INFINITY TOUCHSCREEN
                                </h3>
                                <p className="text-gray-400 font-inter text-sm leading-relaxed">
                                    Control everything from the massive central display. Minimalist design meets maximum capability.
                                </p>
                            </div>

                            <div className="max-w-md border-l-2 border-[#3E6AE1] pl-6 py-2">
                                <h3 className="text-lg font-orbitron font-bold mb-2 uppercase tracking-widest text-gray-300">
                                    STEER-BY-WIRE
                                </h3>
                                <p className="text-gray-400 font-inter text-sm leading-relaxed">
                                    Experience a complete rethink of vehicle control with the rectangular yoke and electronic steering.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-video cyber-border overflow-hidden rounded-lg">
                            <img src={cockpitImg} alt="Cybertruck Interior" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 cyber-border opacity-20 pointer-events-none" />
                    </motion.div>
                </div>
            </div>

            {/* Glass Roof View */}
            <div className="min-h-[50vh] flex items-center bg-black/40 backdrop-blur-sm relative py-20">
                <div className="container mx-auto px-6 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-orbitron font-extrabold mb-8 glow-text uppercase tracking-tighter">
                            ALL-GLASS ROOF
                        </h2>
                        <div className="cyber-border aspect-[21/9] w-full overflow-hidden mb-8">
                            <img src={roofImg} alt="Glass Roof View" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-gray-400 font-inter text-sm tracking-widest uppercase">
                            AN EXPANSIVE ROOF PROVIDES PASSENGERS WITH A SEAMLESS VIEW OF THE WORLD ABOVE.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InteriorSection;
