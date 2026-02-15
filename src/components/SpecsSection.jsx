import React from 'react';
import { motion } from 'framer-motion';

const SpecsSection = () => {
    const specs = [
        { label: 'Top Speed', value: '130 MPH', detail: 'ELECTRONICALLY LIMITED' },
        { label: 'Range', value: '340 MI', detail: 'ESTIMATED RANGE' },
        { label: 'Payload', value: '2,500 LBS', detail: 'MAX CAPACITY' },
        { label: 'Towing', value: '11,000 LBS', detail: 'CAPABILITY' }
    ];

    return (
        <section className="relative min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center py-20 overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-extrabold tracking-widest mb-4 glow-text">
                        BUILT FOR ANY PLANET
                    </h2>
                    <p className="text-gray-400 font-inter uppercase tracking-[0.3em] text-sm">
                        Extreme Durability and Passenger Protection
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specs.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="cyber-border p-8 bg-black/40 backdrop-blur-sm group hover:bg-white hover:text-black transition-all duration-300 flex flex-col items-center justify-center text-center"
                        >
                            <span className="text-xs font-orbitron tracking-widest text-[#3E6AE1] mb-2 group-hover:text-black transition-colors">
                                {spec.label}
                            </span>
                            <span className="text-4xl font-bold font-orbitron mb-2">
                                {spec.value}
                            </span>
                            <span className="text-[10px] opacity-60 tracking-wider">
                                {spec.detail}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 flex justify-center"
                >
                    <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30" />
                </motion.div>
            </div>
        </section>
    );
};

export default SpecsSection;
