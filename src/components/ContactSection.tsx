import { motion } from "framer-motion";
import { Phone, Instagram, MapPin, Clock, Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";
import nightLights from "@/assets/night-lights.jpg";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+57 319 686 1514",
    href: "https://wa.me/573196861514",
  },
  {
    icon: Mail,
    label: "Email",
    value: "reservas@nebraskaglamping.com",
    href: "mailto:reservas@nebraskaglamping.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "La Habana, Buga, Valle del Cauca",
    href: "https://maps.google.com/?q=La+Habana+Buga+Valle+del+Cauca+Colombia",
  },
  {
    icon: Clock,
    label: "Horarios",
    value: "Check-in: 4PM | Check-out: 1PM",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "@nebraskaglamping",
    href: "https://instagram.com/nebraskaglamping",
  },
  {
    icon: TikTokIcon,
    label: "@glampingnebraska_buga",
    href: "https://tiktok.com/@glampingnebraska_buga",
  },
];

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
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm">
            RESERVA TU ESCAPADA
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-3 mb-4">
            ¿Listo para vivir la experiencia?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario o contáctanos directamente. Estamos a solo 1 
            hora de Cali y 15 minutos de Buga.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl text-foreground mb-8">
              Información de Contacto
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-muted-foreground text-sm mb-4">Síguenos</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon />
                    <span className="text-sm hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-10 rounded-xl overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.123!2d-76.2847222!3d3.9036111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a45c8c8c8c8c8%3A0x1234567890abcdef!2sGlamping%20Nebraska!5e0!3m2!1ses!2sco!4v1701676800000!5m2!1ses!2sco"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Nebraska Glamping"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
