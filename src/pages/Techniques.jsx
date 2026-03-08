import DocsLayout from "../components/DocsLayout";

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

      <div className="p-10 max-w-6xl mx-auto">

        {/* Page Heading */}

        <h1 className="text-3xl font-bold mb-10">
          Core Prompt Techniques
        </h1>


        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {techniques.map((t, i) => (

            <div
              key={i}
              className="bg-white dark:bg-gray-900 border border-gray-200
              rounded-xl p-6 shadow-md hover:shadow-xl
              transition hover:-translate-y-1
              hover:border-purple-500"
            >

              <h2 className="text-lg font-semibold mb-2 text-purple-600">
                {t.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {t.desc}
              </p>

              <pre className="bg-gray-100 p-3 rounded-md text-sm font-mono text-gray-700 overflow-x-auto">
                {t.example}
              </pre>

            </div>

          ))}

        </div>


        {/* Example Section */}

        <div className="mt-16">

          <h2 className="text-2xl font-bold mb-4">
            Example Prompt
          </h2>

          <p className="text-gray-600 mb-6">
            Example combining role prompting and step-by-step reasoning.
          </p>

          <pre className="bg-black text-green-400 p-6 rounded-xl font-mono text-sm shadow-lg whitespace-pre-wrap">

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