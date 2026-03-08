function Stats(){

const stats=[
{value:"10K+",label:"Prompts Generated"},
{value:"5K+",label:"Users Learning"},
{value:"100+",label:"Prompt Templates"}
]

return(

<section className="py-20 bg-white">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-10">

{stats.map((s,i)=>(

<div key={i}
className="p-6 rounded-xl hover:shadow-xl transition">

<h3 className="text-4xl font-bold text-purple-600">
{s.value}
</h3>

<p className="text-gray-600 mt-2">
{s.label}
</p>

</div>

))}

</div>

</section>

)

}

export default Stats