import React from "react";
import imgok from "./images/ooo.webp";

const Projects = () => {
  return (
    <div className="container projects my-3" id="projects">
      <h1 className="hider">EXPERIENCE</h1>

      <div className="d-flex justify-content-center my-5">
        <div
          className="card bg-dark text-light"
          style={{
            width: "700px", // ✅ width increase
            border: "1px solid yellow",
            boxShadow: "5px 5px 10px rgba(184, 188, 178, 0.5)",
            background: "black",
          }}
        >
          {/* FLEX CONTAINER */}
          <div className="d-flex align-items-center">

            {/* LEFT SIDE TEXT */}
            <div className="card-body">
              <h3 className="card-title">6 Months Experience</h3>

              <p className="card-text">
                I have 6 months of experience working as a Frontend Developer,
                where I built responsive user interfaces using React, Tailwind CSS,
                and JavaScript. I also worked with APIs and improved UI/UX for better performance.
              </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <img
              src={imgok}
              alt="Experience"
              style={{
                width: "300px",
                height: "100%",
                objectFit: "cover",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;