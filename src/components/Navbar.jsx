import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-xl py-3 shadow-sm border-b border-black/5' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-12 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center"
                >
                    <img src={logo} alt="Tesla" className="h-6 w-auto" />
                </motion.div>

                {/* Desktop Links - Tab style */}
                <div className="hidden lg:flex items-center bg-black/5 backdrop-blur-md rounded-full px-2 py-1 gap-1">
                    {navLinks.map((item, index) => (
                        <motion.a
                            key={item}
                            href="#"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 * index }}
                            className="px-6 py-2 rounded-full text-black hover:bg-black/10 transition-all text-sm font-medium tracking-tight"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                {/* Right Side Icons/Links placeholder - following Tesla style */}
                <div className="hidden lg:flex items-center gap-6">
                    <button className="text-black hover:bg-black/10 px-4 py-2 rounded-full transition-all text-sm font-medium">Support</button>
                    <button className="text-black hover:bg-black/10 px-4 py-2 rounded-full transition-all text-sm font-medium">Account</button>
                    <button className="text-black hover:bg-black/10 px-4 py-2 rounded-full transition-all text-sm font-medium">Menu</button>
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
