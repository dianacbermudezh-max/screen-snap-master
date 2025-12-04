import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/domo-night.jpg";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Nebraska Glamping - Domo geodésico iluminado en la noche rodeado de bambú"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-primary font-medium tracking-[0.3em] text-sm md:text-base mb-4"
          >
            BUGA, VALLE DEL CAUCA
          </motion.p>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight mb-6">
            Tu refugio de lujo
            <span className="block text-gradient-gold italic mt-2">
              en la naturaleza
            </span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Vive una experiencia única en nuestros domos geodésicos. Conecta con la 
            naturaleza sin sacrificar el confort y el lujo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <a href="https://wa.me/573196861514" target="_blank" rel="noopener noreferrer">
                Reservar Ahora
              </a>
            </Button>
            <Button variant="hero-outline" asChild>
              <a href="#domos">
                Explorar Domos
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#domos"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest">DESCUBRE</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};
