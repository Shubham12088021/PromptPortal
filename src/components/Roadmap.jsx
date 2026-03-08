import "./Roadmap.css";

function Roadmap(){

const steps = [
{title:"Basics",color:"purple"},
{title:"Techniques",color:"blue"},
{title:"Advanced",color:"green"},
{title:"Applications",color:"yellow"}
]

return(

<section className="roadmap-section">

<div className="roadmap-container">

<h2 className="roadmap-title">
Prompt Engineering Roadmap
</h2>

<div className="roadmap-grid">

{steps.map((step,i)=>(

<div
key={i}
className={`roadmap-card ${step.color}`}
>

Step {i+1}

<div className="roadmap-step">
{step.title}
</div>

</div>

))}

</div>

</div>

</section>

)

}

export default Roadmap