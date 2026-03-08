import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CommandPalette.css";

function CommandPalette() {

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const pages = [
    { name: "Home", path: "/" },
    { name: "Introduction", path: "/introduction" },
    { name: "Prompt Basics", path: "/basics" },
    { name: "Prompt Techniques", path: "/techniques" }
  ];

  const filtered = pages.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {

    const handleKey = (e) => {

      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, []);

  if (!open) return null;

  return (

    <div className="command-overlay">

      <div className="command-box">

        <input
          type="text"
          placeholder="Search pages..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="command-input"
        />

        <div>

          {filtered.map((item, i) => (

            <div
              key={i}
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
              className="command-item"
            >

              {item.name}

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default CommandPalette;