import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from '../context/LanguageContext';

const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <div id='hero-section' ref={ref} className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6">
            {language === 'english'
              ? 'Your Engineering & Diploma Career Pathway'
              : 'तुमचा अभियांत्रिकी आणि डिप्लोमा करिअर मार्ग'}
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {language === 'english'
              ? 'Specialized guidance for Maharashtra students pursuing diploma after 10th or engineering after 12th/diploma'
              : '१०वी नंतर डिप्लोमा किंवा १२वी/डिप्लोमा नंतर अभियांत्रिकी करणाऱ्या महाराष्ट्रातील विद्यार्थ्यांसाठी विशेष मार्गदर्शन'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9HUlWSKUKLz4OcXYztqNCFjQMkLWI91OcRzYIOtb8qLk2IA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              {language === 'english' ? 'Free Career Consultation' : 'विनामूल्य करिअर सल्ला'}
            </a>
            <a
              href="#services"
              className="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-3 px-6 border border-indigo-600 rounded-lg transition duration-300"
            >
              {language === 'english' ? 'Our Programs' : 'आमचे प्रोग्राम'}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;