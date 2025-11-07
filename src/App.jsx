import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cabinets from './pages/Cabinets';
import Kitchens from './pages/Kitchens';
import UtilityBootRooms from './pages/UtilityBootRooms';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';
import About from './pages/About';
import ShakerTraditional from './pages/ShakerTraditional';
import Modern from './pages/Modern';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cabinets" element={<Cabinets />} />
        <Route path="/kitchens" element={<Kitchens />} />
        <Route path="/utility-boot-rooms" element={<UtilityBootRooms />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shaker-traditional" element={<ShakerTraditional />} />
        <Route path="/modern" element={<Modern />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
