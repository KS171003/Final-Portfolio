import {ABOUT_TEXT} from "../constants";
import { motion } from "framer-motion";
import "./About.css";
const About = () => {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition:{
          duration:4,
        }
      }}
      viewport={{
        once:true,
      }}

    className="split-word">
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="mt-20 text-8xl mx-9 text-black font-aesthetic flex justify-between font-semibold">
      <span className="text-left">About </span>
      <span id="me" className="text-right px-24 "> Me </span>
      </h2>
      <div className="flex flex-wrap py-10">
        <div className="w-full  lg:p-5">
          <div className="flex item-center justify-center">
            <p id="about_text" className="text-4xl text-black font-sans">Kunal <span className="text-base">HE/HIM</span> {ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default About
