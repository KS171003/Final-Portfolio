import { useRef } from "react";
import "./Education.css";
import ImageContainer from "./imageContainer";
import one from "/Users/kunalsharma/Desktop/new-portfolio/src/assets/dav.jpg";
import two from "/Users/kunalsharma/Desktop/new-portfolio/src/assets/dav 2.jpg";
import three from "/Users/kunalsharma/Desktop/new-portfolio/src/assets/th.webp";
import { motion, useScroll, useTransform } from "framer-motion";
const Education = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  return (
    
  


<div className="relative h-screen">
  <div className="absolute inset-0">
    <div className="relative h-full w-full bg-black [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [&>div]:bg-[size:14px_24px]">
    <div></div>
    
  </div>
  </div>
  
  <div className="carousel">
      <div className="contentContainer">
        <motion.div className="images" style={{ x }}>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource={one} description={""} />
          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1>CM D.A.V. Sen. Sec. Public School  </h1>
            <h2><b>Class:</b> X </h2>
            <h2><b>Grades</b>: 95% </h2>
            <h2><b>Skills learned</b>: critical thinking, creativity, and skill-building.</h2>
            <h2><b>Achievements</b>: Science Olympiad participant </h2>
            <h2 className="ml-20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;National Science congress</h2>
            <h2 className="ml-20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Served as school representative in MUN&apos;s</h2>

          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource={two} description={""} />
          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1>CM D.A.V. Sen. Sec. Public School  </h1>
            <h2><b>Class</b>: XII </h2>
            <h2><b>Grades</b>: 96.6% </h2>
            <h2><b>Skills learned</b>: complex thinking, problem solving and skill-enhancing.</h2>
            <h2><b>Achievements</b>: National Science Congress (state level) </h2>
            <h2 className="ml-20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Served as Head Boy</h2>
            <h2 className="ml-20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Served as school representative in Exibitions</h2>

          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource={three} description={""} />
          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1>Thapar Institute of Engineering and Technology</h1>
            <h2><b>Degree</b>: BE-Computer Science </h2>
            <h2><b>Tech Skills</b>: Web-Development, C/C++ ,Python ,AI/ML </h2>
            <h2><b>Achievement</b>: Served as Group Reprentative</h2>
            

          </motion.div>
        </motion.div>
      </div>
    </div>
</div>
);
};

export default Education;