import React from 'react';
import { motion } from 'framer-motion';

const partnershipsData = [
  {
    name: "School-Industry Partnerships",
    description: "Collaborate with local industries for real-world experience and training.",
    image: "https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Craft Initiatives",
    description: "Preserve traditional crafts by collaborating with local artisans.",
    image: "https://images.unsplash.com/photo-1471666875520-c75081f42081?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Vocational Training",
    description: "Empower students with vocational skills through hands-on training.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const ExplorePartnerships = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Explore Partnerships</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {partnershipsData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExplorePartnerships;
