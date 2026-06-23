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
      imgPosition: 'object-[center_20%]'
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
      imgPosition: 'object-[left_center]'
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
      imgPosition: 'object-[right_bottom]'
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
                    <img src="/assets/interior_1.png" alt="Shop Interior Texture" className={`w-full h-full object-cover ${cat.imgPosition}`} loading="lazy" />
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
                  
                  <a href={`https://wa.me/91XXXXXXXXXX?text=नमस्कार,%20मला%20${cat.title}%20बद्दल%20चौकशी%20करायची%20आहे.`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-xl font-bold font-marathi hover:bg-green-600 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 text-lg">
                    <MessageCircle size={24} />
                    WhatsApp वर चौकशी
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Premium Brands Section */}
      <section className="py-24 bg-white border-t border-gray-100">
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
            <div className="w-24 h-1.5 bg-[var(--color-brand-yellow)] mx-auto rounded-full mt-8"></div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {brands.map((brand, idx) => (
              <motion.div key={idx} variants={fadeUp} className={`px-8 py-6 rounded-2xl border-2 ${brand.color} ${brand.bg} shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white group`}>
                <span className={`text-2xl font-black tracking-wider uppercase font-english transition-colors duration-300`}>{brand.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 text-center">
             <p className="text-gray-500 font-marathi text-lg">यासोबतच इतर अनेक नामांकित कंपन्यांची उत्पादने उपलब्ध आहेत.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Products;
