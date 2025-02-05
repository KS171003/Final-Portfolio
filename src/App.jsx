

import Education from "./components/Education";
import Navbar from "./components/Navbar";
import { TextParallaxContentExample } from "./components/ContactMe";
import Tech from "./components/Tech";
import { RevealLinks } from "./EducationText";
import TypeText from "./typeText";

import About from "/Users/kunalsharma/Desktop/new-portfolio/src/components/About.jsx";
import Hero from "/Users/kunalsharma/Desktop/new-portfolio/src/components/Hero.jsx";


const App = () => {
  
  return (
    <div className="overflow-x-hidden text-neutral-300 h-full scroll-snap-type-y-mandatory overflow-y-scroll">
      <div className="relative h-screen scroll-snap-align-start">
        <div className="absolute inset-0">
          <div className="relative h-full w-full bg-slate-950 [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [&>div]:bg-[size:14px_24px] [&>div]:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
            <div></div>
          </div>
        </div>
        <section id="home" className="h-screen scroll-snap-align-center">
          <Navbar />
          <Hero />
        </section>
      </div>
      <section id="about" className="h-screen scroll-snap-align-center ">
        <About />
        <div className="flex flex-row ">
        <h1 className="text-2xl my-20 ml-[500px] text-gray-390" id="hereAreMy">Here are my&nbsp;</h1>
        <div className="flex justify-center my-10" id="technologies-skills">
        <TypeText />
        </div>
        </div>
       <div className="cursor-pointer mb-0 relative h-40 w-full bg-slate-950 [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [&>div]:bg-[size:14px_24px]]">
          <Tech />
        </div>
      </section>
      <RevealLinks/>
      
      <Education/>
      <TextParallaxContentExample/>
    </div>
  );
};

export default App;
