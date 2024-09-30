import React from 'react';
import { motion } from 'framer-motion';

const coursesData = [
  {
    name: "Weaving Craft",
    description: "Learn traditional weaving techniques with hands-on experience.",
    icon: "https://plus.unsplash.com/premium_photo-1682142721713-2b076bc2b29b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Coding for Beginners",
    description: "Start your coding journey with beginner-friendly projects.",
    icon: "https://plus.unsplash.com/premium_photo-1664301969414-d8435c2b91bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Vocational Skills",
    description: "Develop valuable vocational skills for future career success.",
    icon: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const CoursesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Craft and Vocational Courses</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {coursesData.map((course, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 shadow-lg p-6 rounded-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={course.icon} 
                alt={course.name} 
                className="w-16 h-16 object-cover rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-600">{course.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
