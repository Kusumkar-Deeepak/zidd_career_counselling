import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { engineeringPlacements, diplomaPlacements } from '../data/placements';
import { LanguageContext } from '../context/LanguageContext';

const Placements = () => {
  const [activeTab, setActiveTab] = useState('engineering');
  const { language } = useContext(LanguageContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const placements = activeTab === 'engineering' 
    ? engineeringPlacements
    : diplomaPlacements;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">
            {language === 'english' ? 'Our Successful Students' : 'आमचे यशस्वी विद्यार्थी'}
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('engineering')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === 'engineering'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'
              } transition duration-300`}
            >
              {language === 'english' ? 'Engineering' : 'अभियांत्रिकी'}
            </button>
            <button
              onClick={() => setActiveTab('diploma')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === 'diploma'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'
              } transition duration-300`}
            >
              {language === 'english' ? 'Diploma' : 'डिप्लोमा'}
            </button>
          </div>
        </div>

        {/* Placements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {placements.length > 0 ? (
              placements.map((student) => (
                <motion.div
                  key={student.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <div className="p-4 flex flex-col items-center">
                    {/* Student Image */}
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-100 mb-3">
                      <img
                        src={student.image}
                        alt={language === 'english' ? student.college.english : student.college.marathi}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* College Name */}
                    <h3 className="text-md font-semibold text-gray-800 text-center mb-1">
                      {language === 'english' ? student.college.english : student.college.marathi}
                    </h3>
                    
                    {/* Branch Name */}
                    <p className="text-sm text-indigo-600 text-center">
                      {language === 'english' ? student.branch.english : student.branch.marathi}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={fadeIn}
                className="col-span-full text-center py-12"
              >
                <p className="text-gray-500">
                  {language === 'english'
                    ? 'No placement data available for this category.'
                    : 'या श्रेणीसाठी कोणतेही प्लेसमेंट डेटा उपलब्ध नाही.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Placements;