import { motion } from "framer-motion";
import { DomoCard } from "./DomoCard";
import domoPathway from "@/assets/domo-pathway.jpg";
import domoInterior from "@/assets/domo-interior.jpg";
import domosExterior from "@/assets/domos-exterior.jpg";
import romanticSetup from "@/assets/romantic-setup.jpg";

const domos = [
  {
    name: "El Río del Amor",
    subtitle: "Mágico",
    description:
      "Un entorno donde los sonidos del río son mágicos y relajantes. Disfruta de la intimidad y la conexión con el agua.",
    features: ["Jacuzzi", "Baño Privado", "Malla Catamarán", "Sonido del Río"],
    image: domoPathway,
    price: "$300.000",
  },
  {
    name: "El Árbol del Amor",
    subtitle: "Romántico",
    description:
      "Literalmente como dormir en la casita del árbol. Construido en una plataforma que atraviesa un grande y majestuoso árbol.",
    features: ["Jacuzzi Climatizado", "Baño Privado", "Plataforma Elevada"],
    image: domosExterior,
    price: "$250.000",
  },
  {
    name: "Luxury Glam",
    subtitle: "Confortable",
    description:
      "Confortable y más amplio, ideal para relajarse. Equipado con lo mejor para tu descanso, rodeado de naturaleza.",
    features: ["Ducha Privada", "Silla Columpio", "Malla Catamarán", "Cama Queen"],
    image: domoInterior,
    price: "$350.000",
  },
  {
    name: "Luxury Gold",
    subtitle: "Más Privado",
    description:
      "Nuestro domo más exclusivo y privado, literal está en una isla. Un espacio para recordar la intimidad con la creación.",
    features: ["En una Isla", "Máxima Privacidad", "Exclusivo"],
    image: romanticSetup,
    price: "$350.000",
  },
];

export const DomosSection = () => {
  return (
    <section id="domos" className="section-padding bg-gradient-forest">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm">
            ALOJAMIENTO
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-3 mb-4">
            Nuestros Domos Geodésicos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cuatro espacios únicos diseñados para experiencias inolvidables. Cada 
            domo ofrece una conexión especial con la naturaleza.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {domos.map((domo, index) => (
            <DomoCard key={domo.name} {...domo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
