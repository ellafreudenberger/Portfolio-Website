import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import ShapeArt from './components/shapeArt';
import SinglePage from './components/singlePage';
import PortfolioNav from './components/nav';

const App = () => {
  const location = useLocation();
  const [watered, setWatered] = useState(false);
  const [singlePageMode, setSinglePageMode] = useState(false);

  // Function to handle watering
  const handleWatering = () => {
    console.log('Watering action triggered');
    setWatered(!watered);
    console.log('Watered state:', !watered);

    // Toggle single-page mode
    setSinglePageMode(prevMode => !prevMode);
  };

  return (
    <div>
      <PortfolioNav singlePageMode={singlePageMode} /> {/* Pass singlePageMode as prop */}
      <Routes>
        <Route path="/" element={<Home handleWatering={handleWatering} watered={watered} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
      {/* Conditionally render ShapeArt component based on the route */}
      {location.pathname === '/' && (
        <ShapeArt watered={watered} singlePageMode={singlePageMode} />
      )}

      {/* Render SinglePage component below the footer when in single-page mode */}
      {singlePageMode && <SinglePage />}
    </div>
  );
}

export default App;
