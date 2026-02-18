import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bolt, X } from 'lucide-react';
import Navbar from './components/Navbar';
import CommercialHero from './components/CommercialHero';
import Hero from './components/Hero';
import DurabilitySection from './components/DurabilitySection';
import UtilitySection from './components/UtilitySection';
import SpecsSection from './components/SpecsSection';
import InteriorSection from './components/InteriorSection';
import TechnologySection from './components/TechnologySection';
import Footer from './components/Footer';

// Assets for Vehicle Selector
import tesla1 from './assets/tesla1.png';
import tesla2 from './assets/telsa2.png';
import tesla3 from './assets/telsa3.png';
import cybertruckFront from './assets/front.png';
import './index.css';

const SELECTOR_CARS = [
    { id: 1, name: 'Model S', image: tesla1 },
    { id: 2, name: 'Model 3', image: tesla2 },
    { id: 3, name: 'Model X', image: tesla3 },
    { id: 4, name: 'Cybertruck', image: cybertruckFront },
];

function App() {
    const [isAssistantOpen, setIsAssistantOpen] = useState(true);
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [aiMessage, setAiMessage] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);

    const handleSend = () => {
        if (!aiMessage.trim()) return;
        setAiMessage('');
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    return (
        <div className="bg-black min-h-screen text-white relative">
            <Navbar />

            {/* Global Fixed Controllers */}
            {/* Left Fixed Icons */}
            <div className="fixed left-3 lg:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 lg:gap-4 z-50">
                <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/10 shadow-sm">
                    <ChevronLeft size={18} className="lg:hidden" />
                    <ChevronLeft size={20} className="hidden lg:block" />
                </button>
                <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/10 shadow-sm">
                    <svg width="18" height="18" className="lg:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    <svg width="20" height="20" className="hidden lg:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </button>
                <button
                    onClick={() => {
                        setIsDashboardOpen(!isDashboardOpen);
                        if (!isDashboardOpen) setIsAssistantOpen(false);
                    }}
                    className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl backdrop-blur-md flex items-center justify-center transition-all border shadow-sm ${isDashboardOpen ? 'bg-[#3E6AE1] text-white border-[#3E6AE1]' : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10 border-white/10'}`}
                >
                    <svg width="18" height="18" className="lg:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                    <svg width="20" height="20" className="hidden lg:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                </button>
                <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/10 shadow-sm">
                    <svg width="18" height="18" className="lg:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    <svg width="20" height="20" className="hidden lg:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                </button>
            </div>

            {/* Right Fixed Icons (Toggles) */}
            <div className="fixed right-3 lg:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 lg:gap-4 z-50">
                {!isAssistantOpen && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={() => setIsAssistantOpen(true)}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-[#3E6AE1] shadow-lg flex items-center justify-center text-white hover:bg-[#3457B1] transition-colors"
                    >
                        <Bolt size={18} className="lg:hidden" />
                        <Bolt size={20} className="hidden lg:block" />
                    </motion.button>
                )}
                <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white/30 hover:text-white transition-all border border-white/10 shadow-sm">
                    <svg width="18" height="18" className="lg:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    <svg width="20" height="20" className="hidden lg:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </button>
                <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-white/30 hover:text-white transition-all border border-white/10 shadow-sm">
                    <svg width="18" height="18" className="lg:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" /></svg>
                    <svg width="20" height="20" className="hidden lg:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" /></svg>
                </button>
            </div>

            {/* Global Popups */}
            <AnimatePresence>
                {isDashboardOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                        className="fixed inset-x-4 top-1/2 -translate-y-1/2 lg:left-24 lg:right-auto lg:w-[900px] z-[60] pointer-events-auto"
                    >
                        <div className="bg-black/80 backdrop-blur-2xl rounded-[32px] p-6 lg:p-8 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] h-auto relative overflow-hidden flex flex-col">
                            <div className="flex items-center justify-between mb-8 lg:mb-10">
                                <div>
                                    <h3 className="font-orbitron font-bold text-white tracking-[0.2em] lg:tracking-[0.3em] text-xs lg:text-sm uppercase">Vehicle Selection</h3>
                                    <p className="text-[9px] lg:text-[10px] text-white/40 mt-1 uppercase tracking-widest font-inter">Choose your configuration</p>
                                </div>
                                <button
                                    onClick={() => setIsDashboardOpen(false)}
                                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all border border-white/10 shadow-sm"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            {/* Car Selection - Horizontal Scroll on Mobile */}
                            <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide no-scrollbar">
                                {SELECTOR_CARS.map((car) => (
                                    <motion.div
                                        key={car.id}
                                        whileHover={{ y: -5 }}
                                        className="min-w-[160px] lg:min-w-0 group relative bg-white/5 hover:bg-white/10 rounded-[24px] p-4 lg:p-6 border border-white/5 hover:border-[#3E6AE1]/30 transition-all cursor-pointer flex flex-col items-center"
                                    >
                                        <div className="w-full h-20 lg:h-24 relative flex items-center justify-center mb-4">
                                            <img
                                                src={car.image}
                                                alt={car.name}
                                                className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(62,106,225,0.2)] group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <span className="block text-[9px] lg:text-[10px] font-orbitron font-bold text-white tracking-widest uppercase mb-1">{car.name}</span>
                                            <div className="h-0.5 w-0 bg-[#3E6AE1] mx-auto group-hover:w-full transition-all duration-300" />
                                        </div>

                                        <div className="absolute inset-0 bg-[#3E6AE1]/5 opacity-0 group-hover:opacity-100 rounded-[24px] transition-opacity pointer-events-none" />
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-6 lg:mt-10 flex justify-center">
                                <div className="w-8 h-0.5 bg-[#3E6AE1] rounded-full mx-1" />
                                <div className="w-2 h-0.5 bg-white/20 rounded-full mx-1" />
                                <div className="w-2 h-0.5 bg-white/20 rounded-full mx-1" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isAssistantOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                        className="fixed inset-x-4 bottom-24 lg:inset-auto lg:right-12 lg:top-1/2 lg:-translate-y-1/2 lg:w-[420px] z-[60] flex flex-col gap-6 pointer-events-auto"
                    >
                        <div className="bg-black/80 backdrop-blur-2xl rounded-[32px] p-5 lg:p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] h-auto relative overflow-hidden">
                            <div className="flex items-start justify-between mb-6 lg:mb-8">
                                <div>
                                    <h3 className="font-orbitron font-bold text-white tracking-widest text-xs lg:text-sm uppercase">AI Assistant</h3>
                                    <p className="text-[9px] lg:text-[10px] text-white/40 mt-1 uppercase tracking-widest font-inter">How can I help you?</p>
                                </div>
                                <button
                                    onClick={() => setIsAssistantOpen(false)}
                                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all border border-white/10 shadow-sm"
                                >
                                    <X size={14} />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-6 lg:mb-8">
                                <button className="p-3 rounded-[20px] bg-white/10 border border-white/10 shadow-sm text-left group hover:bg-white hover:text-black transition-all">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1.5 h-1.5 bg-[#3E6AE1] rounded-full" />
                                        <span className="text-[10px] lg:text-xs font-orbitron font-bold uppercase tracking-widest">Book a rent</span>
                                    </div>
                                    <div className="text-[8px] lg:text-[9px] opacity-60 pl-3.5">5 min</div>
                                </button>
                                <button className="p-3 rounded-[20px] bg-transparent hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all text-left">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                                        <span className="text-[10px] lg:text-xs font-orbitron font-medium text-white/60 uppercase tracking-widest">Analysis</span>
                                    </div>
                                    <div className="text-[8px] lg:text-[9px] text-white/30 pl-3.5">Damages</div>
                                </button>
                                <button className="p-3 rounded-[20px] bg-transparent hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all text-left">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                                        <span className="text-[10px] lg:text-xs font-orbitron font-medium text-white/60 uppercase tracking-widest">Insurance</span>
                                    </div>
                                    <div className="text-[8px] lg:text-[9px] text-white/30 pl-3.5">Pick a Plan</div>
                                </button>
                                <button
                                    onClick={() => setIsPaymentOpen(true)}
                                    className="p-3 rounded-[20px] bg-transparent hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all text-left"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1.5 h-1.5 bg-[#3E6AE1] rounded-full shadow-[0_0_10px_rgba(62,106,225,0.5)]" />
                                        <span className="text-[10px] lg:text-xs font-orbitron font-medium text-white/60 uppercase tracking-widest">Payment</span>
                                    </div>
                                    <div className="text-[8px] lg:text-[9px] text-white/30 pl-3.5">Calculate</div>
                                </button>
                            </div>

                            <div className="bg-white/5 rounded-[24px] p-4 backdrop-blur-sm border border-white/10 focus-within:border-[#3E6AE1]/40 transition-all">
                                <div className="flex flex-col mb-4">
                                    <input
                                        type="text"
                                        value={aiMessage}
                                        onChange={(e) => setAiMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Write message..."
                                        className="bg-transparent text-[11px] lg:text-xs text-white placeholder:text-white/20 border-none focus:ring-0 w-full p-0 font-inter"
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex gap-2">
                                        <button className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white shadow-sm text-xs border border-white/5 active:scale-95 transition-all group">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#3E6AE1]"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                                        </button>
                                        <button className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white shadow-sm text-xs border border-white/5 active:scale-95 transition-all group">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#3E6AE1]"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                                        </button>
                                    </div>
                                    <button
                                        onClick={handleSend}
                                        disabled={!aiMessage.trim()}
                                        className="ml-auto px-4 lg:px-5 py-2 rounded-xl bg-[#3E6AE1] text-white text-[10px] lg:text-xs font-orbitron font-bold uppercase hover:bg-[#3457B1] disabled:opacity-30 disabled:hover:bg-[#3E6AE1] transition-all shadow-lg shadow-[#3E6AE1]/20"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isPaymentOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                    className="bg-black/60 backdrop-blur-3xl rounded-[32px] p-5 lg:p-6 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative"
                                >
                                    <button
                                        onClick={() => setIsPaymentOpen(false)}
                                        className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors"
                                    >
                                        <X size={14} />
                                    </button>
                                    <p className="text-white/40 text-[9px] lg:text-[10px] font-orbitron font-bold uppercase tracking-widest mb-4">Payment Method</p>

                                    <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-white/20 transition-all cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-6 bg-white flex items-center justify-center text-black text-[8px] font-bold rounded-sm">VISA</div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] lg:text-xs font-orbitron font-bold text-white tracking-widest uppercase">Credit Card</span>
                                                <span className="text-[8px] lg:text-[9px] text-white/40 font-inter">3451 **** **** 7896</span>
                                            </div>
                                        </div>
                                        <div className="w-5 h-5 rounded-full border border-[#3E6AE1] flex items-center justify-center group-hover:bg-[#3E6AE1]/20 transition-all">
                                            <div className="w-2.5 h-2.5 bg-[#3E6AE1] rounded-full shadow-lg shadow-[#3E6AE1]/50" />
                                        </div>
                                    </div>

                                    <div className="mt-4 p-3 rounded-xl bg-[#3E6AE1]/10 border border-[#3E6AE1]/20">
                                        <p className="text-[8px] lg:text-[9px] text-[#3E6AE1] font-orbitron uppercase tracking-widest text-center">Auto-billing active</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showNotification && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 50, x: '-50%' }}
                        className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] px-8 py-4 bg-[#3E6AE1] rounded-[24px] shadow-[0_20px_40px_rgba(62,106,225,0.4)] flex items-center gap-4 border border-[#ffffff20]"
                    >
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                            <Bolt size={14} className="text-white" />
                        </div>
                        <span className="text-white font-orbitron font-bold text-xs uppercase tracking-widest">Your message has been sent</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <main>
                <CommercialHero />
                <Hero />
                <DurabilitySection />
                <UtilitySection />
                <SpecsSection />
                <InteriorSection />
                <TechnologySection />
            </main>
            <Footer />
        </div>
    );
}

export default App;

