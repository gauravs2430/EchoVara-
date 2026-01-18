import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import TechnologySection from '../components/TechnologySection';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <div style={{ background: '#050505' }}>
      {/* Standard Hero Section */}
      <HeroSection />

      {/* Rest of the page */}
      <div style={{ background: '#050505' }}>
        <FeaturedProducts />
        <TechnologySection />
        <Testimonials />
        <Newsletter />
      </div>
    </div>
  );
};

export default HomePage;