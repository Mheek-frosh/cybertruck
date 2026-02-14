import React, { useState, useEffect } from 'react';
import { Menu, X, HelpCircle, User, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

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

    const navLinks = ['Vehicles', 'Energy', 'Charging', 'Discover', 'Shop'];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/40 backdrop-blur-md border-b border-white/20 py-4`}>
            <div className="container mx-auto px-12 flex items-center justify-between relative">
                {/* Logo - Left */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center z-10"
                >
                    <img src={logo} alt="Tesla" className="h-10 w-auto" />
                </motion.div>

                {/* Desktop Links - Center (Absolute positioning for perfect centering) */}
                <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 gap-1 border border-white/30 shadow-sm">
                    {navLinks.map((item, index) => (
                        <motion.a
                            key={item}
                            href="#"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 * index }}
                            className="px-6 py-2 rounded-full text-black hover:bg-white/40 transition-all text-sm font-medium tracking-tight"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                {/* Right Side Icons - Right */}
                <div className="hidden lg:flex items-center gap-2 z-10">
                    <button className="text-black hover:bg-white/40 p-2.5 rounded-full transition-all" title="Support">
                        <HelpCircle size={20} />
                    </button>
                    <button className="text-black hover:bg-white/40 p-2.5 rounded-full transition-all" title="Language">
                        <Globe size={20} />
                    </button>
                    <button className="text-black hover:bg-white/40 p-2.5 rounded-full transition-all" title="Account">
                        <User size={20} />
                    </button>
                    <button className="text-black hover:bg-white/40 p-2.5 rounded-full transition-all lg:hidden" title="Menu">
                        <Menu size={20} />
                    </button>
                </div>


                {/* Mobile Menu Toggle */}
                <button className="lg:hidden text-black p-2 bg-black/5 rounded-lg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-white z-[60] flex flex-col p-8 lg:hidden"
                    >
                        <div className="flex justify-end mb-8">
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-black">
                                <X size={32} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6">
                            {navLinks.map((item, index) => (
                                <motion.a
                                    key={item}
                                    href="#"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * index }}
                                    className="text-black text-2xl font-medium hover:pl-4 transition-all"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
