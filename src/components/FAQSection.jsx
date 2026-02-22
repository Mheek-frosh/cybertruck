import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
    {
        question: 'What is the Cybertruck\'s range?',
        answer: 'The Cybertruck offers an estimated range of up to 340 miles on a single charge, depending on configuration and driving conditions. The all-wheel drive and Cyberbeast variants provide different range options.',
    },
    {
        question: 'How much can the Cybertruck tow?',
        answer: 'Cybertruck has a maximum towing capacity of 11,000 lbs when properly equipped. Its high-torque electric drivetrain and robust exoskeleton make it capable of hauling heavy loads with confidence.',
    },
    {
        question: 'What makes the exoskeleton special?',
        answer: 'The Cybertruck features an ultra-hard 30X cold-rolled stainless-steel exoskeleton that helps eliminate dents, damage, and long-term corrosion. Combined with Tesla Armor Glass, it provides exceptional durability.',
    },
    {
        question: 'How do I charge the Cybertruck?',
        answer: 'You can charge at home with a Tesla Wall Connector or standard outlet, at Tesla Superchargers for fast charging, or at any compatible public charging station. The Cybertruck supports both AC and DC fast charging.',
    },
    {
        question: 'What trim levels are available?',
        answer: 'Cybertruck is available in multiple configurations: Rear-Wheel Drive, All-Wheel Drive, and Cyberbeast. Each offers different performance, range, and capability to suit your needs.',
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
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
                        Support
                    </span>
                    <h2 className="text-4xl md:text-6xl font-orbitron font-extrabold glow-text uppercase tracking-tighter">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {FAQ_ITEMS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="cyber-border overflow-hidden rounded-2xl bg-white/5 border-white/10"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3E6AE1] focus:ring-inset"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                id={`faq-question-${index}`}
                            >
                                <span className="font-orbitron font-bold text-sm md:text-base uppercase tracking-wider pr-4">
                                    {item.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 text-[#3E6AE1]"
                                >
                                    <ChevronDown size={20} />
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        id={`faq-answer-${index}`}
                                        role="region"
                                        aria-labelledby={`faq-question-${index}`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 pt-0 border-t border-white/10">
                                            <p className="text-gray-400 font-inter text-sm leading-relaxed pt-4">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
