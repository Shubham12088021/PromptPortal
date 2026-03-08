import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer(){

return(

<footer className="bg-gray-900 text-white py-12">

<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

<div>

<h2 className="text-xl font-bold mb-3 text-purple-400">
PromptPortal
</h2>

<p className="text-gray-400">
Learn prompt engineering and build smarter AI interactions.
</p>

</div>

<div>

<h3 className="font-semibold mb-3">
Resources
</h3>

<ul className="space-y-2 text-gray-400">

<li className="hover:text-white cursor-pointer">Documentation</li>
<li className="hover:text-white cursor-pointer">Examples</li>
<li className="hover:text-white cursor-pointer">Playground</li>

</ul>

</div>

<div>

<h3 className="font-semibold mb-3">
Connect
</h3>

<div className="flex gap-4 text-xl">

<FaGithub className="hover:text-purple-400 cursor-pointer"/>
<FaLinkedin className="hover:text-purple-400 cursor-pointer"/>
<FaTwitter className="hover:text-purple-400 cursor-pointer"/>

</div>

</div>

</div>

<div className="text-center text-gray-500 mt-8 text-sm">
© 2026 PromptPortal • Built with React
</div>

</footer>

)

}

export default Footer