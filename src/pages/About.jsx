import SEO from "../components/SEO";
import { ShieldCheck, History, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="आमच्याबद्दल (About Us) | Shri Shambho Krushi Seva Kendra"
        description="जाणून घ्या श्री शंभो कृषी सेवा केंद्र, देवसिंगा यांच्याबद्दल. ५० पेक्षा अधिक गावांना विश्वासाने सेवा देणारे कृषी केंद्र."
        path="/about"
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
            आमच्याबद्दल
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
            श्री शंभो कृषी सेवा केंद्र हे केवळ एक दुकान नसून, परिसरातील
            शेतकऱ्यांच्या प्रगतीसाठी कटिबद्ध असलेले एक विश्वसनीय व्यासपीठ आहे.
          </motion.p>
        </div>
      </div>

      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              className="relative rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] h-[500px] group border-8 border-[var(--color-brand-bg)]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/assets/exterior_1.png"
                alt="Shop Exterior"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/60 to-transparent"></div>
              <h3 className="absolute bottom-8 left-8 text-3xl font-bold font-marathi text-white">
                आमची मुख्य इमारत
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold font-marathi text-[#0B132B] mb-8 leading-tight">
                शेतकऱ्यांच्या विश्वासाचा
                <br />
                <span className="text-[var(--color-brand-green)]">
                  अविरत प्रवास
                </span>
              </h2>
              <p className="text-gray-600 font-marathi text-xl leading-relaxed mb-8">
                बालाजी नगर, देवसिंगा (ता. तुळजापूर) येथे स्थित असलेले आमचे दुकान
                गेल्या अनेक वर्षांपासून परिसरातील शेतकऱ्यांची अविरत सेवा करत
                आहे. सुरुवातीला एका छोट्या दुकानापासून सुरु झालेला हा प्रवास आज
                ५० पेक्षा अधिक गावांच्या विश्वासाचे प्रतीक बनला आहे.
              </p>
              <p className="text-gray-600 font-marathi text-xl leading-relaxed mb-8">
                आम्ही शेतकऱ्यांना केवळ बियाणे किंवा खते विकत नाही, तर त्यांच्या
                पिकांचे उत्पादन कसे वाढेल यासाठी मोफत आणि योग्य मार्गदर्शन करतो.
              </p>
              <div className="flex gap-4">
                <div className="bg-[var(--color-brand-bg)] px-6 py-4 rounded-2xl border border-gray-100">
                  <div className="text-3xl font-black text-[var(--color-brand-yellow)] mb-1">
                    ५०००+
                  </div>
                  <div className="text-sm font-bold font-marathi text-gray-500 uppercase tracking-wide">
                    शेतकरी
                  </div>
                </div>
                <div className="bg-[var(--color-brand-bg)] px-6 py-4 rounded-2xl border border-gray-100">
                  <div className="text-3xl font-black text-[var(--color-brand-green)] mb-1">
                    ८+ वर्षे
                  </div>
                  <div className="text-sm font-bold font-marathi text-gray-500 uppercase tracking-wide">
                    अनुभव
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="bg-[var(--color-brand-bg)] p-12 rounded-[2rem] shadow-sm border border-gray-100 text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition duration-500"
            >
              <div className="w-24 h-24 bg-green-100 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8">
                <ShieldCheck
                  className="text-[var(--color-brand-green)]"
                  size={48}
                />
              </div>
              <h3 className="text-3xl font-bold font-marathi text-[#0B132B] mb-4">
                १००% पारदर्शकता
              </h3>
              <p className="text-gray-600 font-marathi text-lg leading-relaxed">
                उत्पादनांच्या दर्जामध्ये आणि किमतीमध्ये आम्ही पूर्ण पारदर्शकता
                ठेवतो. शेतकऱ्यांची फसवणूक टाळणे हे आमचे प्रथम कर्तव्य आहे.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="bg-[var(--color-brand-bg)] p-12 rounded-[2rem] shadow-sm border border-gray-100 text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition duration-500"
            >
              <div className="w-24 h-24 bg-yellow-100 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8">
                <Users className="text-[var(--color-brand-yellow)]" size={48} />
              </div>
              <h3 className="text-3xl font-bold font-marathi text-[#0B132B] mb-4">
                शेतकरी आमचा देव
              </h3>
              <p className="text-gray-600 font-marathi text-lg leading-relaxed">
                आमचा प्रत्येक निर्णय हा शेतकऱ्यांच्या भल्यासाठी असतो. त्यांना
                उत्तम प्रतीचे उत्पादन वेळेवर उपलब्ध करून देणे हे आमचे ध्येय आहे.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="bg-[var(--color-brand-bg)] p-12 rounded-[2rem] shadow-sm border border-gray-100 text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition duration-500"
            >
              <div className="w-24 h-24 bg-blue-100 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8">
                <History className="text-blue-600" size={48} />
              </div>
              <h3 className="text-3xl font-bold font-marathi text-[#0B132B] mb-4">
                अविरत सेवा
              </h3>
              <p className="text-gray-600 font-marathi text-lg leading-relaxed">
                शेतीचा हंगाम असो वा नसो, आम्ही नेहमीच शेतकऱ्यांच्या सेवेसाठी
                उपलब्ध असतो. वेळेवर खते आणि औषधे पोहोचवण्याची आमची हमी.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
