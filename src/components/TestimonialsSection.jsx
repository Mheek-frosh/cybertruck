import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        name: 'Marcus Chen',
        role: 'Early Adopter',
        rating: 5,
        text: 'The Cybertruck exceeded every expectation. The build quality is incredible, and the exoskeleton gives me peace of mind. Best vehicle I\'ve ever owned.',
        avatar: 'MC',
    },
    {
        name: 'Sarah Mitchell',
        role: 'Tech Entrepreneur',
        rating: 5,
        text: 'I use it for both work and weekend adventures. The vault storage is massive, and towing my boat is effortless. The future of trucks is here.',
        avatar: 'SM',
    },
    {
        name: 'James Rodriguez',
        role: 'Construction Contractor',
        rating: 5,
        text: 'Finally a truck that can handle the job site and look good doing it. The stainless steel holds up to everything. Game changer for my business.',
        avatar: 'JR',
    },
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="relative py-24 bg-[#111111] text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(62,106,225,0.06)_0%,transparent_50%)] pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#3E6AE1] font-orbitron text-xs tracking-[0.5em] uppercase mb-4 block">
                        Reviews
                    </span>
                    <h2 className="text-4xl md:text-6xl font-orbitron font-extrabold glow-text uppercase tracking-tighter">
                        What Owners Say
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="cyber-border p-8 rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition-colors group"
                        >
                            <Quote className="w-10 h-10 text-[#3E6AE1]/40 mb-4 group-hover:text-[#3E6AE1]/60 transition-colors" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-[#3E6AE1] text-[#3E6AE1]" />
                                ))}
                            </div>
                            <p className="text-gray-400 font-inter text-sm leading-relaxed mb-6">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#3E6AE1]/20 flex items-center justify-center font-orbitron font-bold text-[#3E6AE1] text-sm">
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="font-orbitron font-bold text-sm uppercase tracking-wider">{t.name}</p>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
