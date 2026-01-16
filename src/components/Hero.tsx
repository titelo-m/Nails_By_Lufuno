import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 blur-[80px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-24 h-[1px] bg-primary mx-auto mb-8"
          />

          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-black tracking-wider leading-tight mb-6"
          >
            <div className="tracking-[0.08em] text-foreground">Nails</div>
            <span className="text-gradient text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] font-light block my-2">by</span>
            <div className="tracking-[0.08em] text-foreground">Lufuno</div>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-muted-foreground tracking-widest uppercase mb-12"
          >
            Nail Art & Beauty
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 italic"
          >
            Crafted with passion and precision. Every design tells a story, every nail brings a smile. I pour my heart into creating beauty that makes you feel confident and radiant.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-24 h-[1px] bg-primary mx-auto mt-12"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
