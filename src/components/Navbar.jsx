import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/language.png";
import "./Navbar.css";

function Navbar() {

  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const topics = [
    "Prompt Basics",
    "Prompt Techniques",
    "Prompt Templates",
    "AI Prompt Tips"
  ];

  const filtered = topics.filter((t) =>
    t.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>

      <div className="navbar-container">

        {/* LOGO */}

        <div className="navbar-logo">

          <div className="logo-box">
            <img src={logo} alt="logo" />
          </div>

          <h1>PromptPortal</h1>

        </div>


        {/* NAV LINKS */}

        <div className="nav-links">

          {[
            { name: "Home", path: "/" },
            { name: "Learn", path: "/introduction" },
            { name: "Concepts", path: "/basics" },
            { name: "Strategies", path: "/techniques" }
          ].map((item) => (

            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            >

              {item.name}
              <span></span>

            </Link>

          ))}

        </div>


        {/* SEARCH */}

        <div className="search-box">

          <FaSearch className="search-icon"/>

          <input
            type="text"
            placeholder="Search prompts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {query && (

            <div className="search-results">

              {filtered.length > 0 ? (
                filtered.map((item, i) => (
                  <p key={i}>{item}</p>
                ))
              ) : (
                <p className="no-result">No results</p>
              )}

            </div>

          )}

        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-btn"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="mobile-menu">

          <Link to="/">Home</Link>
          <Link to="/introduction">Learn</Link>
          <Link to="/basics">Concepts</Link>
          <Link to="/techniques">Strategies</Link>

        </div>

      )}

    </nav>

  );
}

export default Navbar;