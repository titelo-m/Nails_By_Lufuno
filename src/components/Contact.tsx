import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">Get in Touch</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-foreground">
            Contact Me
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto mt-6" />
        </motion.div>

        {/* Contact Options */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-gradient rounded-3xl p-8 md:p-12 border border-border"
          >
            {/* WhatsApp - Primary CTA */}
            <a
              href="https://wa.me/27720826351"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors mb-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <span className="font-body font-semibold text-foreground block">WhatsApp</span>
                <span className="font-body text-sm text-muted-foreground">072 082 6351</span>
              </div>
              <span className="font-body text-sm text-primary group-hover:translate-x-1 transition-transform">Book Now →</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+27720826351"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-colors mb-4"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <span className="font-body font-semibold text-foreground block">Phone</span>
                <span className="font-body text-sm text-muted-foreground">072 082 6351</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:keletsomaleka9@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <span className="font-body font-semibold text-foreground block">Email</span>
                <span className="font-body text-sm text-muted-foreground">keletsomaleka9@gmail.com</span>
              </div>
            </a>
          </motion.div>

          {/* Quick Booking Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-8"
          >
            <MessageCircle className="w-5 h-5 text-primary" />
            <p className="font-body text-sm text-muted-foreground">
              WhatsApp us now for instant booking and quick replies – your nails deserve it!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
