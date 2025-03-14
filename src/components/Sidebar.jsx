import { useState } from "react";
import { Menu, X, Instagram, Send, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { label: "Home", action: "/" },
    { label: "About", action: "/#about" },
    { label: "Tokenomics", action: "/#tokenomics" },
    { label: "Telegram Community", action: "/community-chat" },
    { label: "DEXTools", action: "/memes" },
    { label: "Dexscreener", action: "/workforce-costs" },
    { label: "Etherscan", action: "/savings" },
    { label: "Uniswap", action: "/regulations" },
    { label: "Coingecko", action: "https://" },
    { label: "Coinmarketcap", action: "/agent-id" },
    { label: "Developer", action: "https://t.me/Monstergreen" },
  ];
  return (
    <div>
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black p-4 flex justify-between items-center z-50">

        <div className="flex justify-center">
          <Link to="/">
            <img
              src="./TEA.png"
              alt="Logo"
              className="w-8 h-8"
            />
          </Link>

        </div>
        <Link to="/">
          <h1 className="text-white text-lg font-bold">$Ethact</h1>
        </Link>
        <a href="https://x.com/fafooneth?s=21" target="_blank" rel="noopener noreferrer">
          <img
            src="./XLOGO.png"
            alt="Logo"
            className="w-4 h-4"
          />
        </a> 
        <a href="https://t.me/fafogov" target="_blank" rel="noopener noreferrer">
          <Send size={20} className="text-white" />
        </a>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>

      {/* Mobile Sidebar - Fullscreen Slide Down */}
      <div
        className={`z-10 fixed top-0 left-0 w-full h-screen bg-black text-white p-6 flex flex-col transition-all duration-300 overflow-y-auto ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } md:hidden`}
      >
        {/* Navigation Links (No Logo on Mobile) */}
        <nav className=" flex-1 mt-16">
          {menus.map(({ label, action }) => (
            <a
              key={label}
              href={action}
              className="block py-2 px-4 hover:bg-gray-800 uppercase"
              onClick={() => setIsOpen(false)} // Close sidebar on mobile
            >
              {label}
            </a>
          ))}
        </nav>


        {/* Social Icons */}
        <div className="flex justify-center gap-4 border-t border-gray-700 pt-4">
          <a href="https://x.com/fafooneth?s=21" target="_blank" rel="noopener noreferrer">
            <img
              src="./XLOGO.png"
              alt="Logo"
              className="w-4 h-4"
            />
          </a>
          <a href="https://t.me/fafogov" target="_blank" rel="noopener noreferrer">
            <Send size={20} className="cursor-pointer hover:text-blue-400 transition-colors" />
          </a>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed top-0 left-0 h-full bg-black text-white w-64 p-6 flex-col border-r-2 border-gray-500">
        {/* Logo on Desktop */}
        <h1 className="text-white text-lg font-bold">$Ethact</h1>
        <div className="mb-6 mt-6 flex justify-center">
          <img
            src="./TEA.png"
            alt="Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1">
          {menus.map(({ label, action }) => (
            <a
              key={label}
              href={action}
              className="block py-2 px-4 hover:bg-gray-800 uppercase"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 border-t border-gray-700 pt-4">
          <a href="https://x.com/fafooneth?s=21" target="_blank" rel="noopener noreferrer">
            <img
              src="./XLOGO.png"
              alt="Logo"
              className="w-4 h-4"
            />
          </a>
          <a href="https://t.me/fafogov" target="_blank" rel="noopener noreferrer">
            <Send size={20} className="cursor-pointer hover:text-blue-400 transition-colors" />
          </a>

        </div>
      </div>
    </div>
  );
}

