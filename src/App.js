import React from 'react';
import './costCalculator.css';
import CostCalculator from './costCalculator/CostCalculator';
import Header from './costCalculator/components/Header';
import Footer from './costCalculator/components/Footer';
import Hero from './costCalculator/components/Hero';

function App() {
  return (
    <div className='body'>
      <Header />
      <Hero />
      <CostCalculator />
      <Footer />
    </div>
  );
}

export default App;



 