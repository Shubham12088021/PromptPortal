import DocsLayout from "../components/DocsLayout";
import "./Introduction.css";

function Introduction() {

  return (

    <DocsLayout>

      <div className="intro-container">

        <div className="intro-box yellow">

          <h1 className="intro-title">
            Introduction to Prompt Engineering
          </h1>

          <p>
            Prompt engineering is the process of designing instructions
            that guide AI models to produce useful and accurate results.
          </p>

        </div>

        <div className="intro-box pink">

          <h2 className="intro-subtitle">
            Why Prompt Engineering Matters
          </h2>

          <ul className="intro-list">
            <li>Better AI responses</li>
            <li>Improved productivity</li>
            <li>Structured outputs</li>
          </ul>

        </div>

        <div className="intro-box blue">

          <h2 className="intro-subtitle">
            Example Prompt
          </h2>

          <p className="intro-code">
            Explain Artificial Intelligence in simple words.
          </p>

        </div>

      </div>

    </DocsLayout>

  );

}

export default Introduction;