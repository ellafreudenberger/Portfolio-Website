import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import ShapeArt from './components/shapeArt';

const App = () => {
  const location = useLocation();
  const [watered, setWatered] = useState(false);

  // Function to handle watering
  const handleWatering = () => {
    console.log('Watering action triggered'); // Log when watering action is triggered
    setWatered(!watered); // Toggle the value of watered state
    console.log('Watered state:', !watered); // Log the updated watered state
  };

  const showShapeArt = !['/projects', '/contact'].includes(location.pathname);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home handleWatering={handleWatering} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {showShapeArt && <ShapeArt watered={watered} />}
    </div>
  );
}

export default App;
