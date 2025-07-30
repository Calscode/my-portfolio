import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CV from './pages/CV';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Navbar from './Components/Navbar';
import ParticlesComponent from './Components/Particlescomp'

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <ParticlesComponent />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
