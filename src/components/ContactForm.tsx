import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Users, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    domo: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `¡Hola! Me gustaría hacer una reserva en Nebraska Glamping.

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}
*Fecha deseada:* ${formData.date}
*Número de huéspedes:* ${formData.guests}
*Domo de preferencia:* ${formData.domo || "Sin preferencia"}
*Mensaje:* ${formData.message || "Sin mensaje adicional"}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/573196861514?text=${encodedMessage}`, "_blank");
    
    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: "Te conectaremos con nuestro equipo de reservas.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="glass-card rounded-2xl p-6 md:p-8"
    >
      <h3 className="font-serif text-2xl text-foreground mb-6">
        Solicita tu Reserva
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="Tu nombre"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="tu@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
            Teléfono / WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="+57 300 123 4567"
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm text-muted-foreground mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            Fecha deseada *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className="block text-sm text-muted-foreground mb-2">
            <Users className="w-4 h-4 inline mr-1" />
            Número de huéspedes *
          </label>
          <select
            id="guests"
            name="guests"
            required
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Seleccionar</option>
            <option value="1">1 persona</option>
            <option value="2">2 personas</option>
            <option value="3">3 personas</option>
            <option value="4">4 personas</option>
          </select>
        </div>

        {/* Domo */}
        <div>
          <label htmlFor="domo" className="block text-sm text-muted-foreground mb-2">
            Domo de preferencia
          </label>
          <select
            id="domo"
            name="domo"
            value={formData.domo}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Sin preferencia</option>
            <option value="El Río del Amor">El Río del Amor (Mágico)</option>
            <option value="El Árbol del Amor">El Árbol del Amor</option>
            <option value="Luxury Glam">Luxury Glam</option>
            <option value="Luxury Gold">Luxury Gold (Más Privado)</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
          <MessageSquare className="w-4 h-4 inline mr-1" />
          Mensaje adicional
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="¿Alguna solicitud especial? ¿Es una ocasión especial?"
        />
      </div>

      <Button type="submit" variant="hero" className="w-full">
        <Send className="w-5 h-5" />
        Enviar Solicitud por WhatsApp
      </Button>

      <p className="text-muted-foreground text-xs text-center mt-4">
        Al enviar, serás redirigido a WhatsApp para confirmar tu reserva
      </p>
    </motion.form>
  );
};
