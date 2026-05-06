import React, { useEffect, useRef } from "react";
import img from "./images/pic.png";
import Typed from "typed.js";

const HomeTwo = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Welcome to My Profile",
        "My Name is Muhammad Umair",
        "I'm Full Stack Developer",
        "Android Developer (JS)",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      
      {/* LEFT SIDE */}
      <div className="lefttwo">
        <h1 ref={typedRef}></h1>

        {/* ✅ CV Download Button (FIXED) */}
        <a
          href="/Umair-CV.pdf"
          download="Umair-CV.pdf"
          className="btn btn-outline-warning"
        >
          Download CV
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div className="righttwo">
        <img src={img} alt="Umair" className="imgone" />
      </div>

    </div>
  );
};

export default HomeTwo;