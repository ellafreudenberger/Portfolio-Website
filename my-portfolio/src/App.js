import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import ShapeArt from './components/shapeArt';


const App = () => {
  return (
      <div className="my-portfolio">
        <ShapeArt />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </div>
  );
}

export default App;