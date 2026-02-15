import React from 'react';
import { motion } from 'framer-motion';

const DurabilitySection = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#0a0a0a] text-white flex items-center overflow-hidden py-20">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3E6AE120] to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3E6AE120] to-transparent" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Exoskeleton Diagram Placeholder */}
                    <div className="cyber-border aspect-square w-full max-w-md mx-auto bg-white/5 flex flex-col items-center justify-center p-8 text-center group">
                        <div className="absolute inset-0 cyber-grid opacity-10" />

                        {/* Scanning Line Animation */}
                        <motion.div
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[2px] bg-[#3E6AE1] shadow-[0_0_15px_#3E6AE1] z-20 pointer-events-none"
                        />

                        <div className="relative z-10">
                            <h3 className="font-orbitron font-extrabold text-2xl mb-4 tracking-tighter uppercase">Ultra-Hard 30X <br />Cold-Rolled <br />Stainless-Steel</h3>
                            <p className="text-white/40 text-xs font-inter uppercase tracking-widest leading-relaxed">
                                If there were something better, we’d use it. Help eliminate dents, damage and long-term corrosion.
                            </p>
                        </div>

                        {/* Technical Specs Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[8px] font-orbitron text-[#3E6AE1] opacity-60">
                            <span>SENSORS: ACTIVE</span>
                            <span>STRUCTURAL: OPTIMAL</span>
                        </div>
                    </div>

                    {/* Floating geometric detail */}
                    <div className="absolute -top-10 -left-10 w-20 h-20 border border-white/5 rounded-full animate-spin-slow opacity-20" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#3E6AE1] font-orbitron text-[10px] tracking-[0.5em] uppercase mb-4 block">
                        Durability
                    </span>
                    <h2 className="text-4xl md:text-6xl font-orbitron font-extrabold mb-8 glow-text leading-tight uppercase">
                        EXOSKELETON
                    </h2>

                    <div className="space-y-12">
                        <div className="relative pl-8 border-l border-white/10 group">
                            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[#3E6AE1] rounded-full shadow-[0_0_10px_#3E6AE1] group-hover:scale-125 transition-all" />
                            <h3 className="text-lg font-orbitron font-bold mb-3 uppercase tracking-widest text-white/80">
                                Tesla Armor Glass
                            </h3>
                            <p className="text-white/40 font-inter text-sm leading-relaxed max-w-md">
                                Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance.
                            </p>
                        </div>

                        <div className="relative pl-8 border-l border-white/10 group">
                            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[#3E6AE1] rounded-full shadow-[0_0_10px_#3E6AE1] group-hover:scale-125 transition-all" />
                            <h3 className="text-lg font-orbitron font-bold mb-3 uppercase tracking-widest text-white/80">
                                Versatile Utility
                            </h3>
                            <p className="text-white/40 font-inter text-sm leading-relaxed max-w-md">
                                With up to 3,500 pounds of payload capacity and adjustable air suspension, Cybertruck is the most powerful tool we have ever built.
                            </p>
                        </div>
                    </div>

                    <button className="mt-12 group flex items-center gap-4 text-xs font-orbitron tracking-[0.3em] font-bold uppercase py-3 px-8 border border-white/10 hover:border-[#3E6AE1] hover:bg-[#3E6AE1]/5 transition-all">
                        Experience Resilience
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>

            {/* Background Text Accent */}
            <div className="absolute bottom-0 right-0 font-orbitron text-[15vw] font-black text-white/[0.02] leading-none select-none -mb-[5vw]">
                STEEL
            </div>
        </section>
    );
};

export default DurabilitySection;
