import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { LanguageContext } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const navigate = useNavigate();
  const isAchieversPage = location.pathname === '/achievers';

  const handleScrollToSection = (hash) => {
    if (location.pathname !== '/') {
      // If we're not on the home page, navigate to home first
      navigate('/');
      // Wait for the navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false); // Close mobile menu if open
  };

  const navLinks = [
    { hash: '#hero-section', text: { english: 'Home', marathi: 'मुख्यपृष्ठ' } },
    { hash: '#services', text: { english: 'Our Programs', marathi: 'आमचे प्रोग्राम' } },
    { hash: '#testimonials', text: { english: 'Success Stories', marathi: 'यशोगाथा' } },
    { hash: '#contact', text: { english: 'Contact', marathi: 'संपर्क' } },
    { path: '/achievers', text: { english: 'Our Achievers', marathi: 'आमचे यशस्वी विद्यार्थी' } }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="Zidd Academy"
              />
              <span className="ml-2 text-xl font-bold text-indigo-600">
                Zidd Academy
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {!isAchieversPage ? (
              <>
                {navLinks.slice(0, -1).map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleScrollToSection(link.hash)}
                    className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {language === 'english' ? link.text.english : link.text.marathi}
                  </button>
                ))}
              </>
            ) : (
              <Link
                to="/"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {language === 'english' ? 'Home' : 'मुख्यपृष्ठ'}
              </Link>
            )}
            
            <Link
              to="/achievers"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {language === 'english' ? 'Our Achievers' : 'आमचे यशस्वी विद्यार्थी'}
            </Link>

            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {language === 'english' ? 'मराठी' : 'English'}
            </button>
            
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
            >
              {language === 'english' ? 'Join Career Counselling' : 'करिअर काउन्सेलिंगमध्ये सामील व्हा'}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {!isAchieversPage ? (
            <>
              {navLinks.slice(0, -1).map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleScrollToSection(link.hash)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
                >
                  {language === 'english' ? link.text.english : link.text.marathi}
                </button>
              ))}
            </>
          ) : (
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              {language === 'english' ? 'Home' : 'मुख्यपृष्ठ'}
            </Link>
          )}
          
          <Link
            to="/achievers"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            {language === 'english' ? 'Our Achievers' : 'आमचे यशस्वी विद्यार्थी'}
          </Link>

          <button
            onClick={toggleLanguage}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
          >
            {language === 'english' ? 'मराठी' : 'English'}
          </button>
          
          <a
            href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-indigo-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition duration-300"
          >
            {language === 'english' ? 'Join Career Counselling' : 'करिअर काउन्सेलिंगमध्ये सामील व्हा'}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;