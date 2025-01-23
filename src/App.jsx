import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero/hero';
import Services from './components/Services/Services';

export default function App() {
  return <main className="overflow-x-hidden bg-white text-dark">
    <Hero />
    <Services/>
  </main>
    
}
