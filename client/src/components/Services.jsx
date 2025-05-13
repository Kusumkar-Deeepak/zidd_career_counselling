import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from '../context/LanguageContext';

const Services = () => {
  const { language } = useContext(LanguageContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: {
        english: 'After 10th Diploma Guidance',
        marathi: '१०वी नंतर डिप्लोमा मार्गदर्शन'
      },
      description: {
        english: 'Expert guidance for choosing the right diploma branch (Engineering, IT, Pharmacy etc.) with best polytechnic colleges in Maharashtra.',
        marathi: 'महाराष्ट्रातील सर्वोत्तम पॉलिटेक्निक कॉलेजांसह योग्य डिप्लोमा शाखा (अभियांत्रिकी, आयटी, फार्मसी इ.) निवडण्यासाठी तज्ञ मार्गदर्शन.'
      },
      icon: '🎓',
      benefits: {
        english: [
          'Direct entry to 2nd year engineering after diploma',
          'Practical skill development',
          'Faster career entry'
        ],
        marathi: [
          'डिप्लोमा नंतर थेट दुसऱ्या वर्षी अभियांत्रिकीत प्रवेश',
          'व्यावहारिक कौशल्य विकास',
          'वेगवान करिअर सुरुवात'
        ]
      }
    },
    {
      title: {
        english: 'After 12th Engineering Admissions',
        marathi: '१२वी नंतर अभियांत्रिकी प्रवेश'
      },
      description: {
        english: 'Complete support for JEE, MHT-CET, and state-level engineering entrance exams with college selection strategy.',
        marathi: 'कॉलेज निवडणूक रणनीतीसह JEE, MHT-CET आणि राज्यस्तरीय अभियांत्रिकी प्रवेश परीक्षांसाठी संपूर्ण समर्थन.'
      },
      icon: '⚙️',
      benefits: {
        english: [
          'Top engineering colleges in Maharashtra',
          'Branch selection based on aptitude',
          'Scholarship guidance'
        ],
        marathi: [
          'महाराष्ट्रातील अव्वल अभियांत्रिकी महाविद्यालये',
          'योग्यतेवर आधारित शाखा निवड',
          'शिष्यवृत्ती मार्गदर्शन'
        ]
      }
    },
    {
      title: {
        english: 'Diploma to Degree Pathway',
        marathi: 'डिप्लोमा ते पदवी मार्ग'
      },
      description: {
        english: 'Seamless transition from diploma to engineering degree through lateral entry with credit transfer benefits.',
        marathi: 'क्रेडिट हस्तांतरणाच्या फायद्यांसह डिप्लोमावरून अभियांत्रिकी पदवीकडे सहज संक्रमण.'
      },
      icon: '📈',
      benefits: {
        english: [
          'Direct 2nd year engineering admission',
          'Time and cost saving',
          'Better job opportunities'
        ],
        marathi: [
          'थेट दुसऱ्या वर्षी अभियांत्रिकीत प्रवेश',
          'वेळ आणि खर्च वाचवणे',
          'उत्तम नोकरीच्या संधी'
        ]
      }
    },
    {
      title: {
        english: 'Career Roadmap',
        marathi: 'करिअर रोडमॅप'
      },
      description: {
        english: 'Personalized career planning with aptitude tests to identify ideal engineering/diploma paths based on skills and interests.',
        marathi: 'कौशल्य आणि रुचींवर आधारित आदर्श अभियांत्रिकी/डिप्लोमा मार्ग ओळखण्यासाठी वैयक्तिकृत करिअर नियोजन.'
      },
      icon: '🗺️',
      benefits: {
        english: [
          'Aptitude and skill assessment',
          'Industry demand analysis',
          'Long-term career planning'
        ],
        marathi: [
          'योग्यता आणि कौशल्य मूल्यांकन',
          'उद्योग मागणी विश्लेषण',
          'दीर्घकालीन करिअर नियोजन'
        ]
      }
    }
  ];

  return (
    <section id="services" ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">
            {language === 'english' ? 'Our Specialized Guidance' : 'आमचे विशेष मार्गदर्शन'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'english'
              ? 'Focused support for diploma and engineering aspirants in Maharashtra'
              : 'महाराष्ट्रातील डिप्लोमा आणि अभियांत्रिकी उमेदवारांसाठी केंद्रित समर्थन'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                {language === 'english' ? service.title.english : service.title.marathi}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'english' ? service.description.english : service.description.marathi}
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-indigo-600 mb-2">
                  {language === 'english' ? 'Key Benefits:' : 'मुख्य फायदे:'}
                </h4>
                <ul className="space-y-2">
                  {(language === 'english' ? service.benefits.english : service.benefits.marathi).map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;