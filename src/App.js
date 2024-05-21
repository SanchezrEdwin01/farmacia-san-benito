import React, { Component, useRef } from 'react';
import CustomNavbar from './components/CustomNavbar';
import ImageCarousel from './components/ImageCarousel';
import InfoSection from './components/InfoSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import MyMap from './components/Map';
import './App.css';

function App() {
  const contactUsRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToContactUs = () => {
    contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <CustomNavbar scrollToContactUs={scrollToContactUs} scrollToHome={scrollToHome} />
      <div ref={homeRef}>
        <ImageCarousel />
      </div>
      <InfoSection />
      <div ref={contactUsRef}>
        <ContactUs />
      </div>
      <MyMap />
      <Footer scrollToContactUs={scrollToContactUs} scrollToHome={scrollToHome} />
    </div>
  );
}

export default App;
