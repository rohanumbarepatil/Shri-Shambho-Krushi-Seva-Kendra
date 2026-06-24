import SEO from "../components/SEO";
import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="overflow-hidden">
      <SEO
        title="संपर्क (Contact Us) | Shri Shambho Krushi Seva Kendra"
        description="देवसिंगा (तुळजापूर) मधील श्री शंभो कृषी सेवा केंद्राशी संपर्क साधा. पत्ता, फोन नंबर आणि गुगल मॅप."
        path="/contact"
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
            संपर्क साधा
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
            आपल्याला कोणत्याही उत्पादनाबद्दल माहिती हवी असल्यास किंवा प्रत्यक्ष
            भेट द्यायची असल्यास खालील माहितीचा वापर करा.
          </motion.p>
        </div>
      </div>

      <div className="py-32 bg-[var(--color-brand-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            {/* Contact Info Side */}
            <div className="p-10 sm:p-16 flex flex-col justify-center">
              <h2 className="text-4xl font-extrabold font-marathi text-[#0B132B] mb-12">
                आमचा पत्ता आणि वेळ
              </h2>

              <div className="space-y-10 mb-14">
                <div className="flex items-start gap-6 group">
                  <div className="bg-yellow-50 group-hover:bg-[var(--color-brand-yellow)] transition duration-500 p-5 rounded-[1.5rem] shrink-0 mt-1">
                    <MapPin
                      className="text-[var(--color-brand-yellow)] group-hover:text-[#0B132B] transition duration-500"
                      size={32}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-marathi text-[#0B132B] mb-3">
                      पत्ता (Address)
                    </h3>
                    <p className="text-gray-600 font-marathi text-lg leading-relaxed">
                      श्री शंभो कृषी सेवा केंद्र,
                      <br />
                      बालाजी नगर, देवसिंगा (तुळ),
                      <br />
                      ता. तुळजापूर, जि. धाराशिव (उस्मानाबाद) - 413601
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-green-50 group-hover:bg-[var(--color-brand-green)] transition duration-500 p-5 rounded-[1.5rem] shrink-0 mt-1">
                    <Clock
                      className="text-[var(--color-brand-green)] group-hover:text-white transition duration-500"
                      size={32}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-marathi text-[#0B132B] mb-3">
                      वेळ (Business Hours)
                    </h3>
                    <p className="text-gray-600 font-marathi text-lg">
                      सोमवार ते रविवार: <br />
                      सकाळी ०८:०० ते रात्री ०९:००
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <a
                  href="tel:+919850011530"
                  className="w-full flex flex-col items-center justify-center gap-1 bg-gray-50 text-[#0B132B] py-4 rounded-2xl font-bold hover:bg-gray-100 border border-gray-200 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 text-xl font-marathi">
                    <Phone size={24} /> मोबाईल
                  </div>
                  <span className="font-english text-2xl tracking-wide">
                    9850011530
                  </span>
                </a>
                <a
                  href="https://wa.me/919850011530?text=नमस्कार,%20मला%20श्री%20शंभो%20कृषी%20सेवा%20केंद्र%20बद्दल%20माहिती%20हवी%20आहे."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex flex-col items-center justify-center gap-1 bg-[#25D366] text-white py-4 rounded-2xl font-bold hover:bg-green-600 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 text-xl font-marathi">
                    <MessageCircle size={24} /> WhatsApp
                  </div>
                  <span className="font-english text-2xl tracking-wide">
                    9850011530
                  </span>
                </a>
                <a
                  href="https://maps.app.goo.gl/57vkm8KgyVmpqTQ88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[var(--color-brand-yellow)] text-[#0B132B] py-5 rounded-2xl font-bold font-marathi hover:bg-yellow-400 shadow-lg hover:shadow-xl transition-all text-xl hover:-translate-y-1"
                >
                  <Navigation size={26} />
                  रस्ता पहा (Google Maps)
                </a>
              </div>
            </div>

            {/* Map and Storefront Image Side */}
            <div className="relative h-[800px] lg:h-auto flex flex-col bg-gray-100">
              {/* Embed Google Map */}
              <div className="h-2/3 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15219.782806294713!2d76.171814!3d17.934204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5b7a1dfa29c73%3A0x6b107e0c4f8263cf!2sShri%20Shambho%20Krushi%20Seva%20Kendra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="Google Maps Location"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Storefront Image */}
              <div className="h-1/3 w-full relative overflow-hidden group">
                <img
                  src="/assets/exterior_1.png"
                  alt="Shop Front"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-bold font-marathi text-white">
                    हे आमचे प्रत्यक्ष दुकान आहे.
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
