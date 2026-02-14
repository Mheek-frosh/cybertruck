import React from 'react';
import Navbar from './components/Navbar';
import CommercialHero from './components/CommercialHero';
import Hero from './components/Hero';
import './index.css';

function App() {
    return (
        <div className="bg-white min-h-screen text-[#111827]">
            <Navbar />
            <main>
                <CommercialHero />
                <Hero />
            </main>
        </div>
    );
}

export default App;
