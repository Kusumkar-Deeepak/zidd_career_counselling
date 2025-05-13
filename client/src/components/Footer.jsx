import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useContext(LanguageContext);
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
  };

  const navLinks = [
    { hash: '#hero-section', text: { english: 'Home', marathi: 'मुख्यपृष्ठ' } },
    { hash: '#services', text: { english: 'Our Programs', marathi: 'आमचे प्रोग्राम' } },
    { hash: '#testimonials', text: { english: 'Success Stories', marathi: 'यशोगाथा' } },
    { hash: '#contact', text: { english: 'Contact', marathi: 'संपर्क' } },
    { path: '/achievers', text: { english: 'Our Achievers', marathi: 'आमचे यशस्वी विद्यार्थी' } }
  ];

  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Zidd Career Counselling Academy
            </h3>
            <p className="text-gray-300">
              {language === 'english'
                ? 'Empowering students to make informed career decisions.'
                : 'विद्यार्थ्यांना माहितीपूर्ण करिअर निर्णय घेण्यास सक्षम करणे.'}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'english' ? 'Quick Links' : 'द्रुत लिंक'}
            </h4>
            <ul className="space-y-2">
              {!isAchieversPage ? (
                <>
                  {navLinks.slice(0, -1).map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleScrollToSection(link.hash)}
                        className="text-gray-300 hover:text-white transition duration-300 text-left"
                      >
                        {language === 'english' ? link.text.english : link.text.marathi}
                      </button>
                    </li>
                  ))}
                </>
              ) : (
                <li>
                  <button
                    onClick={() => navigate('/')}
                    className="text-gray-300 hover:text-white transition duration-300 text-left"
                  >
                    {language === 'english' ? 'Home' : 'मुख्यपृष्ठ'}
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => navigate('/achievers')}
                  className="text-gray-300 hover:text-white transition duration-300 text-left"
                >
                  {language === 'english' ? 'Our Achievers' : 'आमचे यशस्वी विद्यार्थी'}
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'english' ? 'Contact Info' : 'संपर्क माहिती'}
            </h4>
            <address className="not-italic text-gray-300">
              <p>123 Education Street</p>
              <p>Pune, Maharashtra 411001</p>
              <p className="mt-2">Email: info@ziddcareer.com</p>
              <p>Phone: +91 9876543210</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'english' ? 'Join Our Counselling' : 'आमच्या काउन्सेलिंगमध्ये सामील व्हा'}
            </h4>
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              {language === 'english' ? 'Register Now' : 'आता नोंदणी करा'}
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Zidd Career Counselling Academy.{' '}
            {language === 'english' ? 'All rights reserved.' : 'सर्व हक्क राखीव.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;