import React, { useState, useEffect } from 'react';
import { Menu, X, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About Us', 'Inventory', 'Dealership', 'Service', 'Contact Us'];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-2"
                >
                    <div className="relative group cursor-pointer">
                        <h1 className="text-2xl font-orbitron font-bold tracking-wider text-white">
                            AUTO<span className="text-primary transition-colors duration-300 group-hover:text-red-400">HIVE</span>
                        </h1>
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                    </div>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((item, index) => (
                        <motion.a
                            key={item}
                            href="#"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="text-white/70 hover:text-white transition-colors text-xs uppercase tracking-[0.15em] font-medium relative group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                            <span className="absolute top-0 left-0 w-full h-full bg-white/5 scale-0 group-hover:scale-100 rounded transition-transform duration-300 -z-10"></span>
                        </motion.a>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:flex items-center"
                >
                    <button className="relative overflow-hidden group flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(239,68,68,0.3)] hover:shadow-[0_6px_30px_rgba(239,68,68,0.5)]">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></span>
                        <Plus size={18} className="relative z-10" />
                        <span className="relative z-10 font-orbitron tracking-wide text-sm">Add Listing</span>
                    </button>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden md:hidden shadow-2xl"
                    >
                        <div className="p-6 flex flex-col gap-4">
                            {navLinks.map((item, index) => (
                                <motion.a
                                    key={item}
                                    href="#"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * index }}
                                    className="text-white text-lg font-medium hover:text-primary transition-colors font-orbitron"
                                >
                                    {item}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium w-full mt-4 shadow-lg shadow-red-600/20"
                            >
                                <Plus size={18} />
                                <span>Add Listing</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
