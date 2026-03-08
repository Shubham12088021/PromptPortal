import { Link } from "react-router-dom";
import heroImg from "../assets/promptImg.webp";
import { useState, useEffect } from "react";

function Hero() {

  const words = [
    "Prompt Engineering",
    "AI Prompt Design",
    "Smart AI Instructions"
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {

    if (charIndex < words[wordIndex].length) {

      const timeout = setTimeout(() => {
        setText(prev => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);

    } else {

      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1500);

    }

  }, [charIndex, wordIndex]);

  return (

    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">

      {/* FLOATING PARTICLES */}

      <div className="absolute inset-0 opacity-20 pointer-events-none">

        <div className="particles"></div>

      </div>


      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-10 relative z-10">

        {/* LEFT TEXT */}

        <div>

          <h1 className="text-5xl font-bold mb-6 leading-tight">

            Master{" "}

            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">

              {text}

            </span>

            <span className="animate-pulse">|</span>

          </h1>


          <p className="text-gray-300 text-lg mb-8">

            Learn how to craft powerful AI prompts and unlock the
            full potential of modern AI systems.

          </p>


          <div className="flex gap-6">

            <Link to="/introduction">

              <button className="px-7 py-3 rounded-lg font-semibold
              bg-gradient-to-r from-purple-600 to-indigo-600
              hover:from-purple-700 hover:to-indigo-700
              shadow-xl transform hover:-translate-y-1 hover:scale-105
              transition duration-300 cursor-pointer">

                Start Learning

              </button>

            </Link>


            <Link to="/basics">

              <button className="px-7 py-3 rounded-lg font-semibold
              border border-gray-400
              hover:bg-white hover:text-black
              transform hover:-translate-y-1 hover:scale-105
              transition duration-300 cursor-pointer">

                Explore Concepts

              </button>

            </Link>

          </div>

        </div>


        {/* RIGHT IMAGE */}

        <div className="flex justify-center">

          <img
            src={heroImg}
            alt="Prompt Engineering"
            className="w-[420px] rounded-xl shadow-2xl
            animate-[float_4s_ease-in-out_infinite]
            hover:scale-105 hover:shadow-purple-500/50
            transition duration-300 cursor-pointer"
          />

        </div>

      </div>

    </section>

  );
}

export default Hero;