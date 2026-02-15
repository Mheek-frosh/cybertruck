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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80' : 'bg-transparent'} backdrop-blur-md border-b border-white/10 py-4`}>
            <div className="container mx-auto px-12 flex items-center justify-between relative">
                {/* Logo - Left */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center z-10 invert brightness-200"
                >
                    <img src={logo} alt="Tesla" className="h-10 w-auto" />
                </motion.div>

                {/* Desktop Links - Center */}
                <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-md rounded-full px-2 py-1 gap-1 border border-white/10 shadow-sm">
                    {navLinks.map((item, index) => (
                        <motion.a
                            key={item}
                            href="#"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 * index }}
                            className="px-6 py-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm font-orbitron font-medium tracking-widest"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                {/* Right Side Icons - Right */}
                <div className="hidden lg:flex items-center gap-2 z-10">
                    <button className="text-white fill-white hover:bg-white/10 p-2.5 rounded-full transition-all" title="Support">
                        <HelpCircle size={20} />
                    </button>
                    <button className="text-white hover:bg-white/10 p-2.5 rounded-full transition-all" title="Language">
                        <Globe size={20} />
                    </button>
                    <button className="text-white hover:bg-white/10 p-2.5 rounded-full transition-all" title="Account">
                        <User size={20} />
                    </button>
                </div>


                {/* Mobile Menu Toggle */}
                <button className="lg:hidden text-white p-2 bg-white/5 rounded-lg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
                        className="fixed inset-0 bg-black z-[60] flex flex-col p-8 lg:hidden"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <img src={logo} alt="Tesla" className="h-8 w-auto invert brightness-200" />
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white">
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
                                    className="text-white text-xl font-orbitron font-medium tracking-widest hover:text-[#3E6AE1] transition-all"
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
