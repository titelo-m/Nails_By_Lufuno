import { motion } from "framer-motion";
import nailsGold from "@/assets/nails-gold.jpg";
import nailsHearts from "@/assets/nails-hearts.jpg";
import nailsPink from "@/assets/nails-pink.jpg";
import nailsRed from "@/assets/nails-red.jpg";
import nailsHotpink from "@/assets/nails-hotpink.jpg";
import nailsFrench from "@/assets/nails-french.jpg";

const galleryImages = [
  { src: nailsGold, alt: "Gold accent nail art" },
  { src: nailsHearts, alt: "Heart design nails" },
  { src: nailsPink, alt: "Pink stiletto nails" },
  { src: nailsRed, alt: "Red french tip nails" },
  { src: nailsHotpink, alt: "Hot pink square nails" },
  { src: nailsFrench, alt: "French tip with pink accents" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-foreground">
            My Work
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto mt-6" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 glow-pink opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
