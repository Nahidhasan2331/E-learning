import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/banner/banner';
import Subscribe from './components/Subscribe/Subscribe';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/Footer/Footer';

export default function App() {
  return <main className="overflow-x-hidden bg-white text-dark">
    <Hero />
    <Services/>
    <Banner />
    <Subscribe />
    <Banner2 />
    <Footer />
  </main>
    
}
