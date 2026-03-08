import Hero from "../components/Hero";
import PromptTemplates from "../components/PromptTemplates";
import PlaygroundPreview from "../components/PlaygroundPreview";
import Stats from "../components/Stats";
import AITools from "../components/AITools";
import Roadmap from "../components/Roadmap";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import "./Home.css";

function Home(){

return(

<div className="home-page">

<Hero/>

<PromptTemplates/>

<PlaygroundPreview/>

<Stats/>

<AITools/>

<Roadmap/>

<FAQ/>


</div>

)

}

export default Home;