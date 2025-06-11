import { useState } from 'react';
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  height: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "חתונה בטבע - אייל חיון",
    height: "h-80"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "בר מצווה - צילום אירועים",
    height: "h-96"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "רגעים אינטימיים - חתונה",
    height: "h-72"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "אירוע עסקי - צילום מקצועי",
    height: "h-84"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "שמחה משפחתית",
    height: "h-88"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "יום הולדת - צילום אירועים",
    height: "h-76"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "חתונה רומנטית",
    height: "h-92"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "צילומי זוגיות",
    height: "h-80"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (image: GalleryImage, index: number): void => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = (): void => {
    setSelectedImage(null);
  };

  const nextImage = (): void => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    const nextImage = galleryImages[nextIndex];
    if (nextImage) {
      setSelectedImage(nextImage);
    }
  };

  const prevImage = (): void => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    const prevImage = galleryImages[prevIndex];
    if (prevImage) {
      setSelectedImage(prevImage);
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
            גלריית רגעים
          </h2>
          <div className="w-24 h-px bg-gray-900 mx-auto"></div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="break-inside-avoid"
            >
              <div
                className="relative group cursor-pointer overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-700"
                onClick={() => openLightbox(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full ${image.height} object-cover transform group-hover:scale-105 transition-transform duration-1000`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full w-12 h-12"
            >
              <X className="w-6 h-6" />
            </Button>
            
            {/* Navigation */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10 rounded-full w-12 h-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10 rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}