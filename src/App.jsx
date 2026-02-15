import React from 'react';
import Navbar from './components/Navbar';
import CommercialHero from './components/CommercialHero';
import Hero from './components/Hero';
import DurabilitySection from './components/DurabilitySection';
import SpecsSection from './components/SpecsSection';
import InteriorSection from './components/InteriorSection';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <main>
                <CommercialHero />
                <Hero />
                <DurabilitySection />
                <SpecsSection />
                <InteriorSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;
