import React from 'react';
import { motion } from 'framer-motion';
import towingImg from '../assets/rocket.png';
import vaultImg from '../assets/iI.png';

const UtilitySection = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#0a0a0a] text-white py-24 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-[#3E6AE1] font-orbitron text-xs tracking-[0.5em] uppercase mb-4 block">
                        Versatility
                    </span>
                    <h2 className="text-4xl md:text-6xl font-orbitron font-extrabold glow-text uppercase">
                        MORE THAN A TRUCK
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Towing Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="cyber-border aspect-video overflow-hidden rounded-lg">
                            <img src={towingImg} alt="Towing Capacity" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-orbitron font-bold mb-4 uppercase tracking-widest text-[#3E6AE1]">
                                11,000 LBS TOWING
                            </h3>
                            <p className="text-gray-400 font-inter text-sm leading-relaxed max-w-md">
                                Pull anything from a horse trailer to a SpaceX Raptor engine. Cybertruck's high-torque drivetrain and sturdy build make it the ultimate hauler.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vault Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="space-y-8 lg:mt-24"
                    >
                        <div className="cyber-border aspect-video overflow-hidden rounded-lg">
                            <img src={vaultImg} alt="The Vault" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-orbitron font-bold mb-4 uppercase tracking-widest text-[#3E6AE1]">
                                THE VAULT
                            </h3>
                            <p className="text-gray-400 font-inter text-sm leading-relaxed max-w-md">
                                67 cubic feet of lockable storage. Load your gear, tools, or even a Cyberquad. The motorized cover keeps everything secure and aerodynamic.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none select-none">
                <div className="font-orbitron font-black text-[30vw] rotate-12">UTILITY</div>
            </div>
        </section>
    );
};

export default UtilitySection;
