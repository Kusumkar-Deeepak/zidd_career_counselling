import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { engineeringTestimonials, diplomaTestimonials } from '../data/testomonials';
import { LanguageContext } from '../context/LanguageContext';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [activeTab, setActiveTab] = useState('engineering');
  const [filteredTestimonials, setFilteredTestimonials] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const allTestimonials = activeTab === 'engineering' 
      ? engineeringTestimonials 
      : diplomaTestimonials;
    
    const filtered = allTestimonials.filter(
      testimonial => testimonial.language === language
    );
    
    setFilteredTestimonials(filtered);
  }, [activeTab, language]);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">
            {language === 'english' ? 'Student Success Stories' : 'विद्यार्थ्यांच्या यशाच्या गोष्टी'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'english'
              ? 'How we helped students get into top diploma and engineering colleges'
              : 'आम्ही विद्यार्थ्यांना अव्वल डिप्लोमा आणि अभियांत्रिकी महाविद्यालयांमध्ये प्रवेश मिळविण्यात कशी मदत केली'}
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('engineering')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'engineering'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              {language === 'english' ? 'Engineering' : 'अभियांत्रिकी'}
            </button>
            <button
              onClick={() => setActiveTab('diploma')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'diploma'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              {language === 'english' ? 'Diploma' : 'डिप्लोमा'}
            </button>
          </div>
        </div>

        {filteredTestimonials.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">
              {language === 'english'
                ? 'No testimonials available for this category.'
                : 'या श्रेणीसाठी कोणतेही प्रतिक्रिया उपलब्ध नाहीत.'}
            </p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.course}, {testimonial.college} ({testimonial.year})
                      </p>
                    </div>
                  </div>
                  <motion.p 
                    className="text-gray-700 italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{testimonial.message}"
                  </motion.p>
                  <div className="mt-4 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;