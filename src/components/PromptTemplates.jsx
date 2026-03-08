import { FaPenNib, FaCode, FaLightbulb } from "react-icons/fa";

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

<section className="bg-gray-100 py-20">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">
Popular Prompt Templates
</h2>

<div className="grid md:grid-cols-3 gap-8">

{templates.map((item,i)=>(

<div key={i}
className="p-6 bg-white rounded-xl shadow-md
hover:shadow-2xl hover:-translate-y-2
transition duration-300 cursor-pointer">

<div className="text-purple-600 mb-3">
{item.icon}
</div>

<h3 className="text-xl font-bold mb-2">
{item.title}
</h3>

<p className="text-gray-600">
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