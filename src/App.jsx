import { useState, useEffect } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Tokenomics from "./pages/Tokenomics";
import Footer from "./components/Footer";

// Detect if the app is running on IPFS
const isIPFS = window.location.pathname.startsWith("/ipfs/") || 
               window.location.pathname.startsWith("/ipns/");

// Use HashRouter for IPFS, BrowserRouter for normal hosting
const Router = isIPFS ? HashRouter : BrowserRouter;

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Sidebar />
        <main className={`${isMobile ? "w-full mt-15" : "ml-64"} flex-grow`}>
          <Routes>
            <Route path="/" element={<Home isMobile={isMobile} />} />
            <Route path="/about" element={<About />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
