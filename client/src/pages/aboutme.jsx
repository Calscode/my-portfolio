import Footer from "../Components/footer";
import duckfeeding from "../assets/duckfeeding.jpg"
import chhicken from "../assets/chhicken.jpg"
import gardening from "../assets/gardening.jpg"
import louvre from "../assets/louvre.jpg"
import tct from "../assets/tct.jpg"
import me from "../assets/me.jpg"
import Layout from "../Components/layout";

export default function Aboutme() {
  return (
    <Layout>
  <div className="prose prose-invert max-w-4xl w-full"> 
    <h1>About Me</h1>
  <h2>Personal 'Blurb'</h2>
  <p>A naturally curious, ambitous and driven guy who is arguably more of a jack of all trades than a master of any specific one (at this point, working on changing this a bit). I am tech savvy, I love to try new experiences in the professional domain as well as personal and I enjoy working with both teams or solo on tasks. <br/>
  </p>
  <h2>Fun facts</h2>
  <p>- I lived in France in my earlier 20s, picking up a high basic level of French, oui oui!</p>
  <p>- I have lived in several areas of London as well as several areas of Yorkshire (Don't ask me which I prefer!) </p>
  <p>- I recently have taken up gardening and caring for local ducks, namely one I have called Pascal and its definitely nepotism</p>
  <p>- I have been to 15 countries, 6% of the world. Aiming for more soon!</p>
  <p>- I rap for fun and play around with music</p>

  <h2>Some photos etc..</h2>
  
  <div className="flex flex-wrap gap-4 justify-center my-4">
    <img src={duckfeeding} alt="Feeding the ducks" className="w-60 rounded shadow-md"/>
    <img src={chhicken} alt="Pascal wanted poster" className="w-60 rounded shadow-md" />
    <img src={gardening} alt="Planting Leaks" className="w-60 rounded shadow-md" />
    <img src={louvre} alt="Day at the louvre" className="w-60 rounded shadow-md" />
    <img src={me} alt="Photo of me" className="w-60 rounded shadow-md" />
    <img src={tct} alt="teenage cancer trust" className="w-60 rounded shadow-md" />

  </div>

  <Footer/>
  </div>
  </Layout>
  )
}