import React from 'react';

const Footer = () => {
    const links = ['Cybertruck', 'Model S', 'Model 3', 'Model X', 'Shop', 'Sign In'];

    return (
        <footer className="bg-black text-white py-12 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#3E6AE130] to-transparent" />

            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
                    {links.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[11px] font-orbitron tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors duration-300"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-[10px] font-inter uppercase tracking-widest text-gray-600 mb-2">
                        Tesla © 2024
                    </p>
                    <p className="text-[9px] font-inter uppercase tracking-[0.4em] text-gray-700">
                        Privacy & Legal | Contact | Careers | News
                    </p>
                </div>

                <div className="mt-10 flex gap-6">
                    {/* Simple geometric social icons placeholders */}
                    <div className="w-5 h-5 border border-white/10 hover:border-[#3E6AE1] transition-colors cursor-pointer rotate-45" />
                    <div className="w-5 h-5 border border-white/10 hover:border-[#3E6AE1] transition-colors cursor-pointer" />
                    <div className="w-5 h-5 border border-white/10 hover:border-[#3E6AE1] transition-colors cursor-pointer rotate-12" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
