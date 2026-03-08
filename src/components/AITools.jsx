import { FaRobot, FaImage, FaCode, FaBrain } from "react-icons/fa";

function AITools() {

  const tools = [
    { name: "ChatGPT", icon: <FaRobot size={28} /> },
    { name: "Midjourney", icon: <FaImage size={28} /> },
    { name: "GitHub Copilot", icon: <FaCode size={28} /> },
    { name: "Claude", icon: <FaBrain size={28} /> }
  ];

  return (

    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Popular AI Tools
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          {tools.map((tool, index) => (

            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-md
              hover:shadow-2xl hover:-translate-y-2
              transition duration-300 cursor-pointer"
            >

              <div className="flex justify-center mb-4 text-purple-600">
                {tool.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {tool.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}

export default AITools