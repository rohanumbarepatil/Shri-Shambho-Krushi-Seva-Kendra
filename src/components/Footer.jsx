import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-bold font-marathi text-[var(--color-brand-yellow)] mb-4">
              श्री शंभो कृषी सेवा केंद्र
            </h3>
            <p className="text-gray-400 font-marathi mb-4 leading-relaxed">
              तुळजापूर आणि अक्कलकोट परिसरातील शेतकऱ्यांचे विश्वासाचे ठिकाण. दर्जेदार बियाणे, खते आणि कीटकनाशके.
            </p>
            <div className="flex flex-col space-y-3 mt-6">
              <a href="tel:+919850011530" className="flex items-center gap-3 hover:text-[var(--color-brand-yellow)] transition text-gray-300 group">
                <Phone size={20} className="text-[var(--color-brand-yellow)] group-hover:scale-110 transition-transform" />
                <span className="font-english text-lg tracking-wide">9850011530</span>
              </a>
              <a href="https://wa.me/919850011530?text=नमस्कार,%20मला%20श्री%20शंभो%20कृषी%20सेवा%20केंद्र%20बद्दल%20माहिती%20हवी%20आहे." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-green-400 transition text-gray-300 group">
                <MessageCircle size={20} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                <span className="font-english text-lg tracking-wide">WhatsApp: 9850011530</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-marathi text-gray-200 mb-4">महत्वाचे दुवे</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white font-marathi">मुखपृष्ठ (Home)</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white font-marathi">आमच्याबद्दल (About Us)</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white font-marathi">उत्पादने (Products)</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white font-marathi">आमचे दुकान (Gallery)</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-marathi text-gray-200 mb-4">संपर्क</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-[var(--color-brand-yellow)] mr-3 mt-1 shrink-0" size={20} />
                <span className="text-gray-400 font-marathi">
                  बालाजी नगर, देवसिंगा (तुळ),<br />
                  ता. तुळजापूर, जि. धाराशिव
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-[var(--color-brand-yellow)] mr-3 shrink-0" size={20} />
                <a href="tel:+919850011530" className="text-gray-400 hover:text-white font-english text-lg tracking-wide hover:underline">+91 9850011530</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm font-marathi">
          <p>&copy; {new Date().getFullYear()} श्री शंभो कृषी सेवा केंद्र. सर्व हक्क राखीव.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
