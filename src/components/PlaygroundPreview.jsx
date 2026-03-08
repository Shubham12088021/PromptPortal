import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import "./PlaygroundPreview.css";

function PlaygroundPreview(){

return(

<section className="playground-section">

<div className="playground-container">

{/* LEFT SIDE */}

<div className="playground-text">

<h2>
Try the Prompt Playground
</h2>

<p>
Experiment with prompts and see how AI generates responses instantly.
</p>

<Link to="/playground">

<button className="playground-btn">

Open Playground

</button>

</Link>

</div>


{/* RIGHT SIDE */}

<div className="playground-card">

<div className="playground-card-header">

<FaRobot />

<span>AI Playground</span>

</div>

<p className="label">Prompt:</p>

<p className="prompt-box">
Explain machine learning in simple words.
</p>

<p className="label">AI Response:</p>

<p className="response-box">
Machine learning is a way for computers to learn patterns from data so they can make predictions without being explicitly programmed.
</p>

</div>

</div>

</section>

)

}

export default PlaygroundPreview