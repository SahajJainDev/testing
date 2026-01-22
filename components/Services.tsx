"use client";

import { motion } from "framer-motion";

const services = [
  {
    category: "Nails",
    items: [
      { name: "Gel Extensions", price: "Starts at ₹2500" },
      { name: "Acrylics", price: "Starts at ₹3000" },
      { name: "French Polish", price: "Starts at ₹800" },
      { name: "Nail Art", price: "On Consultation" },
    ],
  },
  {
    category: "Hair",
    items: [
      { name: "Styling", price: "Starts at ₹1500" },
      { name: "Cuts", price: "Starts at ₹1200" },
      { name: "Coloring (Ombre/Balayage)", price: "Starts at ₹5000" },
      { name: "Keratin Treatment", price: "Starts at ₹8000" },
    ],
  },
  {
    category: "Essentials",
    items: [
      { name: "Manicure", price: "Starts at ₹1000" },
      { name: "Pedicure", price: "Starts at ₹1500" },
      { name: "Waxing", price: "Starts at ₹500" },
      { name: "Threading", price: "Starts at ₹100" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-20 bg-background relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl text-accent mb-16 text-center"
        >
          Our Services
        </motion.h2>

        <div className="space-y-16">
          {services.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xl p-2 border-b border-white/10 text-white font-medium mb-6 uppercase tracking-wider">
                {section.category}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-end group">
                    <div>
                      <h4 className="text-gray-300 font-light group-hover:text-white transition-colors">
                        {item.name}
                      </h4>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
