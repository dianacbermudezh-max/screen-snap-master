import { motion } from "framer-motion";
import {
  Coffee,
  Car,
  Wifi,
  Flame,
  Waves,
  UtensilsCrossed,
  Clock,
  Sparkles,
  Heart,
  Cake,
  PartyPopper,
  Users,
  UsersRound,
} from "lucide-react";
import spaImage from "@/assets/spa.jpg";

const services = [
  { icon: Coffee, label: "Desayuno Artesanal", included: true },
  { icon: Car, label: "Parqueadero Privado", included: true },
  { icon: Wifi, label: "Wi-Fi Disponible", included: true },
  { icon: Flame, label: "Zona de Fogata", included: true },
  { icon: Waves, label: "Acceso al Río", included: true },
  { icon: UtensilsCrossed, label: "Zona de Asados", included: true },
];

const romanticDecorations = [
  { icon: Heart, label: "Decoración Romántica", description: "Bombas metalizadas, guirnaldas, letrero y vino 🍷" },
  { icon: Cake, label: "Cumpleaños", description: "Celebra tu día especial" },
  { icon: PartyPopper, label: "Aniversario", description: "Momentos inolvidables" },
  { icon: Users, label: "Momentos en Familia", description: "Comparte con los tuyos" },
  { icon: UsersRound, label: "Parche de Amigos", description: "Diversión garantizada" },
];

const schedules = [
  { icon: Clock, label: "Check-in", value: "4:00 PM" },
  { icon: Clock, label: "Check-out", value: "1:00 PM" },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={spaImage}
                alt="Masajes relajantes en Nebraska Glamping en medio del bosque"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 md:right-8 glass-card rounded-xl p-5 shadow-lg max-w-[280px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-lg">Spa & Masajes</p>
                  <p className="text-muted-foreground text-sm leading-snug">Relájate en medio del bosque con los sonidos del río</p>
                  <p className="text-primary font-bold mt-1">$160.000 / pareja</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-medium tracking-[0.2em] text-sm">
              COMODIDADES
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3 mb-6">
              Todo incluido para tu descanso
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              En Nebraska Glamping nos encargamos de cada detalle para que solo te 
              preocupes por disfrutar. Tu estadía incluye todo lo necesario para una 
              experiencia perfecta.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30"
                >
                  <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{service.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Romantic Decorations Highlight */}
            <div className="mb-8 p-5 rounded-xl bg-primary/10 border border-primary/20">
              <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Decoraciones Especiales
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {romanticDecorations.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center p-3 rounded-lg bg-background/50"
                  >
                    <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-foreground text-sm font-medium">{item.label}</p>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Schedules */}
            <div className="flex gap-6 p-4 rounded-xl bg-muted/30 border border-border/50">
              {schedules.map((schedule) => (
                <div key={schedule.label} className="flex items-center gap-3">
                  <schedule.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-muted-foreground text-xs">{schedule.label}</p>
                    <p className="text-foreground font-medium">{schedule.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
