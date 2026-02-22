import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail('');
        }
    };

    const footerLinks = [
        { label: 'Cybertruck', href: '#hero' },
        { label: 'Model S', href: '#' },
        { label: 'Model 3', href: '#' },
        { label: 'Model X', href: '#' },
        { label: 'Shop', href: '#pricing' },
        { label: 'Sign In', href: '#' },
    ];

    const socialLinks = [
        { icon: Twitter, href: 'https://twitter.com/tesla', label: 'Twitter' },
        { icon: Instagram, href: 'https://instagram.com/teslamotors', label: 'Instagram' },
        { icon: Youtube, href: 'https://youtube.com/tesla', label: 'YouTube' },
        { icon: Linkedin, href: 'https://linkedin.com/company/tesla-motors', label: 'LinkedIn' },
    ];

    return (
        <footer id="footer" className="bg-black text-white py-16 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#3E6AE130] to-transparent" />

            <div className="container mx-auto max-w-6xl">
                {/* Newsletter Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h3 className="font-orbitron font-bold text-lg uppercase tracking-widest mb-2">
                        Stay Updated
                    </h3>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">
                        Get the latest Cybertruck news and updates
                    </p>
                    {subscribed ? (
                        <p className="text-[#3E6AE1] font-orbitron text-sm uppercase tracking-widest">
                            Thanks for subscribing!
                        </p>
                    ) : (
                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-[#3E6AE1] focus:border-transparent"
                                aria-label="Email for newsletter"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-[#3E6AE1] hover:bg-[#3457B1] rounded-lg font-orbitron font-bold text-xs uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-[#3E6AE1] focus:ring-offset-2 focus:ring-offset-black"
                            >
                                Subscribe
                            </button>
                        </form>
                    )}
                </motion.div>

                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => {
                                    if (link.href.startsWith('#')) {
                                        e.preventDefault();
                                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="text-[11px] font-orbitron tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#3E6AE1] focus:ring-offset-2 focus:ring-offset-black rounded"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="text-center mb-10">
                        <p className="text-[10px] font-inter uppercase tracking-widest text-gray-600 mb-2">
                            Tesla © 2025
                        </p>
                        <p className="text-[9px] font-inter uppercase tracking-[0.4em] text-gray-700">
                            Privacy & Legal | Contact | Careers | News
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#3E6AE1] hover:border-[#3E6AE1]/30 hover:bg-[#3E6AE1]/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#3E6AE1] focus:ring-offset-2 focus:ring-offset-black"
                                aria-label={label}
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
