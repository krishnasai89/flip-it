import { useState, useEffect } from "react";
import headsLight from "./assets/heads.png";
import tailsLight from "./assets/tails.png";

function App() {
  const [coin, setCoin] = useState("heads");
  const [isFlipping, setIsFlipping] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Sync dark mode with <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const flipCoin = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const result = Math.random() < 0.5 ? "heads" : "tails";
      setCoin(result);
      setIsFlipping(false);
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500
                    bg-gray-100 text-gray-800 dark:bg-[#0a1a33] dark:text-pink-200 relative"
    >
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 text-2xl 
                   text-blue-600 hover:text-blue-500 
                   dark:text-pink-400 dark:hover:text-pink-300"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Title */}
      <h1
        className="text-4xl font-bold mb-10 
                     text-blue-600 dark:text-pink-400"
      >
        Flip-it
      </h1>

      {/* Coin Card */}
      <div
        className="border-4 rounded-xl p-16 flex flex-col items-center shadow-lg
                      border-gray-400 dark:border-pink-500"
      >
        <div className="w-40 h-40 perspective">
          <div
            className={`relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d ${
              isFlipping ? "animate-flip" : ""
            }`}
          >
            {/* Heads */}
            <img
              src={headsLight}
              alt="heads"
              className={`absolute w-full h-full backface-hidden ${
                coin === "heads" ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* Tails */}
            <img
              src={tailsLight}
              alt="tails"
              className={`absolute w-full h-full backface-hidden rotate-y-180 ${
                coin === "tails" ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>

        {/* Flip Button */}
        <button
          onClick={flipCoin}
          disabled={isFlipping}
          className="mt-16 px-10 py-2 rounded-full transition disabled:opacity-50 text-lg
                     border-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white
                     dark:text-pink-400 dark:border-pink-400 dark:hover:bg-pink-400 dark:hover:text-white"
        >
          {isFlipping ? "Flipping..." : "Flip"}
        </button>
      </div>

      {/* Result */}
      <p
        className="mt-6 text-lg 
                    text-blue-600 dark:text-pink-400"
      >
        Dear, It is {coin === "heads" ? "Heads" : "Tails"}!
      </p>

      {/* Footer */}
      <p className="mt-8 text-sm text-blue-500 dark:text-pink-300">
        &lt;/&gt; with {darkMode ? "🤍" : "💛"} by Krishna Sai
      </p>
    </div>
  );
}

export default App;
