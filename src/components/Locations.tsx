import { motion } from "framer-motion";
import { MapPin, Home } from "lucide-react";

const locations = [
  {
    area: "Polokwane",
    province: "Limpopo",
    address: "Ivy Park Stand No 31",
    icon: MapPin,
  },
  {
    area: "Ga-Masemola",
    province: "Limpopo",
    address: "Mashoanyaneng",
    icon: MapPin,
  },
  {
    area: "Mamelodi Ext 6",
    province: "Gauteng",
    address: "Phomolong",
    icon: MapPin,
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-24 bg-card/50">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase">Find Me</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-foreground">
            Locations
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto mt-6" />
        </motion.div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/30 transition-all hover:glow-pink group text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <location.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{location.area}</h3>
              <p className="font-body text-sm text-primary mb-2">{location.province}</p>
              <p className="font-body text-sm text-muted-foreground">{location.address}</p>
            </motion.div>
          ))}
        </div>

        {/* House Calls Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <div className="card-gradient rounded-2xl p-6 border border-primary/30 text-center glow-pink">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Home className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-2">House Calls</h3>
            <p className="font-body text-sm text-muted-foreground">I also offer home visits!</p>
            <p className="font-body text-xs text-primary mt-2">Contact me to arrange</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
