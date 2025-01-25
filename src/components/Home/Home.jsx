import React from 'react'
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Banner from '../banner/banner';
import Subscribe from '../Subscribe/Subscribe';
import Banner2 from '../Banner/Banner2';
import Footer from '../Footer/Footer';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

export default function Home() {
  return (
  <>
  <Hero />
    <Services/>
    <Banner/>
    <Subscribe />
    <Banner2 />
    <Footer /></>
  )
}
