import Marquee from "react-fast-marquee"
import "./Hero.css";
import profilePic from "./Default_make_cartoon_image_of_this_young_man_1_56784fe4-b8db-4c58-83be-4d442ca8b8e6_0.png"

const Hero = () => {
  return (
    <div>
      <div className="w-full mt-13 flex flex-col justify-center items-center text-neutral-200">
        <div className="w-[100%] flex flex-col">
        <Marquee speed={270}>
            <div className="moving-text">
              <p>&nbsp;&nbsp;KUNAL&nbsp;&nbsp;SHARMA</p>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="w-[100%] my-0px flex flex-col justify-center items-center text-neutral-200">

      <img src={profilePic} alt="my picture" className="myPic" />

      </div>
    </div>
  )
}

export default Hero
