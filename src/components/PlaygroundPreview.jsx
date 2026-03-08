import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

function PlaygroundPreview(){

return(

<section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

<div>

<h2 className="text-4xl font-bold mb-4">
Try the Prompt Playground
</h2>

<p className="text-gray-300 mb-6 text-lg">
Experiment with prompts and see how AI generates responses instantly.
</p>

<Link to="/playground">

<button className="px-7 py-3 bg-yellow-400 text-black rounded-lg
font-semibold shadow-lg hover:bg-yellow-500 hover:scale-105
transition duration-300 cursor-pointer">

Open Playground

</button>

</Link>

</div>

<div className="bg-black/50 p-6 rounded-xl backdrop-blur-lg shadow-xl border border-purple-400/20">

<div className="flex items-center gap-2 mb-3 text-purple-300">
<FaRobot />
<span>AI Playground</span>
</div>

<p className="text-gray-400 mb-2">Prompt:</p>

<p className="bg-black p-3 rounded text-green-400 text-sm">
Explain machine learning in simple words.
</p>

<p className="text-gray-400 mt-4 mb-2">AI Response:</p>

<p className="bg-black p-3 rounded text-gray-200 text-sm leading-relaxed">
Machine learning is a way for computers to learn patterns from data so they can make predictions without being explicitly programmed.
</p>

</div>

</div>

</section>

)

}

export default PlaygroundPreview