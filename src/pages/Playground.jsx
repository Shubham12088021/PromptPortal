import { useState } from "react";
import "./Playground.css";

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

    <div className="playground-page">

      <h1 className="playground-title">
        Prompt Playground
      </h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write your AI prompt..."
        className="playground-textarea"
      />

      <button
        onClick={generateResponse}
        className="playground-button"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {response && (

        <div className="playground-response">

          <h3>
            AI Response
          </h3>

          {response}

        </div>

      )}

    </div>

  );
}

export default Playground;