import DocsLayout from "../components/DocsLayout";
import "./Techniques.css";

function Techniques() {

  const techniques = [
    {
      title: "Zero-Shot Prompting",
      desc: "Ask the model to perform a task without giving examples.",
      example: `Translate "Hello" to French.`
    },
    {
      title: "Few-Shot Prompting",
      desc: "Provide examples so the model understands the pattern.",
      example: `Apple → Company
iPhone → Product`
    },
    {
      title: "Chain of Thought",
      desc: "Ask the model to reason step-by-step before answering.",
      example: `Solve step by step: 23 × 17`
    },
    {
      title: "Role Prompting",
      desc: "Assign a role to guide the model's behaviour.",
      example: `Act as a senior software engineer
and explain recursion.`
    },
    {
      title: "Step-by-Step Prompting",
      desc: "Break complex tasks into smaller steps.",
      example: `1. Summarize the article
2. Identify main ideas`
    },
    {
      title: "Structured Output",
      desc: "Request responses in a specific format like JSON or tables.",
      example: `Return result in JSON format.`
    }
  ];

  return (

    <DocsLayout>

      <div className="techniques-container">

        {/* Heading */}

        <h1 className="techniques-title">
          Core Prompt Techniques
        </h1>

        {/* Cards */}

        <div className="techniques-grid">

          {techniques.map((t, i) => (

            <div key={i} className="technique-card">

              <h2 className="technique-heading">
                {t.title}
              </h2>

              <p className="technique-desc">
                {t.desc}
              </p>

              <pre className="technique-code">
                {t.example}
              </pre>

            </div>

          ))}

        </div>

        {/* Example Section */}

        <div className="example-section">

          <h2 className="example-title">
            Example Prompt
          </h2>

          <p className="example-desc">
            Example combining role prompting and step-by-step reasoning.
          </p>

          <pre className="example-code">

{`You are a senior data analyst.

Task:
Analyze the dataset and explain the trend.

Step-by-step:

1. Identify the highest value
2. Compare growth across months
3. Summarize insights clearly

Dataset:
Jan: 120
Feb: 150
Mar: 200

Explain the result in simple language.`}

          </pre>

        </div>

      </div>

    </DocsLayout>

  );

}

export default Techniques;