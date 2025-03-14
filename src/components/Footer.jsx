import React from "react";
import { Send } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Left - Branding */}
        <div>
          <h2 className="text-xl font-bold">The Ethereum Act</h2>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Right - Contact */}
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <span className="text-gray-400 text-sm">Developer Contact:</span>
          <a
            href="https://t.me/rixxana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition"
          >
            <Send size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
