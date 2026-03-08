import { Link, useLocation } from "react-router-dom";
import { FaBook, FaLightbulb, FaCode } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {

  const location = useLocation();

  const links = [
    { name: "Introduction", path: "/introduction", icon: <FaBook /> },
    { name: "Prompt Basics", path: "/basics", icon: <FaLightbulb /> },
    { name: "Prompt Techniques", path: "/techniques", icon: <FaCode /> },
  ];

  return (

    <aside className="sidebar">

      {/* Title */}

      <h2 className="sidebar-title">
        Prompt Docs
      </h2>

      {/* Navigation */}

      <div className="sidebar-links">

        {links.map((item) => {

          const active = location.pathname === item.path;

          return (

            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${active ? "active" : ""}`}
            >

              <span className="sidebar-icon">
                {item.icon}
              </span>

              {item.name}

            </Link>

          );

        })}

      </div>

    </aside>

  );

}

export default Sidebar;