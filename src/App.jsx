import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ExplorePartnerships from './components/ExplorePartnerships';
import CoursesSection from './components/CoursesSection';
import DashboardSection from './components/DashboardSection';
import Footer from './components/Footer';
import JobSlider from './components/JobSlider';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <AboutSection />
      <ExplorePartnerships />
      <CoursesSection />
      <JobSlider />
      <DashboardSection />
      <Footer />
    </div>
  );
};

export default App;
