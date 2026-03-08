import { useState } from "react";

function Playground() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const generateResponse = () => {

    setLoading(true);

    setTimeout(() => {

      setResponse(
        "AI response simulation: " + prompt
      );

      setLoading(false);

    }, 1000);

  };

  return (

    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        Prompt Playground
      </h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write your AI prompt..."
        className="w-full h-40 p-4 border rounded-lg mb-4 focus:outline-purple-500"
      />

      <button
        onClick={generateResponse}
        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {response && (

        <div className="mt-6 p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">

          <h3 className="font-semibold mb-2">
            AI Response
          </h3>

          {response}

        </div>

      )}

    </div>

  );
}

export default Playground;