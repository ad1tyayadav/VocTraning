import React from 'react';
import { motion } from 'framer-motion';

const DashboardSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <motion.div
        className="max-w-6xl mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">Dashboard Access</h2>
        <p className="text-gray-700 text-lg">
          Empower students, teachers, and schools with quick access to enrolled courses, partnerships, and mobile training labs.
        </p>
      </motion.div>
    </section>
  );
};

export default DashboardSection;
