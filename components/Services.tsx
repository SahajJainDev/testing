"use client";

import { motion } from "framer-motion";

type ServiceVariant = {
  name: string;
  price: string;
};

type ServiceItem = {
  name: string;
  price?: string;
  variants?: ServiceVariant[];
};

type ServiceSection = {
  category: string;
  note?: string;
  items: ServiceItem[];
};

const services: ServiceSection[] = [
  {
    category: "Hair Styling",
    items: [
      { name: "Hair Wash", price: "₹499" },
      { name: "Advantage Hair Wash", price: "₹700" },
      { name: "Hair Wash + Blowdry", price: "₹899" },
      { name: "Hyper Effect Blowdry", price: "₹1099" },
      { name: "Straightening (Temporary)", price: "₹1299" },
      { name: "Soft Curls", price: "₹1350" },
      { name: "Tong Curls", price: "₹1599" },
      { name: "Crimping", price: "₹1699" },
    ],
  },
  {
    category: "✂️ Hair Cuts & Trims",
    items: [
      { name: "Basic Hair Cut", price: "₹550" },
      { name: "Advanced Hair Cut", price: "₹1700" },
    ],
  },
  {
    category: "🎨 Hair Colour & Care",
    items: [
      { name: "Root Touch-Up", price: "₹1899" },
      { name: "Global Colour (Shoulder Length)", price: "₹3000" },
      { name: "Global Colour (Medium Length)", price: "₹4599" },
      { name: "Global Colour (Long Length)", price: "₹8000" },
      { name: "Hair Spa", price: "₹2800" },
      { name: "Advanced Hair Spa", price: "₹3499" },
      { name: "Head Massage", price: "₹699" },
      { name: "Neck Massage", price: "₹499" },
    ],
  },
  {
    category: "💅 Manicure, Pedicure & Foot Care",
    items: [
      { name: "Cut, File & Polish", price: "₹450" },
      { name: "Classic Pedicure", price: "₹800" },
      { name: "De-Tan Pedicure", price: "₹1499" },
      { name: "Hydra-Boost Pedicure", price: "₹1199" },
      { name: "Luxe Pedicure", price: "₹1499" },
      { name: "Classic Manicure", price: "₹599" },
      { name: "De-Tan Manicure", price: "₹1199" },
      { name: "Hydra-Boost Manicure", price: "₹999" },
      { name: "Luxe Manicure", price: "₹1199" },
      { name: "Foot Massage (20 mins)", price: "₹599" },
    ],
  },
  {
    category: "♾️ Permanent Hair Treatments",
    note: "(Price varies by hair length)",
    items: [
      {
        name: "Botox",
        variants: [
          { name: "Small", price: "₹6000" },
          { name: "Medium", price: "₹8000" },
          { name: "Long", price: "₹10000" },
        ],
      },
      {
        name: "Nano Plastia",
        variants: [
          { name: "Small", price: "₹7000" },
          { name: "Medium", price: "₹8000" },
          { name: "Long", price: "₹15000" },
        ],
      },
      {
        name: "Rebonding",
        variants: [
          { name: "Small", price: "₹6000" },
          { name: "Medium", price: "₹8000" },
          { name: "Long", price: "₹10000" },
        ],
      },
      {
        name: "Keratin",
        variants: [
          { name: "Small", price: "₹6000" },
          { name: "Medium", price: "₹8000" },
          { name: "Long", price: "₹10000" },
        ],
      },
    ],
  },
  {
    category: "💅 Nail Extensions & Nail Services",
    items: [
      { name: "Acrylic Extensions", price: "₹2199" },
      { name: "Gel Extensions", price: "₹1999" },
      { name: "Acrylic Extensions + Gel Polish", price: "₹2499" },
      { name: "Gel Extensions + Gel Polish", price: "₹2299" },
      { name: "Acrylic Refill", price: "₹1299" },
      { name: "Gel Refill", price: "₹1099" },
      { name: "Extension Removal", price: "₹499" },
      { name: "Gel Polish Removal", price: "₹299" },
      { name: "Regular Polish (Hands & Feet)", price: "₹499" },
      { name: "Overlay", price: "₹1099" },
    ],
  },
  {
    category: "🎨 Nail Art & Special Nail Designs",
    items: [
      { name: "French Nails", price: "₹899" },
      { name: "Ombre Nails", price: "₹1199" },
      { name: "Cat Eye Nails", price: "₹1199" },
      { name: "Baby Boomers", price: "₹1199" },
      { name: "Glitter Ombre", price: "₹1899" },
      { name: "Glitter Polish", price: "₹999" },
      { name: "Foil Art", price: "₹1500" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 lg:px-20 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl text-accent mb-4">
            Our Menu
          </h2>
          <p className="text-gray-400 font-light tracking-wide">
            Explore our exclusive range of premium services
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {services.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-colors backdrop-blur-sm shadow-xl"
            >
              <h3 className="text-xl font-heading text-accent mb-2 tracking-wide">
                {section.category}
              </h3>
              {section.note && (
                <p className="text-xs text-gray-500 mb-6 italic">{section.note}</p>
              )}
              {!section.note && <div className="mb-6 h-px w-12 bg-accent/30" />}

              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="group">
                    {/* Standard Item */}
                    {!item.variants && (
                      <div className="flex justify-between items-baseline">
                        <span className="text-gray-300 font-light group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                        <div className="mx-2 flex-grow border-b border-dashed border-white/10 opacity-30 group-hover:opacity-50 transition-opacity" />
                        <span className="text-sm text-accent font-medium whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    )}

                    {/* Item with Variants */}
                    {item.variants && (
                      <div className="mb-4">
                        <p className="text-gray-200 font-medium mb-2">{item.name}</p>
                        <div className="pl-4 space-y-2 border-l border-white/10">
                          {item.variants.map((variant) => (
                            <div key={variant.name} className="flex justify-between items-baseline text-sm">
                              <span className="text-gray-400 hover:text-white transition-colors">
                                {variant.name}
                              </span>
                              <div className="mx-2 flex-grow border-b border-dashed border-white/5 opacity-20" />
                              <span className="text-accent/80 font-mono">
                                {variant.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
