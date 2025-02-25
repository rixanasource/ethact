import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from './pages/Home';
import About from './pages/About';


export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (

    <Router>
      <Sidebar />
      <div className={`bg-black ${isMobile ? "w-full mt-15" : "ml-64"}`}>
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>

  );
}




