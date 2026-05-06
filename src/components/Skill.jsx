import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  
  const skillsData = [
    { name: "HTML", img: "/images/html.png" },
    { name: "CSS", img: "/images/css.png" },
    { name: "JavaScript", img: "/images/javascript.png" },
    { name: "React", img: "/images/react.png" },
    { name: "Tailwind CSS", img: "/images/tailwind.png" },
    { name: "Material UI", img: "/images/mui.png" },
    { name: "Next.js", img: "/images/next.png" },
    { name: "Node.js", img: "/images/node.png" },
  ];

  return (
    <div className="container skills" id="skills">
      <h1 className="hider">SKILLS</h1>

      <div className="main">
        <div className="items">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              data-aos="flip-right"
              className="hiderone"
            >
              {/* <img
                src={skill.img}
                alt={skill.name}
                className="html"
                onError={(e) => (e.target.src = "/images/default.png")}
              /> */}
              <h6>{skill.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;