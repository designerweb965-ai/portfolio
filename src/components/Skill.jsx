import React, { useEffect } from "react";
import skills from "./data/skills.json";
import img3 from "./images/html.png"
import img4 from "./images/css.png"
import img5 from "./images/javascript.png"
import img6 from "./images/react.png"
import img7 from "./images/node.png"
import img8 from "./images/firebase.png"
import img9 from "./images/graphql.png"
import img10 from "./images/mongodb.png"
import img11 from "./images/figma.png"
import Aos from "aos";



const Skills = () => {

  useEffect(()=>{
    Aos.init({
      duration:"2000"
    })
  })
  
  return (
    <>
      <div className="container skills" id="skills">
        <h1 className="hider">SKILLS</h1>
        <div className="main">
        <div className="items">
          <div
           data-aos="flip-right"
           className="hiderone">
            <img src={img3} alt="" className="html"/>
            <h6>Html</h6>
          </div>
                 {/* 2 */}
          <div
          data-aos="flip-right"
           className="hiderone">
            <img src={img4} alt="" className="html"/>
            <h6>CSS</h6>
          </div>
                {/* 3 */}
          <div
          data-aos="flip-right"
          className="hiderone">
            <img src={img5} alt="" className="html"/>
            <h6>JavaScript</h6>
          </div>
                {/* 4 */}
          <div
          data-aos="flip-right"
          className="hiderone">
            <img src={img6} alt="" className="html"/>
            <h6>React</h6>
          </div>
               {/* 5 */}
          <div
          data-aos="flip-right"
          className="hiderone">
            <img src={img7} alt="" className="html"/>
            <h6>Node</h6>
          </div>
               {/* 6 */}
          <div
           data-aos="flip-right"
          className="hiderone">
            <img src={img8} alt="" className="html"/>
            <h6>Firebase</h6>
          </div>
               {/* 7 */}
          <div
          data-aos="flip-right"
          className="hiderone">
            <img src={img9} alt="" className="html"/>
            <h6>GraphQl</h6>
          </div>
                {/* 8 */}
          <div
          data-aos="flip-right"
          className="hiderone">
            <img src={img10} alt="" className="html"/>
            <h6>MongoDB</h6>
          </div>
               {/* 9 */}
          <div
          data-aos="flip-right"
          className="hiderone">
            <img src={img11} alt="" className="html"/>
            <h6>Figma</h6>
          </div>
          
        </div>
        </div>
      </div>
    </>
  );
};

export default Skills;