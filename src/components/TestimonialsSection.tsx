import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carolina Martínez",
    location: "Cali, Colombia",
    rating: 5,
    text: "Una experiencia increíble. El domo era hermoso y despertar con el sonido del río fue mágico. Definitivamente volveremos para nuestro próximo aniversario.",
    date: "Noviembre 2024",
  },
  {
    name: "Andrés y María",
    location: "Bogotá, Colombia",
    rating: 5,
    text: "Celebramos nuestra luna de miel aquí y superó todas nuestras expectativas. La decoración romántica, el jacuzzi y la atención del equipo fueron perfectos.",
    date: "Octubre 2024",
  },
  {
    name: "Juan Pablo Restrepo",
    location: "Medellín, Colombia",
    rating: 5,
    text: "El lugar perfecto para desconectarse. La malla catamarán sobre el río es increíble. El desayuno delicioso y todo muy limpio. 100% recomendado.",
    date: "Septiembre 2024",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm">
            TESTIMONIOS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-3 mb-4">
            Lo que dicen nuestros huéspedes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Miles de parejas y familias han vivido momentos inolvidables en Nebraska 
            Glamping. Estas son algunas de sus historias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-border/50"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="text-foreground font-medium">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.location} · {testimonial.date}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/50 border border-border/50">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.9</span>
            <span className="text-muted-foreground text-sm">
              · Calificación promedio
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
