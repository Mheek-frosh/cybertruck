import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BootLoader = ({ onComplete }) => {
    const [text, setText] = useState('');
    const fullText = "SYSTEM INITIALIZING...";

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    onComplete();
                }, 800);
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[999999] bg-black flex flex-col items-center justify-center font-orbitron"
        >
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "300px" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-[2px] bg-[#3E6AE1] mb-8 shadow-[0_0_20px_rgba(62,106,225,0.8)]"
                />

                <h1 className="text-white tracking-[0.5em] text-sm md:text-xl font-bold min-h-[30px] flex items-center">
                    {text}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        className="inline-block w-3 h-6 bg-[#3E6AE1] ml-2"
                    />
                </h1>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "300px" }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    className="h-[2px] bg-[#3E6AE1] mt-8 shadow-[0_0_20px_rgba(62,106,225,0.8)]"
                />
            </div>

            <div className="absolute bottom-12 text-[#3E6AE1]/50 text-xs tracking-widest font-mono">
                CYBERTRUCK OS // V.2025.1.0
            </div>
        </motion.div>
    );
};

export default BootLoader;
