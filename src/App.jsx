import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/banner/banner';

export default function App() {
  return <main className="overflow-x-hidden bg-white text-dark">
    <Hero />
    <Services/>
    <Banner />
  </main>
    
}
