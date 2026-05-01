import React, { useEffect, useRef } from 'react'
import pdf from "../pdf/resume.pdf"
import img from './images/pic.png'
import Typed from "typed.js"
// import umair from "./data"


const HomeTwo = () => {
    const typedRef = useRef(null);
    useEffect(() => {

    const options = {
      strings: [
        "Welcome to My Profile",
        "My Name is Muhammad Umair",
        "I'm Full Stack Developer",
        "Androide Developer (J.S)",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id='home'>
        <div className="lefttwo">
            <h1 ref={typedRef}></h1>

            <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="righttwo">
            <img src={img} alt="" className='imgone' />          
        </div>
      </div>
    </>
  )
}

export default HomeTwo
