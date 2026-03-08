import "./Stats.css";

function Stats(){

const stats=[
{value:"10K+",label:"Prompts Generated"},
{value:"5K+",label:"Users Learning"},
{value:"100+",label:"Prompt Templates"}
]

return(

<section className="stats-section">

<div className="stats-container">

{stats.map((s,i)=>(

<div key={i} className="stats-card">

<h3 className="stats-value">
{s.value}
</h3>

<p className="stats-label">
{s.label}
</p>

</div>

))}

</div>

</section>

)

}

export default Stats