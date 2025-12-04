import { motion } from "framer-motion";
import { 
  Mountain, 
  Heart, 
  TreePine, 
  WifiOff, 
  Sparkles,
  MapPin
} from "lucide-react";

const benefits = [
  {
    icon: Mountain,
    title: "Experiencia de Lujo",
    description: "Domos geodésicos equipados con todas las comodidades: jacuzzi, camas premium y baño privado.",
  },
  {
    icon: MapPin,
    title: "Ubicación Única",
    description: "En medio de guaduales y río cristalino, a solo 1 hora de Cali y 15 minutos de Buga.",
  },
  {
    icon: TreePine,
    title: "Conexión con la Naturaleza",
    description: "Despierta con el sonido del río y los pájaros. Una experiencia auténtica sin perder confort.",
  },
  {
    icon: WifiOff,
    title: "Desconexión Digital",
    description: "El lugar perfecto para escapar del ruido de la ciudad y reconectar contigo mismo.",
  },
  {
    icon: Heart,
    title: "Atención Personalizada",
    description: "Cada detalle está pensado para ti. Desayuno artesanal, decoraciones especiales y más.",
  },
  {
    icon: Sparkles,
    title: "Momentos Inolvidables",
    description: "Ideal para aniversarios, propuestas, lunas de miel o simplemente una escapada romántica.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const BenefitsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm">
            ¿POR QUÉ ELEGIRNOS?
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-3 mb-4">
            Una experiencia diferente
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nebraska Glamping no es solo hospedaje, es una experiencia completa que 
            combina lujo, naturaleza y momentos únicos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
