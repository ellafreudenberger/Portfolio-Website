import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import ShapeArt from './components/shapeArt'; // Assuming you have a ShapeArt component

const App = () => {
  const location = useLocation();
  const showShapeArt = !['/projects', '/contact'].includes(location.pathname); // Exclude Projects and Contact pages from showing the ShapeArt

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {showShapeArt && <ShapeArt />}
    </div>
  );
}

export default App;
