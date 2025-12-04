import { motion } from "framer-motion";

interface DomoCardProps {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  index: number;
}

export const DomoCard = ({
  name,
  subtitle,
  description,
  features,
  image,
  index,
}: DomoCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <img
          src={image}
          alt={`Domo ${name} - ${subtitle}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature) => (
            <span
              key={feature}
              className="bg-secondary/50 text-secondary-foreground text-xs px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
