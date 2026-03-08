import { FaPenNib, FaCode, FaLightbulb } from "react-icons/fa";
import "./PromptTemplates.css";

function PromptTemplates(){

const templates = [
{
title:"Content Writing",
icon:<FaPenNib size={22}/>,
desc:"Generate blog posts, social media captions, and marketing content."
},
{
title:"Code Generation",
icon:<FaCode size={22}/>,
desc:"Use prompts to generate code snippets and debug programs."
},
{
title:"Idea Generation",
icon:<FaLightbulb size={22}/>,
desc:"Create innovative ideas for startups, apps, and projects."
}
]

return(

<section className="templates-section">

<div className="templates-container">

<h2 className="templates-title">
Popular Prompt Templates
</h2>

<div className="templates-grid">

{templates.map((item,i)=>(

<div key={i} className="template-card">

<div className="template-icon">
{item.icon}
</div>

<h3 className="template-title">
{item.title}
</h3>

<p className="template-desc">
{item.desc}
</p>

</div>

))}

</div>

</div>

</section>

)

}

export default PromptTemplates