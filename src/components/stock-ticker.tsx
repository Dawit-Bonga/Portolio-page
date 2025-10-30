"use client";

import { useEffect, useState } from "react";

interface Stock {
  symbol: string;
  name: string;
  change: number;
  emoji: string;
}

const stocks: Stock[] = [
  { symbol: "JS", name: "JavaScript", change: 420, emoji: "⚡" },
  { symbol: "COFFEE", name: "Coffee Futures", change: 900, emoji: "☕" },
  { symbol: "REACT", name: "React Components", change: 200, emoji: "⚛️" },
  { symbol: "NODE", name: "Node.js", change: 280, emoji: "🟢" },
  { symbol: "CSS", name: "CSS Skills", change: 500, emoji: "🎨" },
  { symbol: "GIT", name: "Git Commits", change: 300, emoji: "📝" },
  { symbol: "STACK", name: "Stack Overflow", change: -50, emoji: "📚" },
  { symbol: "DEPLOY", name: "Deployments", change: 200, emoji: "🚀" },
  { symbol: "TESTS", name: "Test Coverage", change: 75, emoji: "✅" },
  { symbol: "PERF", name: "Performance", change: 300, emoji: "⚡" },
  { symbol: "UX", name: "User Experience", change: 400, emoji: "✨" },
  { symbol: "API", name: "API Calls", change: 180, emoji: "🔗" },
  { symbol: "MOBILE", name: "Mobile First", change: 250, emoji: "📱" },
  { symbol: "A11Y", name: "Accessibility", change: 320, emoji: "♿" },
];

export function StockTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stocks.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change}%`;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-gray-300";
    if (change < 0) return "text-gray-600";
    return "text-gray-400";
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return "↑";
    if (change < 0) return "↓";
    return "→";
  };

  return (
    <div className="bg-black text-white py-3 overflow-hidden border-t-2 border-b-2 border-white relative">
      <div className="flex items-center">
        {/* Market Status */}
        <div className="flex items-center px-3 py-1.5 bg-white rounded-full mr-4 ml-2 sm:mr-6 sm:ml-4">
          <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse mr-1.5 sm:mr-2"></div>
          <span className="text-xs sm:text-sm font-semibold text-black">DEV MARKET OPEN</span>
        </div>

        {/* Ticker Container */}
        <div className="flex-1 overflow-hidden relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div className="flex animate-scroll whitespace-nowrap">
            {[...stocks, ...stocks].map((stock, index) => (
              <div
                key={`${stock.symbol}-${index}`}
                className="flex items-center mx-4 sm:mx-8 text-xs sm:text-sm font-medium hover:bg-gray-900 px-2 py-1 rounded transition-colors duration-200"
              >
                <span className="text-sm sm:text-lg mr-1 sm:mr-2">{stock.emoji}</span>
                <span className="font-bold text-white">{stock.symbol}</span>
                <span className="mx-1 sm:mx-2 text-gray-400">|</span>
                <span className="text-gray-300 hidden sm:inline">{stock.name}</span>
                <span className="mx-1 sm:mx-2 text-gray-400">|</span>
                <span className={`font-bold ${getChangeColor(stock.change)}`}>
                  {getChangeIcon(stock.change)} {formatChange(stock.change)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Highlight */}
        <div className="px-3 py-1.5 bg-white rounded-full mr-2 sm:mr-4 border-2 border-gray-900">
          <div className="flex items-center">
            <span className="text-sm sm:text-lg mr-1 sm:mr-2">{stocks[currentIndex].emoji}</span>
            <span className="text-xs sm:text-sm font-semibold text-black">
              {stocks[currentIndex].symbol} {getChangeIcon(stocks[currentIndex].change)} {formatChange(stocks[currentIndex].change)}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Smooth pause/resume on hover */
        .animate-scroll {
          transition: animation-play-state 0.3s ease;
        }
      `}</style>
    </div>
  );
}
