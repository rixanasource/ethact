import React, { useState } from "react";

function Tokenomics() {
  const walletAddress = "xxxxxxxxxxxxx";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 sec
  };

  return (
    <div className="bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white">$Ethact Tokenomics</h1>
        <hr className="border-t-2 border-dotted border-gray-500 my-6" />

        <div className="space-y-4 text-lg">
          {/* Total Supply */}
          <div className="flex flex-col sm:flex-row justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Total Supply:</span>
            <span className="font-semibold text-white">1,000,000,000 FAFO</span>
          </div>

          {/* Taxes */}
          <div className="flex flex-col sm:flex-row justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Taxes:</span>
            <span className="font-semibold text-white">0% Buy / 0% Sell</span>
          </div>

          {/* Ownership */}
          <div className="flex flex-col sm:flex-row justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Ownership:</span>
            <span className="font-semibold text-white">Renounced</span>
          </div>

          {/* Liquidity */}
          <div className="flex flex-col sm:flex-row justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Liquidity:</span>
            <span className="font-semibold text-white">Burnt</span>
          </div>

          {/* Wallet Address (Copy Feature) */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-gray-700 pb-2">
            <span className="text-gray-400">Contract Address:</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-white cursor-pointer hover:text-gray-300 transition" onClick={copyToClipboard}>
                {walletAddress}
              </span>
              <button
                onClick={copyToClipboard}
                className="bg-white text-black px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-300 transition"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>

        {/* Button to DexScreener */}
        <div className="text-center mt-6">
          <a
            href="https://dexscreener.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition"
          >
            View on DexScreener
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
