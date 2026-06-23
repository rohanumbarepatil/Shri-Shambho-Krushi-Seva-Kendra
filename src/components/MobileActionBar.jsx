import { Phone, MessageCircle, MapPin } from 'lucide-react';

const MobileActionBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
      <div className="flex justify-between items-center px-2 py-3">
        {/* Call Now */}
        <a 
          href="tel:+91XXXXXXXXXX" 
          aria-label="कॉल करा (Call Us)"
          className="flex flex-col items-center justify-center w-1/3 text-gray-700 hover:text-[var(--color-brand-green)]"
        >
          <div className="bg-blue-100 p-2 rounded-full mb-1">
            <Phone size={20} className="text-blue-600" />
          </div>
          <span className="text-xs font-marathi font-medium">कॉल करा</span>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/91XXXXXXXXXX?text=नमस्कार,%20मला%20दुकानातील%20उत्पादनांबद्दल%20माहिती%20हवी%20आहे." 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="WhatsApp संपर्क (WhatsApp Contact)"
          className="flex flex-col items-center justify-center w-1/3 text-[var(--color-brand-green)]"
        >
          <div className="bg-green-100 p-3 rounded-full mb-1 transform -translate-y-4 shadow-lg border-4 border-white">
            <MessageCircle size={28} className="text-green-600 fill-current" />
          </div>
          <span className="text-xs font-marathi font-bold -mt-3">WhatsApp</span>
        </a>

        {/* Directions */}
        <a 
          href="https://maps.app.goo.gl/57vkm8KgyVmpqTQ88" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="रस्ता पहा (Get Directions)"
          className="flex flex-col items-center justify-center w-1/3 text-gray-700 hover:text-[var(--color-brand-yellow)]"
        >
          <div className="bg-yellow-100 p-2 rounded-full mb-1">
            <MapPin size={20} className="text-yellow-600" />
          </div>
          <span className="text-xs font-marathi font-medium">रस्ता पहा</span>
        </a>
      </div>
    </div>
  );
};

export default MobileActionBar;
