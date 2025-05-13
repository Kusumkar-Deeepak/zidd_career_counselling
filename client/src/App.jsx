import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import PlacementsPage from './pages/PlacementsPage';
import { LanguageContext } from './context/LanguageContext'; // Moved to separate file

function App() {
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'marathi' : 'english');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/achievers" element={<PlacementsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;