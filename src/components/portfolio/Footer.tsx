import { Instagram, MessageCircle, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Brand */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Camera className="w-6 h-6" />
              <h3 className="text-xl font-light">אייל חיון</h3>
            </div>
            <p className="text-gray-400 font-light">
              צילום אירועים
              <br />
              תל אביב ומרכז הארץ
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <div className="flex justify-center space-x-6 space-x-reverse">
              <a
                href="https://instagram.com/eyalhayun"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 hover:border-white transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 hover:border-green-500 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Credit */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm font-light">
              © 2025 Eyal Hayun
            </p>
            <p className="text-gray-500 text-sm font-light mt-1">
              Designed & Developed by{' '}
              <a 
                href="https://idanlevian.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Idan Levian
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}