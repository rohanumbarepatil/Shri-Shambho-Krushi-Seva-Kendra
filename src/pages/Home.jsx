import SEO from '../components/SEO';
import { Phone, MapPin, CheckCircle2, MessageCircle, Star, Navigation, Sprout, Droplets, Bug, Crosshair, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const categories = [
    {
      id: 'seeds',
      title: 'बियाणे (Seeds)',
      icon: <Sprout className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform duration-500" />,
      desc: 'सर्व प्रकारच्या पिकांचे आणि भाजीपाल्याचे नामांकित कंपन्यांचे दर्जेदार बियाणे.',
      benefits: ['१००% उगवण क्षमतेची हमी', 'सर्व प्रमुख ब्रँड्सचे वाण', 'वाजवी दर'],
      bgClass: 'bg-green-50',
      iconBg: 'bg-green-100',
      accentBorder: 'group-hover:border-green-300',
      accentShadow: 'group-hover:shadow-[0_20px_50px_rgba(22,101,52,0.15)]',
      imgPosition: 'object-[center_20%]'
    },
    {
      id: 'fertilizers',
      title: 'खते (Fertilizers)',
      icon: <Droplets className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform duration-500" />,
      desc: 'युरिया, डीएपी, मिश्र खते आणि सर्व प्रकारची विद्राव्य खते.',
      benefits: ['योग्य खतांचा सल्ला', 'मोठ्या प्रमाणावर साठा', '१००% अस्सल'],
      bgClass: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      accentBorder: 'group-hover:border-blue-300',
      accentShadow: 'group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]',
      imgPosition: 'object-[left_center]'
    },
    {
      id: 'pesticides',
      title: 'कीटकनाशके (Pesticides)',
      icon: <Bug className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform duration-500" />,
      desc: 'अळीनाशक, मावा-तुडतुडे नियंत्रक आणि प्रभावी किटकनाशके.',
      benefits: ['किडींवर अचूक नियंत्रण', 'सर्वोत्तम कंपन्यांची औषधे', 'मोफत मार्गदर्शन'],
      bgClass: 'bg-red-50',
      iconBg: 'bg-red-100',
      accentBorder: 'group-hover:border-red-300',
      accentShadow: 'group-hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)]',
      imgPosition: 'object-[right_bottom]'
    },
    {
      id: 'medicines',
      title: 'कृषी औषधे (Medicines)',
      icon: <Crosshair className="w-10 h-10 text-purple-600 group-hover:scale-110 transition-transform duration-500" />,
      desc: 'बुरशीनाशके, टॉनिक्स आणि सर्व प्रकारची तणनाशके.',
      benefits: ['पिकाची झपाट्याने वाढ', 'तणांचा समूळ नाश', 'रोग प्रतिकारशक्ती'],
      bgClass: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      accentBorder: 'group-hover:border-purple-300',
      accentShadow: 'group-hover:shadow-[0_20px_50px_rgba(147,51,234,0.15)]',
      imgPosition: 'object-[center_top]'
    }
  ];

  const brands = [
    { name: 'UPL', color: 'border-orange-500 text-orange-600', bg: 'bg-orange-50 hover:bg-orange-500 hover:text-white' },
    { name: 'Bayer', color: 'border-blue-500 text-blue-600', bg: 'bg-blue-50 hover:bg-blue-500 hover:text-white' },
    { name: 'syngenta', color: 'border-green-600 text-green-700', bg: 'bg-green-50 hover:bg-green-600 hover:text-white' },
    { name: 'Dhanuka', color: 'border-red-600 text-red-600', bg: 'bg-red-50 hover:bg-red-600 hover:text-white' },
    { name: 'IFFCO', color: 'border-green-700 text-green-800', bg: 'bg-green-100 hover:bg-green-700 hover:text-white' },
    { name: 'Coromandel', color: 'border-blue-700 text-blue-800', bg: 'bg-blue-50 hover:bg-blue-700 hover:text-white' },
    { name: 'Mahyco', color: 'border-yellow-500 text-yellow-700', bg: 'bg-yellow-50 hover:bg-yellow-500 hover:text-white' }
  ];

  return (
    <div className="overflow-hidden bg-[var(--color-brand-bg)]">
      <SEO 
        title="Shri Shambho Krushi Seva Kendra | Best Fertilizer Shop in Devisinga"
        description="तुळजापूर व अक्कलकोट जवळील सर्वोत्तम कृषी सेवा केंद्र. दर्जेदार बियाणे, खते आणि कीटकनाशके मिळण्याचे एकमेव ठिकाण - श्री शंभो कृषी सेवा केंद्र, देवसिंगा."
        path="/"
      />

      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/engagement_hero.png" 
            alt="Shri Shambho Krushi Seva Kendra Exterior" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Deep Navy to Green Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B]/95 via-[#0B132B]/80 to-[#166534]/50 z-10"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-[var(--color-brand-yellow)] text-yellow-900 font-bold text-sm font-marathi mb-8 shadow-[0_4px_20px_rgba(234,179,8,0.4)] tracking-wide">
              <Star size={16} fill="currentColor" />
              ५०+ गावांच्या शेतकऱ्यांचे हक्काचे ठिकाण
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-marathi leading-[1.1] mb-6 text-white drop-shadow-2xl">
              तुमच्या शेतीचा खरा सोबती -<br/>
              <span className="text-[var(--color-brand-yellow)]">श्री शंभो कृषी सेवा केंद्र!</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl font-marathi text-gray-200 mb-10 max-w-2xl drop-shadow-md leading-relaxed">
              दर्जेदार बियाणे, खते आणि औषधांचे देवसिंगा (तुळजापूर) मधील सर्वात विश्वसनीय ठिकाण.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5">
              <a href="tel:+91XXXXXXXXXX" className="flex items-center justify-center gap-3 bg-[var(--color-brand-green)] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all duration-300 hover:scale-105 active:scale-95 text-lg font-marathi shadow-[0_8px_30px_rgba(22,101,52,0.6)]">
                <Phone size={24} />
                आम्हाला कॉल करा
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95 text-lg font-marathi shadow-xl">
                <MessageCircle size={24} />
                WhatsApp वर संपर्क
              </a>
              <a href="https://maps.app.goo.gl/57vkm8KgyVmpqTQ88" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 glass-dark text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 text-lg font-marathi sm:hidden lg:flex">
                <Navigation size={24} />
                रस्ता पहा
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Farmer Trust Counter */}
      <section className="bg-white py-16 relative z-30 shadow-2xl -mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-6xl rounded-2xl border border-gray-100">
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="p-4 rounded-2xl hover:bg-gray-50 transition">
              <div className="text-4xl md:text-5xl font-black text-[var(--color-brand-green)] mb-2">५०००+</div>
              <div className="text-gray-900 font-marathi font-bold text-lg">समाधानी शेतकरी</div>
            </motion.div>
            <motion.div variants={fadeUp} className="p-4 rounded-2xl hover:bg-gray-50 transition">
              <div className="text-4xl md:text-5xl font-black text-[var(--color-brand-yellow)] mb-2">५००+</div>
              <div className="text-gray-900 font-marathi font-bold text-lg">उत्पादने उपलब्ध</div>
            </motion.div>
            <motion.div variants={fadeUp} className="p-4 rounded-2xl hover:bg-gray-50 transition">
              <div className="text-4xl md:text-5xl font-black text-[#0B132B] mb-2">५०+</div>
              <div className="text-gray-900 font-marathi font-bold text-lg">गावांमध्ये सेवा</div>
            </motion.div>
            <motion.div variants={fadeUp} className="p-4 rounded-2xl hover:bg-gray-50 transition">
              <div className="text-4xl md:text-5xl font-black text-[var(--color-brand-green)] mb-2">५+</div>
              <div className="text-gray-900 font-marathi font-bold text-lg">वर्षांची अखंड सेवा</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Farmers Trust Us */}
      <section className="py-24 bg-[var(--color-brand-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold font-marathi text-[#0B132B] mb-6">शेतकऱ्यांचे हक्काचे ठिकाण</h2>
            <div className="w-24 h-1.5 bg-[var(--color-brand-green)] mx-auto rounded-full"></div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: '१००% अस्सल उत्पादने', desc: 'कोणतीही फसवणूक नाही, फक्त दर्जेदार आणि खात्रीशीर उत्पादने.' },
              { title: 'तज्ञांचे मार्गदर्शन', desc: 'पिकांच्या वाढीसाठी आणि रोग नियंत्रणासाठी मोफत योग्य सल्ला.' },
              { title: 'वाजवी दर', desc: 'शेतकऱ्यांच्या हिताचा विचार करून योग्य आणि पारदर्शक किंमत.' },
              { title: 'उत्पादनांची मोठी उपलब्धता', desc: 'सर्व नामांकित ब्रँड्सची खते आणि औषधे एकाच छताखाली.' },
              { title: 'शेतकऱ्यांचा विश्वास', desc: 'तुळजापूर आणि अक्कलकोट मधील अनेक शेतकऱ्यांची पसंती.' },
              { title: 'सोपे आणि मध्यवर्ती ठिकाण', desc: 'देवसिंगा (बालाजी नगर) येथे पोहोचण्यास अत्यंत सोपे.' }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300">
                <CheckCircle2 className="text-[var(--color-brand-green)] w-14 h-14 mb-6" />
                <h3 className="text-2xl font-bold font-marathi text-[#0B132B] mb-4">{feature.title}</h3>
                <p className="text-gray-600 font-marathi text-lg leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Categories Redesign */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-6">
            <motion.div className="text-center md:text-left" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-extrabold font-marathi text-[#0B132B] mb-6">आमची प्रमुख उत्पादने</h2>
              <div className="w-24 h-1.5 bg-[var(--color-brand-yellow)] md:ml-0 mx-auto rounded-full"></div>
            </motion.div>
            <Link to="/products" className="hidden md:inline-flex text-[var(--color-brand-green)] font-marathi font-bold hover:underline text-lg">
              सर्व उत्पादने पहा →
            </Link>
          </div>

          {/* Trust Enhancements */}
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-[var(--color-brand-green)] rounded-full font-bold text-xs shadow-sm border border-green-100">
              <ShieldCheck size={16} /> 100% अस्सल उत्पादने
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full font-bold text-xs shadow-sm border border-yellow-100">
              <Users size={16} /> 5000+ Farmers
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-xs shadow-sm border border-blue-100">
              <MapPin size={16} /> 50+ Villages
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {categories.map((cat) => (
              <motion.div key={cat.id} variants={fadeUp} className={`bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-2 border-transparent ${cat.accentBorder} ${cat.accentShadow} overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-3 relative`}>
                
                {/* Available In Store Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[var(--color-brand-green)] px-3 py-1 rounded-full text-[10px] font-black font-marathi shadow-md z-20 border border-green-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-green)] animate-pulse"></span>
                  दुकानात उपलब्ध
                </div>

                {/* Visual Header with authentic cropped interior image background */}
                <div className={`h-32 ${cat.bgClass} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-20 mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 ease-in-out transform group-hover:scale-110">
                    <img src="/assets/interior_1.png" alt="Shop Interior Texture" className={`w-full h-full object-cover ${cat.imgPosition}`} loading="lazy" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-0"></div>
                  
                  {/* Icon Badge */}
                  <div className={`relative z-10 w-20 h-20 ${cat.iconBg} rounded-2xl flex items-center justify-center shadow-lg transform translate-y-6 border-4 border-white transition-transform duration-500 group-hover:shadow-xl`}>
                    {cat.icon}
                  </div>
                </div>

                <div className="px-6 pt-12 pb-6 flex-grow flex flex-col justify-between bg-white relative z-10">
                  <div>
                    <h2 className="text-2xl font-bold font-marathi text-[#0B132B] mb-3 text-center group-hover:text-[var(--color-brand-green)] transition-colors">{cat.title}</h2>
                    <p className="text-gray-600 font-marathi text-sm mb-6 text-center leading-relaxed">{cat.desc}</p>
                    
                    {/* Key Benefits */}
                    <div className="space-y-2 mb-8 bg-gray-50 rounded-xl p-4 border border-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all duration-500">
                      {cat.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-green)] shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-marathi text-xs font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <a href={`https://wa.me/91XXXXXXXXXX?text=नमस्कार,%20मला%20${cat.title}%20बद्दल%20चौकशी%20करायची%20आहे.`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-xl font-bold font-marathi hover:bg-green-600 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 text-sm">
                    <MessageCircle size={18} />
                    WhatsApp चौकशी
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10 text-center md:hidden">
            <Link to="/products" className="inline-flex text-[var(--color-brand-green)] font-marathi font-bold hover:underline text-lg">
              सर्व उत्पादने पहा →
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Available */}
      <section className="py-20 bg-[var(--color-brand-bg)] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold font-marathi text-[#0B132B] mb-4">विश्वासातील अग्रगण्य कंपन्यांची उत्पादने</h2>
            <p className="text-xl text-gray-600 font-marathi max-w-2xl mx-auto">शेतकऱ्यांच्या विश्वासातील दर्जेदार कंपन्यांची उत्पादने</p>
            <div className="w-24 h-1.5 bg-[var(--color-brand-green)] mx-auto rounded-full mt-8"></div>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {brands.map((brand, idx) => (
              <motion.div key={idx} variants={fadeUp} className={`px-6 md:px-8 py-4 md:py-6 rounded-2xl border-2 ${brand.color} ${brand.bg} shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white group`}>
                <span className="text-xl md:text-2xl font-black tracking-wider uppercase font-english transition-colors duration-300">{brand.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Real Store (Business Authenticity) */}
      <section className="py-32 bg-[#0B132B] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-brand-green)]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-brand-yellow)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold font-marathi text-white mb-6">आमचे प्रत्यक्ष दुकान</h2>
            <p className="text-gray-300 font-marathi text-xl max-w-3xl mx-auto leading-relaxed">हे आमचे प्रत्यक्ष दुकान आहे. आम्ही केवळ ऑनलाईन नाही, तर प्रत्यक्ष आपल्या सेवेसाठी तत्पर आहोत. आपण कधीही दुकानाला भेट देऊ शकता.</p>
            <div className="w-24 h-1.5 bg-[var(--color-brand-yellow)] mx-auto mt-10 rounded-full"></div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gray-800">
              <img src="/assets/exterior_2.png" alt="Shop Exterior" className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold font-marathi text-white mb-2">दुकानाची इमारत</h3>
                <p className="text-[var(--color-brand-yellow)] font-marathi text-lg">देवसिंगा, तुळजापूर</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gray-800">
              <img src="/assets/interior_1.png" alt="Shop Interior" className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold font-marathi text-white mb-2">दुकानातील उत्पादने</h3>
                <p className="text-[var(--color-brand-yellow)] font-marathi text-lg">सर्व ब्रँड्स उपलब्ध</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Link to="/gallery" className="inline-flex items-center gap-3 bg-transparent border-2 border-[var(--color-brand-yellow)] text-[var(--color-brand-yellow)] px-10 py-5 rounded-2xl font-bold hover:bg-[var(--color-brand-yellow)] hover:text-[#0B132B] transition-all text-xl font-marathi hover:scale-105">
              संपूर्ण गॅलरी पहा
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Villages We Serve & Map */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-blue-50 text-blue-700 font-bold text-sm font-marathi mb-8 border border-blue-100">
                <MapPin size={18} /> स्थानिक सेवा
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-marathi text-[#0B132B] mb-8 leading-tight">आमची सेवा असलेली गावे</motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 font-marathi mb-12 text-xl leading-relaxed">
                आम्ही प्रामुख्याने <strong className="text-[#0B132B]">देवसिंगा, तुळजापूर आणि अक्कलकोट</strong> परिसरातील ५० पेक्षा अधिक गावांना कृषी सेवा पुरवतो. आमच्या केंद्रामध्ये परिसरातील सर्व शेतकरी विश्वासाने येतात आणि दर्जेदार उत्पादने घेतात.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-14">
                {['देवसिंगा', 'तुळजापूर', 'अक्कलकोट', 'नळदुर्ग', 'मैंदर्गी', 'आणि इतर ५०+ गावे'].map((village, idx) => (
                  <span key={idx} className="bg-[var(--color-brand-bg)] text-[#0B132B] px-6 py-3 rounded-2xl font-marathi font-bold border border-gray-200 shadow-sm">
                    {village}
                  </span>
                ))}
              </motion.div>

              <motion.a variants={fadeUp} href="https://maps.app.goo.gl/57vkm8KgyVmpqTQ88" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[var(--color-brand-yellow)] text-[#0B132B] px-10 py-5 rounded-2xl font-bold hover:bg-yellow-400 transition-all font-marathi shadow-[0_10px_30px_rgba(234,179,8,0.4)] text-xl hover:scale-105 active:scale-95">
                <Navigation size={26} />
                रस्ता पहा (Google Maps)
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="h-[600px] bg-gray-200 rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative border-8 border-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Reviews Showcase */}
      <section className="py-32 bg-[var(--color-brand-bg)] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-marathi text-[#0B132B] mb-6">शेतकऱ्यांच्या प्रतिक्रिया</h2>
            <div className="flex justify-center gap-2 mb-6 text-[var(--color-brand-yellow)]">
              <Star fill="currentColor" size={28} />
              <Star fill="currentColor" size={28} />
              <Star fill="currentColor" size={28} />
              <Star fill="currentColor" size={28} />
              <Star fill="currentColor" size={28} />
            </div>
            <p className="text-gray-600 font-marathi text-xl max-w-2xl mx-auto">Google वरील आमच्या ग्राहकांचा आणि शेतकरी मित्रांचा विश्वास</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { name: 'सुधीर भोसले', review: 'अस्सल खते आणि उत्कृष्ट मार्गदर्शन मिळण्याचे देवसिंगा मधील एकमेव ठिकाण. इथले मालक खूप चांगला सल्ला देतात.' },
              { name: 'शेतकरी मित्र', review: 'इथे नेहमी चांगल्या दर्जाचे बियाणे मिळते आणि दुकानाचे मालक अतिशय नम्र आहेत. सर्व गावाला इथेच यायला आवडते.' },
              { name: 'प्रगतशील शेतकरी', review: 'कृषी औषधांबद्दल योग्य माहिती देतात. उत्पन्नात चांगली वाढ झाली. नक्की भेट द्या.' }
            ].map((review, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 relative hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 right-10 -mt-6 bg-[var(--color-brand-yellow)] text-[#0B132B] p-3 rounded-full shadow-lg">
                  <Star size={24} fill="currentColor" />
                </div>
                <p className="text-gray-700 font-marathi italic mb-8 text-lg leading-relaxed">"{review.review}"</p>
                <div className="flex items-center gap-5 border-t border-gray-100 pt-8">
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#0B132B] font-bold font-marathi text-lg">{review.name}</p>
                    <p className="text-gray-500 text-base">स्थानिक शेतकरी</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
