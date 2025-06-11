import React, { useState } from 'react';
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const openWhatsApp = (): void => {
    const message = encodeURIComponent("היי אייל! מצאתי אותך דרך האתר שלך 📸");
    window.open(`https://wa.me/972501234567?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: -10, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3"
            >
              <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
                שלח הודעה בוואטסאפ
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-full">
                  <div className="w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}