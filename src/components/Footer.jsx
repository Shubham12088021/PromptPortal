import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer(){

return(

<footer className="footer">

<div className="footer-container">

{/* BRAND */}

<div className="footer-brand">

<h2 className="footer-logo">
PromptPortal
</h2>

<p>
Learn prompt engineering and build smarter AI interactions.
</p>

</div>


{/* QUICK LINKS */}

<div className="footer-links">

<h3>Quick Links</h3>

<ul>

<li>Home</li>
<li>Documentation</li>
<li>Examples</li>
<li>Playground</li>

</ul>

</div>


{/* SOCIAL */}

<div className="footer-social">

<h3>Connect</h3>

<div className="social-icons">

<FaGithub/>
<FaLinkedin/>
<FaTwitter/>

</div>

</div>


{/* NEWSLETTER */}

<div className="footer-newsletter">

<h3>Newsletter</h3>

<p>Get AI updates and prompt tips.</p>

<div className="newsletter-box">

<input
type="email"
placeholder="Your email"
/>

<button>
Subscribe
</button>

</div>

</div>

</div>


<div className="footer-bottom">

© 2026 PromptPortal • Built with React

</div>

</footer>

)

}

export default Footer