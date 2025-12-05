import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import fogata from "@/assets/fogata.jpg";
import jacuzzi from "@/assets/jacuzzi.jpg";
import decoracion from "@/assets/decoracion.jpg";
import mallaCatamaran from "@/assets/malla-catamaran.jpg";
import breakfast from "@/assets/breakfast.jpg";
import spa from "@/assets/spa.jpg";

const images = [
  { src: fogata, alt: "Fogata nocturna para momentos especiales" },
  { src: jacuzzi, alt: "Jacuzzi con vista a la naturaleza" },
  { src: decoracion, alt: "Decoración romántica para ocasiones especiales" },
  { src: mallaCatamaran, alt: "Malla catamarán sobre el río" },
  { src: breakfast, alt: "Desayuno artesanal incluido" },
  { src: spa, alt: "Servicio de spa junto al río" },
];

export const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="galeria" className="section-padding bg-gradient-forest">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm">
            GALERÍA
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-3 mb-4">
            Descubre nuestro espacio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada rincón de Nebraska Glamping está diseñado para crear momentos 
            mágicos. Explora nuestra galería y enamórate.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-full min-h-[300px] md:min-h-[400px]" : "h-40 md:h-48"
                }`}
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <span className="text-primary-foreground text-xl">+</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors z-10"
              aria-label="Cerrar galería"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors z-10"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors z-10"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
