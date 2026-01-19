import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import TechnologySection from '../components/TechnologySection';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <div style={{ background: '#050505' }}>
      {/* Hero Section */}
      <Hero />

      {/* Rest of the page */}
      <FeaturedProducts />
      <TechnologySection />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;