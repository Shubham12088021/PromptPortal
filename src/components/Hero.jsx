import { Link } from "react-router-dom";
import heroImg from "../assets/promptImg.webp";
import { useState, useEffect } from "react";
import "./Hero.css";

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

    <section className="hero-section">

      {/* particles */}
      <div className="hero-particles">
        <div className="particles"></div>
      </div>

      <div className="hero-container">

        {/* LEFT TEXT */}
        <div className="hero-text">

          <h1>
            Master{" "}
            <span className="hero-gradient-text">
              {text}
            </span>
            <span className="cursor">|</span>
          </h1>

          <p>
            Learn how to craft powerful AI prompts and unlock the
            full potential of modern AI systems.
          </p>

          <div className="hero-buttons">

            <Link to="/introduction">
              <button className="btn-primary">
                Start Learning
              </button>
            </Link>

            <Link to="/basics">
              <button className="btn-secondary">
                Explore Concepts
              </button>
            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="hero-image">

          <img
            src={heroImg}
            alt="Prompt Engineering"
          />

        </div>

      </div>

    </section>

  );
}

export default Hero;