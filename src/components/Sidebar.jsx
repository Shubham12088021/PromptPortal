import { Link, useLocation } from "react-router-dom";
import { FaBook, FaLightbulb, FaCode, FaFlask } from "react-icons/fa";

function Sidebar() {

  const location = useLocation();

  const links = [
    { name: "Introduction", path: "/introduction", icon: <FaBook /> },
    { name: "Prompt Basics", path: "/basics", icon: <FaLightbulb /> },
    { name: "Prompt Techniques", path: "/techniques", icon: <FaCode /> },
  ];

  return (

    <aside className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-6">

      {/* Title */}

      <h2 className="text-lg font-bold mb-6 text-purple-600">
        Prompt Docs
      </h2>

      {/* Navigation */}

      <div className="flex flex-col gap-2">

        {links.map((item) => {

          const active = location.pathname === item.path;

          return (

            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
              ${active
                ? "bg-purple-600 text-white shadow"
                : "text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-800"
              }`}
            >

              <span className="text-sm">
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