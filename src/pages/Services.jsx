import SEO from '../components/SEO';
import { Leaf, FlaskConical, CloudRain, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="overflow-hidden">
      <SEO 
        title="आमच्या सेवा (Services) | Shri Shambho Krushi Seva Kendra"
        description="शेतकऱ्यांसाठी मोफत कृषी मार्गदर्शन, माती परीक्षण सल्ला आणि पीक नियोजन सेवा."
        path="/services"
      />
      
      {/* Page Header */}
      <div className="bg-[#0B132B] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-green)]/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold font-marathi mb-6"
          >
            आमच्या सेवा
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1.5 bg-[var(--color-brand-green)] mx-auto rounded-full mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 font-marathi max-w-3xl mx-auto leading-relaxed"
          >
            आम्ही फक्त कृषी उत्पादने विकत नाही, तर शेतकऱ्यांच्या पिकांचे उत्पादन वाढवण्यासाठी आवश्यक असलेले सर्व मार्गदर्शन मोफत देतो.
          </motion.p>
        </div>
      </div>

      <div className="pt-20 pb-32 bg-[var(--color-brand-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="bg-white p-10 sm:p-12 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col sm:flex-row gap-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-green)] transition duration-500">
                <Leaf className="text-[var(--color-brand-green)] group-hover:text-white transition duration-500" size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-bold font-marathi text-[#0B132B] mb-4">पीक संरक्षण मार्गदर्शन</h2>
                <p className="text-gray-600 font-marathi text-lg leading-relaxed">
                  पिकांवर येणारी कीड, रोग आणि बुरशी ओळखणे आणि त्यावर अचूक औषधांची फवारणी करण्याचा सल्ला आम्ही देतो. योग्य वेळी योग्य औषध फवारल्याने खर्च वाचतो आणि पीक निरोगी राहते.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-white p-10 sm:p-12 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col sm:flex-row gap-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-yellow-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-yellow)] transition duration-500">
                <FlaskConical className="text-[var(--color-brand-yellow)] group-hover:text-[#0B132B] transition duration-500" size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-bold font-marathi text-[#0B132B] mb-4">खत व्यवस्थापन</h2>
                <p className="text-gray-600 font-marathi text-lg leading-relaxed">
                  कोणत्या पिकाला, कोणत्या अवस्थेत कोणते खत देणे आवश्यक आहे, याचे अचूक वेळापत्रक आम्ही शेतकऱ्यांना देतो. यामुळे खतांचा योग्य वापर होऊन उत्पन्नात भर पडते.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-10 sm:p-12 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col sm:flex-row gap-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition duration-500">
                <CloudRain className="text-blue-600 group-hover:text-white transition duration-500" size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-bold font-marathi text-[#0B132B] mb-4">हंगामी पिकांचे नियोजन</h2>
                <p className="text-gray-600 font-marathi text-lg leading-relaxed">
                  खरीप आणि रब्बी हंगामासाठी कोणत्या वाणाची निवड करावी, पेरणीची पद्धत आणि मशागत कशी करावी याचे शास्त्रशुद्ध मार्गदर्शन.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-10 sm:p-12 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col sm:flex-row gap-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition duration-500">
                <Sun className="text-orange-500 group-hover:text-white transition duration-500" size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-bold font-marathi text-[#0B132B] mb-4">उन्हाळी पिकांचे नियोजन</h2>
                <p className="text-gray-600 font-marathi text-lg leading-relaxed">
                  उन्हाळ्यात कमी पाण्यात येणाऱ्या पिकांची निवड आणि त्यांचे व्यवस्थापन यावर विशेष लक्ष देऊन शेतकऱ्यांना मदत केली जाते.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
