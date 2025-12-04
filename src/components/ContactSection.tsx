import { motion } from "framer-motion";
import { Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import nightLights from "@/assets/night-lights.jpg";

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const ContactSection = () => {
  return (
    <section id="contacto" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={nightLights}
          alt="Nebraska Glamping de noche con luces decorativas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm">
            RESERVA TU ESCAPADA
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-3 mb-6">
            ¿Listo para vivir la experiencia?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Contáctanos por WhatsApp para consultar disponibilidad y tarifas. 
            Estamos a solo 1 hora de Cali y 15 minutos de Buga.
          </p>

          {/* CTA Button */}
          <Button
            variant="hero"
            size="xl"
            className="mb-12"
            asChild
          >
            <a
              href="https://wa.me/573196861514"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Reservar por WhatsApp
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="https://instagram.com/nebraskaglamping"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@nebraskaglamping</span>
            </a>
            <a
              href="https://tiktok.com/@glampingnebraska_buga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <TikTokIcon />
              <span>@glampingnebraska_buga</span>
            </a>
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-muted-foreground"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span>La Habana, Buga, Valle del Cauca, Colombia</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
