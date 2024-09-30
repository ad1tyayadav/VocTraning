import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">About EduCollab</h2>
        <p className="text-gray-700 text-lg mb-8">
          EduCollab bridges the gap between educational institutions and local industries. We bring together schools, artisans, and industries to foster hands-on learning and preserve traditional crafts while promoting modern vocational skills.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="About EduCollab" 
          className="mx-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;
