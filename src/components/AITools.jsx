import { FaRobot, FaImage, FaCode, FaBrain } from "react-icons/fa";
import "./AITools.css";

function AITools() {

  const tools = [
    { name: "ChatGPT", icon: <FaRobot size={28} /> },
    { name: "Midjourney", icon: <FaImage size={28} /> },
    { name: "GitHub Copilot", icon: <FaCode size={28} /> },
    { name: "Claude", icon: <FaBrain size={28} /> }
  ];

  return (

    <section className="ai-tools-section">

      <div className="ai-tools-container">

        <h2 className="ai-tools-title">
          Popular AI Tools
        </h2>

        <div className="ai-tools-grid">

          {tools.map((tool, index) => (

            <div key={index} className="ai-tool-card">

              <div className="ai-tool-icon">
                {tool.icon}
              </div>

              <h3 className="ai-tool-name">
                {tool.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}

export default AITools;