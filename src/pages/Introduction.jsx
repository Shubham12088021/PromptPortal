import DocsLayout from "../components/DocsLayout";

function Introduction() {

  return (

    <DocsLayout>

      {/* your existing code unchanged */}

      <div className="max-w-5xl mx-auto p-10 space-y-6">

        <div className="bg-yellow-100 p-6 rounded-lg shadow">

          <h1 className="text-3xl font-bold mb-3">
            Introduction to Prompt Engineering
          </h1>

          <p>
            Prompt engineering is the process of designing instructions
            that guide AI models to produce useful and accurate results.
          </p>

        </div>

        <div className="bg-pink-100 p-6 rounded-lg shadow">

          <h2 className="text-xl font-bold mb-2">
            Why Prompt Engineering Matters
          </h2>

          <ul className="list-disc ml-6 space-y-1">
            <li>Better AI responses</li>
            <li>Improved productivity</li>
            <li>Structured outputs</li>
          </ul>

        </div>

        <div className="bg-blue-100 p-6 rounded-lg shadow">

          <h2 className="text-xl font-bold mb-2">
            Example Prompt
          </h2>

          <p className="bg-white p-3 rounded font-mono">
            Explain Artificial Intelligence in simple words.
          </p>

        </div>

      </div>

    </DocsLayout>

  );

}

export default Introduction;

