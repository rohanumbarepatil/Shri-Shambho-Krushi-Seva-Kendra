import SEO from '../components/SEO';
import { MessageCircle, Sprout, Droplets, Bug, Crosshair, CheckCircle2, ShieldCheck, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Products = () => {
  const categories = [
    {
      id: 'seeds',
      title: 'बियाणे (Seeds)',
      icon: <Sprout className="w-12 h-12 text-green-600 group-hover:scale-110 transition-transform duration-500" />,
      desc: 'सोयाबीन, तूर, उडीद, मूग, हरभरा, ज्वारी, आणि सर्व प्रकारच्या भाजीपाल्याचे नामांकित कंपन्यांचे दर्जेदार बियाणे.',
      benefits: ['१००% उगवण क्षमतेची हमी', 'सर्व प्रमुख ब्रँड्सचे वाण उपलब्ध', 'शेतकऱ्यांच्या बजेटमध्ये योग्य दर'],
      bgClass: 'bg-green-50',
      iconBg: 'bg-green-100',
      accentBorder: 'group-hover:border-green-300',
      accentShadow: 'group-hover:shadow-[0_20px_50px_rgba(22,101,52,0.15)]',
      imgPosition: 'object-[center_20%]',
      bgImg: 'img_4.png'
    },
    {
      id: 'fertilizers',
      title: 'खते (Fertilizers)',
      icon: <Droplets className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-500" />,
      desc: 'युरिया, डीएपी (DAP), १०:२६:२६, सुपर फॉस्फेट आणि सर्व प्रकारची विद्राव्य खते (Water Soluble Fertilizers).',
      benefits: ['पिकाच्या वाढीसाठी योग्य खतांचा सल्ला', 'मोठ्या प्रमाणावर साठा उपलब्ध', '१००% अस्सल आणि भेसळमुक्त'],
      bgClass: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      accentBorder: 'group-hover:border-blue-300',
      accentShadow: 'group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]',
      imgPosition: 'object-[left_center]',
      bgImg: 'img_3.png'
    },
    {
      id: 'pesticides',
      title: 'कीटकनाशके (Pesticides)',
      icon: <Bug className="w-12 h-12 text-red-600 group-hover:scale-110 transition-transform duration-500" />,
      desc: 'अळीनाशक, मावा-तुडतुडे नियंत्रक आणि सर्व प्रकारच्या किडींवर प्रभावी उपाय करणारी औषधे.',
      benefits: ['किडींवर अचूक व प्रभावी नियंत्रण', 'सर्वोत्तम कंपन्यांची औषधे', 'फवारणीचे मोफत मार्गदर्शन'],
      bgClass: 'bg-red-50',
      iconBg: 'bg-red-100',
      accentBorder: 'group-hover:border-red-300',
      accentShadow: 'group-hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)]',
      imgPosition: 'object-[right_bottom]',
      bgImg: 'img_2.png'
    },
    {
      id: 'medicines',
      title: 'कृषी औषधे (Tonics)',
      icon: <Crosshair className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform duration-500" />,
      desc: 'बुरशीनाशके (Fungicides), टॉनिक्स (Plant Growth Regulators) आणि तणनाशके (Herbicides).',
      benefits: ['पिकाची झपाट्याने वाढ आणि सुरक्षा', 'तणांचा समूळ नाश करणारी औषधे', 'रोग प्रतिकारशक्ती वाढवणारी टॉनिक्स'],
      bgClass: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      accentBorder: 'group-hover:border-purple-300',
      accentShadow: 'group-hover:shadow-[0_20px_50px_rgba(147,51,234,0.15)]',
      imgPosition: 'object-[center_top]',
      bgImg: 'img_1.png'
    }
  ];

  const brandCategories = [
    {
      id: 'seeds',
      title: 'बियाणे (Seeds)',
      subtitle: 'उच्च उत्पादनासाठी दर्जेदार बियाणे',
      icon: <Sprout className="w-10 h-10 md:w-12 md:h-12 text-green-600" />,
      iconBg: 'bg-green-100',
      accentColor: 'text-green-700',
      companies: [
        { name: 'छत्रपती संभाजीनगर' },
        { name: 'Mahabeej Akola' },
        { name: 'Green Gold MP' }
      ]
    },
    {
      id: 'fertilizers',
      title: 'खते (Fertilizers)',
      subtitle: 'पिकांच्या योग्य पोषणासाठी आणि वाढीसाठी',
      icon: <Droplets className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
      iconBg: 'bg-blue-100',
      accentColor: 'text-blue-700',
      companies: [
        { name: 'Jai Kisan' },
        { name: 'Mahadhan' },
        { name: 'IFFCO' },
        { name: 'Coromandel' },
        { name: 'RCF' },
        { name: 'Chambal' },
        { name: 'IPL' },
        { name: 'Kribhco' }
      ]
    },
    {
      id: 'pesticides',
      title: 'कीटकनाशके व पीक संरक्षण (Crop Protection)',
      subtitle: 'रोग आणि किडींपासून पिकांचे संपूर्ण संरक्षण',
      icon: <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-emerald-600" />,
      iconBg: 'bg-emerald-100',
      accentColor: 'text-emerald-700',
      companies: [
        { name: 'UPL' },
        { name: 'IFFCO' },
        { name: 'Dhanuka' },
        { name: 'Syngenta' },
        { name: 'Bayer' },
        { name: 'Indofil' },
        { name: 'Geolife' },
        { name: 'Advance Pesticides' },
        { name: 'Crystal' }
      ]
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="overflow-hidden bg-[var(--color-brand-bg)]">
      <SEO 
        title="आमची उत्पादने (Products) | Shri Shambho Krushi Seva Kendra"
        description="बियाणे, खते, आणि कीटकनाशके यांच्या सर्वोत्कृष्ट व्हरायटी मिळण्याचे ठिकाण. WhatsApp द्वारे चौकशी करा."
        path="/products"
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
            आमची उत्पादने
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1.5 bg-[var(--color-brand-yellow)] mx-auto rounded-full mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 font-marathi max-w-3xl mx-auto leading-relaxed"
          >
            शेतकऱ्यांचा विश्वास आणि दर्जेदार उत्पादनांची खात्री. आमच्या दुकानात मिळणारी सर्व उत्पादने अस्सल आहेत.
          </motion.p>
        </div>
      </div>

      {/* Main Products Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Trust Enhancements */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 text-[var(--color-brand-green)] rounded-full font-bold text-sm shadow-sm border border-green-100">
              <ShieldCheck size={18} /> 100% अस्सल उत्पादने
            </motion.div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-50 text-yellow-700 rounded-full font-bold text-sm shadow-sm border border-yellow-100">
              <Users size={18} /> Trusted by 5000+ Farmers
            </motion.div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 rounded-full font-bold text-sm shadow-sm border border-blue-100">
              <MapPin size={18} /> 50+ Villages Served
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {categories.map((cat) => (
              <motion.div key={cat.id} variants={fadeUp} className={`bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border-2 border-transparent ${cat.accentBorder} ${cat.accentShadow} overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-3 relative`}>
                
                {/* Available In Store Badge */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm text-[var(--color-brand-green)] px-4 py-1.5 rounded-full text-xs font-black font-marathi shadow-[0_4px_20px_rgba(0,0,0,0.1)] z-20 border border-green-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-brand-green)] animate-pulse"></span>
                  दुकानात उपलब्ध
                </div>

                {/* Visual Header with authentic cropped interior image background */}
                <div className={`h-40 ${cat.bgClass} relative overflow-hidden flex items-center justify-center`}>
                  {/* Authentic Texture Overlay with smooth zoom */}
                  <div className="absolute inset-0 opacity-20 mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 ease-in-out transform group-hover:scale-110">
                    <img src={`/assets/${cat.bgImg}`} alt="Shop Interior Texture" className={`w-full h-full object-cover ${cat.imgPosition}`} loading="lazy" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-0"></div>
                  
                  {/* Icon Badge */}
                  <div className={`relative z-10 w-24 h-24 ${cat.iconBg} rounded-3xl flex items-center justify-center shadow-lg transform translate-y-8 border-4 border-white transition-transform duration-500 group-hover:shadow-xl`}>
                    {cat.icon}
                  </div>
                </div>

                <div className="px-8 pt-14 pb-8 flex-grow flex flex-col justify-between relative z-10 bg-white">
                  <div>
                    <h2 className="text-3xl font-bold font-marathi text-[#0B132B] mb-4 text-center group-hover:text-[var(--color-brand-green)] transition-colors">{cat.title}</h2>
                    <p className="text-gray-600 font-marathi text-lg mb-8 text-center leading-relaxed">{cat.desc}</p>
                    
                    {/* Key Benefits */}
                    <div className="space-y-3 mb-10 bg-gray-50 rounded-2xl p-6 border border-gray-100 group-hover:bg-white group-hover:shadow-md transition-all duration-500">
                      <h4 className="font-bold text-[#0B132B] font-marathi mb-3">खास वैशिष्ट्ये:</h4>
                      {cat.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-green)] shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-marathi font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <a href={`https://wa.me/919850011530?text=नमस्कार,%20मला%20${cat.title}%20बद्दल%20चौकशी%20करायची%20आहे.`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-xl font-bold font-marathi hover:bg-green-600 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 text-lg">
                    <MessageCircle size={24} />
                    WhatsApp वर चौकशी
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Premium Brands Section Redesign */}
      <section 
        className="py-24 relative overflow-hidden border-y border-gray-100" 
        style={{ background: 'linear-gradient(180deg, #f8faf8 0%, #ffffff 50%, #f6faf7 100%)' }}
      >
        {/* Subtle decorative blur circles */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-marathi text-[#0B132B] mb-6 tracking-tight">
              विश्वासातील अग्रगण्य कंपन्यांची उत्पादने
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-marathi max-w-3xl mx-auto leading-relaxed">
              बियाणे, खते आणि पीक संरक्षणासाठी भारतातील नामांकित कंपन्यांची उत्पादने
            </p>
          </motion.div>
          
          <div className="space-y-32">
            {brandCategories.map((category) => (
              <motion.div 
                key={category.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="relative"
              >
                {/* Premium Category Header */}
                <div className="flex flex-col items-center text-center mb-16">
                  <motion.div 
                    variants={fadeUp} 
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] ${category.iconBg} flex items-center justify-center mb-8 shadow-sm border border-white/50 backdrop-blur-md`}
                  >
                    {category.icon}
                  </motion.div>
                  <motion.h3 
                    variants={fadeUp} 
                    className={`text-3xl md:text-4xl font-extrabold font-marathi ${category.accentColor} mb-4`}
                  >
                    {category.title}
                  </motion.h3>
                  <motion.p 
                    variants={fadeUp} 
                    className="text-xl text-gray-500 font-marathi"
                  >
                    {category.subtitle}
                  </motion.p>
                </div>
                
                {/* Premium Brand Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                  {category.companies.map((brand, bIdx) => (
                    <motion.div 
                      key={bIdx} 
                      variants={fadeUp} 
                      whileHover={{ y: -6, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-white rounded-2xl md:rounded-[20px] p-6 md:p-8 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100/50 backdrop-blur-sm cursor-pointer group"
                    >
                      <span className="text-lg md:text-xl font-bold tracking-wider uppercase text-gray-700 group-hover:text-[#0B132B] transition-colors duration-300 text-center font-english">
                        {brand.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-24 text-center">
             <p className="text-gray-500 font-marathi text-lg bg-white/50 inline-block px-6 py-3 rounded-full border border-gray-100">यासोबतच इतर अनेक नामांकित कंपन्यांची उत्पादने उपलब्ध आहेत.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Products;
