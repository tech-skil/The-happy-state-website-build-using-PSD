import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Team from "./Components/Team";
import ExTeam from "./Components/Exteam";
import Happyimg from "./Components/Happyimg";
import Aboutus from "./Components/Aboutus";
import OurTeam from "./Components/OurTeam";
import OurMathods from "./Components/OurMathods";
import Contact from "./Components/Contact";
import Location from "./Components/Location";
import Fotter from "./Components/Fotter";

function App() {

  return (
    
    <>
    <div className="lg:container mx-auto">
    <Navbar/>
    <About/>
    <div className="relative flex justify-center">
      <div className="absolute z-10 ">
    <Team />
      </div>
    <div className="absolute w-full top-60 z-1">
    <ExTeam />
      <Happyimg/>
      <Aboutus/>
      <OurTeam/>
      <OurMathods/>
      <Contact/>
      <Location/>
      <Fotter/>



      
    </div>
    </div>
    </div>
    </>
  )
}

export default App
