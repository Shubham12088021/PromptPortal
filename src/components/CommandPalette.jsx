import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-40 z-50">

      <div className="bg-white rounded-xl w-[500px] shadow-xl overflow-hidden">

        <input
          type="text"
          placeholder="Search pages..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 border-b outline-none"
        />

        <div>

          {filtered.map((item, i) => (

            <div
              key={i}
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
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