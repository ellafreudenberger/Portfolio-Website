import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import ShapeArt from './components/shapeArt';
import SinglePage from './components/singlePage';

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

  // Determine whether to show the ShapeArt component
  const showShapeArt = !singlePageMode && !['/projects', '/contact'].includes(location.pathname);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home handleWatering={handleWatering} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Render SinglePage component when single-page mode is enabled */}
      {singlePageMode && <SinglePage />}
      
      {/* Render ShapeArt component when in single-page mode or on applicable routes */}
      {(singlePageMode || showShapeArt) && <ShapeArt watered={watered} />}
    </div>
  );
}

export default App;
