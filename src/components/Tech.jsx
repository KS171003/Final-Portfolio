import Marquee from "react-fast-marquee";
import './Tech.css';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

const Tech = () => {
  return (
    <div>
      <div className="w-full mt-10 flex flex-col justify-center items-center text-neutral-200">
        <div className="w-[100%] flex flex-row text-xl">
        <Marquee  pauseOnHover={true} speed={190}>
            <div className="moving-text text-black flex flex-row">
              <FaHtml5 className="Tech"/>
              &nbsp;
              <FaCss3 className="Tech"/>
              &nbsp;
              <FaJs className="Tech"/>
              &nbsp;
              <FaReact className="Tech"/>
              &nbsp;
              <FaNodeJs className="Tech"/>
              &nbsp;
              <FaBootstrap className="Tech"/>
              &nbsp;
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Tech