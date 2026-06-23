import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: 'exterior_1.png', title: 'दुकानाची मुख्य इमारत', category: 'Shop Exterior' },
    { src: 'exterior_2.png', title: 'श्री शंभो कृषी सेवा केंद्र', category: 'Shop Exterior' },
    { src: 'storefront_1.png', title: 'दुकानाचे प्रवेशद्वार', category: 'Storefront' },
    { src: 'interior_1.png', title: 'उत्पादनांची मांडणी', category: 'Shop Interior' },
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
    <div className="overflow-hidden">
      <SEO 
        title="आमचे प्रत्यक्ष दुकान (Gallery) | Shri Shambho Krushi Seva Kendra"
        description="श्री शंभो कृषी सेवा केंद्र, देवसिंगा मधील प्रत्यक्ष दुकानाचे आणि उपलब्ध उत्पादनांचे फोटो पहा."
        path="/gallery"
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
            आमचे प्रत्यक्ष दुकान
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
            शेतकऱ्यांचा विश्वास हेच आमचे यश आहे. खाली आमच्या प्रत्यक्ष दुकानाची काही छायाचित्रे दिली आहेत.
          </motion.p>
        </div>
      </div>

      <div className="py-32 bg-[var(--color-brand-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {images.map((img, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] h-96 md:h-[450px] bg-gray-200 cursor-pointer">
                <img 
                  src={`/assets/${img.src}`} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/30 to-transparent opacity-90 group-hover:opacity-100 transition duration-500"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                  <span className="inline-block px-4 py-1.5 bg-[var(--color-brand-yellow)] text-[#0B132B] text-sm font-bold rounded-full mb-3 font-marathi shadow-lg">
                    {img.category}
                  </span>
                  <h3 className="text-3xl font-bold font-marathi text-white drop-shadow-md">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
