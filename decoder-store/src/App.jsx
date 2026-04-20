import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// ScrollToTop utility: Pages change ainappudu auto ga top ki veltundi
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', 
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* selection:bg-black selection:text-white -> idi premium touch mava, 
        user text select chesinappudu black and white lo highlight avtundi.
      */}
      <div className="flex flex-col min-h-screen selection:bg-black selection:text-white bg-white antialiased">
        
        {/* Navbar and Footer static ga untai, madhyalo Content change avtundi */}
        <Navbar />
        
        <main className="flex-grow overflow-x-hidden pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;