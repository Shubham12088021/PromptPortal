import DocsLayout from "../components/DocsLayout";
import "./Basics.css";

function Basics() {

  return (

    <DocsLayout>

      <div className="basics-container">

        <h1 className="basics-title">
          Prompt Basics
        </h1>

        <p className="basics-text">
          Prompt engineering is the process of designing inputs for AI models
          so they produce better and more accurate outputs.
        </p>

        <div className="basics-box purple">

          <h2>
            What is a Prompt?
          </h2>

          <p>
            A prompt is the instruction or question you give to an AI model.
            The quality of the prompt directly affects the quality of the response.
          </p>

        </div>

        <div className="basics-box blue">

          <h2>
            Example Prompt
          </h2>

          <p className="code-example">
            Explain machine learning in simple words.
          </p>

        </div>

      </div>

    </DocsLayout>

  );

}

export default Basics;