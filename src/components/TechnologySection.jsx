import React from 'react';
import { motion } from 'framer-motion';
import appImg from '../assets/phone.png';
import autopilotImg from '../assets/traffic.png';

const TechnologySection = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#111111] text-white py-24 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(62,106,225,0.05)_0%,_transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Autopilot Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#3E6AE1] font-orbitron text-xs tracking-[0.5em] uppercase mb-4 block">
                            Intelligence
                        </span>
                        <h2 className="text-4xl md:text-6xl font-orbitron font-extrabold mb-8 glow-text leading-tight uppercase">
                            NEURAL <br />NETWORK
                        </h2>

                        <div className="cyber-border aspect-video overflow-hidden rounded-lg mb-8 relative group">
                            <img src={autopilotImg} alt="Autopilot Visualization" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />

                            {/* Scanning Effect */}
                            <motion.div
                                animate={{ left: ['-10%', '110%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 bottom-0 w-[2px] bg-white/40 shadow-[0_0_15px_white] z-20 pointer-events-none"
                            />
                        </div>

                        <p className="text-gray-400 font-inter text-sm leading-relaxed max-w-md">
                            Advanced sensors and powerful onboard computers process the world in real-time. Cybertruck visualizes its surroundings through a sophisticated neural network for confident autonomous driving.
                        </p>
                    </motion.div>

                    {/* App Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center lg:items-end text-center lg:text-right"
                    >
                        <div className="relative mb-12">
                            <div className="cyber-border p-4 bg-black/40 backdrop-blur-xl rounded-[40px] shadow-[0_0_50px_rgba(62,106,225,0.2)]">
                                <img src={appImg} alt="Tesla App" className="w-[280px] rounded-[32px]" />
                            </div>
                            {/* Decorative HUD Elements */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#3E6AE1] opacity-50" />
                            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-[#3E6AE1] opacity-50" />
                        </div>

                        <div className="max-w-md">
                            <h3 className="text-3xl font-orbitron font-extrabold mb-6 glow-text uppercase tracking-tighter">
                                CONTROL AT <br />YOUR FINGERTIPS
                            </h3>
                            <p className="text-gray-400 font-inter text-sm leading-relaxed mb-8">
                                Remote climate control, charging status, location tracking, and even software updates. The Tesla App gives you total command over your Cybertruck, anywhere in the world.
                            </p>

                            <div className="flex gap-4 justify-center lg:justify-end">
                                <div className="cyber-border px-4 py-2 bg-white/5 text-[10px] font-orbitron uppercase tracking-widest">
                                    iOS
                                </div>
                                <div className="cyber-border px-4 py-2 bg-white/5 text-[10px] font-orbitron uppercase tracking-widest">
                                    ANDROID
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
