import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const priceCategories = [
  {
    title: "Plain Nails",
    items: [
      { name: "Short Nails", price: "R150" },
      { name: "Medium Nails", price: "R180" },
      { name: "Long Nails", price: "R200" },
    ],
  },
  {
    title: "French Tips",
    items: [
      { name: "French (Short)", price: "R180" },
      { name: "French (Medium)", price: "R210" },
      { name: "French (Long)", price: "R250" },
    ],
  },
  {
    title: "Additional Services",
    items: [
      { name: "Gel on Natural Nails", price: "R150" },
      { name: "Manicure & Pedicure", price: "R280" },
      { name: "Buff and Shine", price: "R80" },
      { name: "With Art", price: "+R100" },
    ],
  },
  {
    title: "Soak Off",
    items: [
      { name: "Own Work", price: "R50" },
      { name: "Other Nail Tech", price: "R70" },
    ],
  },
];

const PriceList = () => {
  return (
    <section id="prices" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
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
          <span className="text-primary font-body text-sm tracking-widest uppercase">Services</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-foreground">
            Price List
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto mt-6" />
        </motion.div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {priceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="card-gradient rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-display text-2xl text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex justify-between items-center">
                    <span className="font-body text-muted-foreground">{item.name}</span>
                    <span className="font-body font-semibold text-primary">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Booking Fee Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border">
            <span className="font-body text-sm text-muted-foreground">Booking Fee:</span>
            <span className="font-body font-semibold text-primary">R50</span>
            <span className="font-body text-xs text-muted-foreground">(Non-refundable)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceList;
