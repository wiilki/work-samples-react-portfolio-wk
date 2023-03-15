import React, { useState } from 'react';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;
