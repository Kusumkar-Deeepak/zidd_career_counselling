import React, { useContext } from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import { LanguageContext } from '../context/LanguageContext';

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <section id="hero-section">
        <HeroSection />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;