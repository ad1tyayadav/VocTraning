import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-6">
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:underline">Contact Us</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
      </div>
      <p className="mt-4">&copy; 2024 EduCollab. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
