import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/language.png";

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

    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-purple-900 shadow-xl py-3"
          : "bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800 py-4"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}

        <div className="flex items-center gap-3 group cursor-pointer">

          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md shadow-lg
          group-hover:scale-110 transition">

            <img src={logo} alt="logo" className="w-8 h-8" />

          </div>

          <h1 className="text-white text-xl font-bold tracking-wide">
            PromptPortal
          </h1>

        </div>


        {/* NAV LINKS */}

        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          {[
            { name: "Home", path: "/" },
            { name: "Learn", path: "/introduction" },
            { name: "Concepts", path: "/basics" },
            { name: "Strategies", path: "/techniques" }
          ].map((item) => (

            <Link
              key={item.path}
              to={item.path}
              className={`relative group px-1 transition transform hover:-translate-y-[2px]
              ${location.pathname === item.path ? "text-yellow-300" : ""}`}
            >

              {item.name}

              <span
                className="absolute left-0 -bottom-1 h-[3px] w-0
                bg-yellow-300 rounded-full transition-all duration-300
                group-hover:w-full"
              ></span>

            </Link>

          ))}

        </div>


        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">

          {/* SEARCH BAR */}

          <div className="relative hidden md:flex items-center">

            <FaSearch className="absolute left-4 text-gray-600 text-lg" />

            <input
              type="text"
              placeholder="Search prompts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 w-72 rounded-full
              bg-white text-gray-700
              border border-gray-300
              placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-purple-500
              transition"
            />

            {query && (

              <div className="absolute top-12 left-0 w-full bg-white text-black rounded-lg shadow-xl">

                {filtered.length > 0 ? (
                  filtered.map((item, i) => (

                    <p
                      key={i}
                      className="px-4 py-2 hover:bg-purple-100 cursor-pointer"
                    >
                      {item}
                    </p>

                  ))
                ) : (

                  <p className="px-4 py-2 text-gray-500">
                    No results
                  </p>

                )}

              </div>

            )}

          </div>


          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-xl hover:scale-110 transition"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="md:hidden bg-purple-900 text-white px-6 py-4 space-y-4">

          <Link className="block hover:text-yellow-300" to="/">Home</Link>
          <Link className="block hover:text-yellow-300" to="/introduction">Learn</Link>
          <Link className="block hover:text-yellow-300" to="/basics">Concepts</Link>
          <Link className="block hover:text-yellow-300" to="/techniques">Strategies</Link>

        </div>

      )}

    </nav>

  );
}

export default Navbar;