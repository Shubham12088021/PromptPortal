import DocsLayout from "../components/DocsLayout";

function Basics() {

  return (

    <DocsLayout>

      <div className="p-10 flex-1 space-y-6">

        <h1 className="text-3xl font-bold">
          Prompt Basics
        </h1>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Prompt engineering is the process of designing inputs for AI models
          so they produce better and more accurate outputs.
        </p>

        <div className="bg-purple-100 dark:bg-purple-900/40 p-6 rounded-xl">
          <h2 className="font-bold text-lg mb-2">
            What is a Prompt?
          </h2>

          <p>
            A prompt is the instruction or question you give to an AI model.
            The quality of the prompt directly affects the quality of the response.
          </p>
        </div>

        <div className="bg-blue-100 dark:bg-blue-900/40 p-6 rounded-xl">
          <h2 className="font-bold text-lg mb-2">
            Example Prompt
          </h2>

          <p className="bg-black text-green-400 p-3 rounded">
            Explain machine learning in simple words.
          </p>
        </div>

      </div>

    </DocsLayout>

  );
}

export default Basics;