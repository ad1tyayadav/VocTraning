import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-12 text-center relative">
      <img 
        src="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Education" 
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />
      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to EduCollab
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore educational and collaborative opportunities
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Get Started
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
