import React from "react";
import "./Projects.css";
import project1 from "../assets/project1.png"
 import work4 from "../../src/assets/work4.png"

const Projects = () => {
  return (
    <section className="services section" id="projects">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">My Works</span>
      
      <div className="projects-con">
        <div className="first-pro">
          <img src={project1} className="work1" alt="" />
          <h1 className="neurospark">NeuroSpark</h1>
          <h3 className="note">
            NeuroSpark is an innovative AI project designed to provide
            intelligent solutions and automate tasks, enhancing user experience
            and efficiency.
          </h3>
          <a href="" className="live-demo">Live Demo</a>
        </div>

        <div className="second-pro">
            <img src={work4} className="work4" alt="" />
            <h1 className="Ketus">KeAutos</h1>
            <h3 className="ketus-note">
                KeAtus deals on selling of Automobile vehicles.
            </h3>
            <a href="https://ke-atus.vercel.app/" className="live-Demo">Live Demo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
