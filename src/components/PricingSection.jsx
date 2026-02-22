import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Crown } from 'lucide-react';

const TRIMS = [
    {
        id: 'rwd',
        name: 'Rear-Wheel Drive',
        icon: Zap,
        price: 'From $60,990',
        range: '250+ mi',
        acceleration: '6.5s 0-60 mph',
        towing: '7,500 lbs',
        highlight: false,
    },
    {
        id: 'awd',
        name: 'All-Wheel Drive',
        icon: Shield,
        price: 'From $79,990',
        range: '340 mi',
        acceleration: '4.1s 0-60 mph',
        towing: '11,000 lbs',
        highlight: true,
    },
    {
        id: 'cyberbeast',
        name: 'Cyberbeast',
        icon: Crown,
        price: 'From $99,990',
        range: '320 mi',
        acceleration: '2.6s 0-60 mph',
        towing: '11,000 lbs',
        highlight: false,
    },
];

const PricingSection = () => {
    return (
        <section id="pricing" className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#3E6AE1] font-orbitron text-xs tracking-[0.5em] uppercase mb-4 block">
                        Configure
                    </span>
                    <h2 className="text-4xl md:text-6xl font-orbitron font-extrabold glow-text uppercase tracking-tighter">
                        Choose Your Cybertruck
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {TRIMS.map((trim, index) => (
                        <motion.div
                            key={trim.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`cyber-border rounded-2xl p-8 transition-all ${
                                trim.highlight
                                    ? 'bg-[#3E6AE1]/10 border-[#3E6AE1]/40 scale-105 md:scale-110'
                                    : 'bg-white/5 border-white/10 hover:border-white/20'
                            }`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <trim.icon className={`w-8 h-8 ${trim.highlight ? 'text-[#3E6AE1]' : 'text-white/60'}`} />
                                <h3 className="font-orbitron font-bold text-lg uppercase tracking-wider">
                                    {trim.name}
                                </h3>
                            </div>
                            <p className="text-2xl font-orbitron font-extrabold mb-6 text-[#3E6AE1]">
                                {trim.price}
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="text-sm text-gray-400 font-inter flex justify-between">
                                    <span>Range</span>
                                    <span className="text-white font-medium">{trim.range}</span>
                                </li>
                                <li className="text-sm text-gray-400 font-inter flex justify-between">
                                    <span>0-60 mph</span>
                                    <span className="text-white font-medium">{trim.acceleration}</span>
                                </li>
                                <li className="text-sm text-gray-400 font-inter flex justify-between">
                                    <span>Towing</span>
                                    <span className="text-white font-medium">{trim.towing}</span>
                                </li>
                            </ul>
                            <button
                                className={`w-full py-3 rounded-xl font-orbitron font-bold text-sm uppercase tracking-widest transition-colors ${
                                    trim.highlight
                                        ? 'bg-[#3E6AE1] hover:bg-[#3457B1] text-white'
                                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                                }`}
                            >
                                Order Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
