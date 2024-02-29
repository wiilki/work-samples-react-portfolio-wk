import React, { useState } from 'react';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Resume from './src/pages/Resume';
import Portfolio from './src/pages/Portfolio';
import Contact from './src/pages/Contact';
import Footer from './src/components/Footer';

export default function PortfolioContainer() {
  const [currentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    
  };

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />;
    </div>
  );
}
