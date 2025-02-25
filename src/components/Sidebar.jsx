import { useState } from "react";
import { Menu, X, Instagram, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black p-4 flex justify-between items-center z-50">
        <h1 className="text-white text-lg font-bold">fafogov</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>

      {/* Mobile Sidebar - Fullscreen Slide Down */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white p-6 flex flex-col transition-all duration-300 overflow-y-auto ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } md:hidden`}
      >
        {/* Navigation Links (No Logo on Mobile) */}
        <nav className="flex-1 mt-16">
          {[
            { label: "Home", action: "/" },
            { label: "About", action: "/about" },
            { label: "Community Chat", action: "/community-chat" },
            { label: "Memes", action: "/memes" },
            { label: "Buy/Trade", action: "/buy-trade" },
            { label: "Doge Clock", action: "/doge-clock" },
            { label: "Workforce Costs", action: "/workforce-costs" },
            { label: "Savings", action: "/savings" },
            { label: "Regulations", action: "/regulations" },
            { label: "Latest News", action: "/latest-news" },
            { label: "Friends of Doge", action: "/friends-of-doge" },
            { label: "Agent ID", action: "/agent-id" },
            { label: "Merch Shop", action: "/merch-shop" },
          ].map(({ label, action }) => (
            <Link
              key={label}
              to={action}
              className="block py-2 px-4 hover:bg-gray-800 uppercase"
              onClick={() => setIsOpen(false)} // Close sidebar on mobile
            >
              {label}
            </Link>
          ))}
        </nav>


        {/* Social Icons */}
        <div className="flex justify-center gap-4 border-t border-gray-700 pt-4">
          <X size={20} />
          <Send size={20} />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed top-0 left-0 h-full bg-black text-white w-64 p-6 flex-col">
        {/* Logo on Desktop */}
        <h1 className="text-white text-lg font-bold">fafogov</h1>
        <div className="mb-6 flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png"
            alt="Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1">
          {[
             { label: "Home", action: "/" },
             { label: "About", action: "/about" },
             { label: "Community Chat", action: "/community-chat" },
             { label: "Memes", action: "/memes" },
             { label: "Buy/Trade", action: "/buy-trade" },
             { label: "Doge Clock", action: "/doge-clock" },
             { label: "Workforce Costs", action: "/workforce-costs" },
             { label: "Savings", action: "/savings" },
             { label: "Regulations", action: "/regulations" },
             { label: "Latest News", action: "/latest-news" },
             { label: "Friends of Doge", action: "/friends-of-doge" },
             { label: "Agent ID", action: "/agent-id" },
             { label: "Merch Shop", action: "/merch-shop" },
           ].map(({ label, action }) => (
            <Link
              key={label}
              to={action}
              className="block py-2 px-4 hover:bg-gray-800 uppercase"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 border-t border-gray-700 pt-4">
          <X size={20} />
          <Send size={20} />
        </div>
      </div>
    </div>
  );
}
