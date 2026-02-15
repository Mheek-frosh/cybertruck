import React from 'react';
import Navbar from './components/Navbar';
import CommercialHero from './components/CommercialHero';
import Hero from './components/Hero';
import DurabilitySection from './components/DurabilitySection';
import UtilitySection from './components/UtilitySection';
import SpecsSection from './components/SpecsSection';
import InteriorSection from './components/InteriorSection';
import TechnologySection from './components/TechnologySection';
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
