function Roadmap(){

const steps = [
{title:"Basics",color:"bg-purple-100"},
{title:"Techniques",color:"bg-blue-100"},
{title:"Advanced",color:"bg-green-100"},
{title:"Applications",color:"bg-yellow-100"}
]

return(

<section className="py-20 bg-white">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">
Prompt Engineering Roadmap
</h2>

<div className="grid md:grid-cols-4 gap-6 text-center">

{steps.map((step,i)=>(

<div key={i}
className={`${step.color} p-6 rounded-xl font-semibold
shadow hover:shadow-xl hover:-translate-y-1
transition duration-300`}>

Step {i+1}

<div className="mt-2 text-lg">
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