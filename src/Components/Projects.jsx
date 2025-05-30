import React from "react";
import "./Projects.css";
import project1 from "../assets/image.png"
 import work4 from "../../src/assets/image2.png"

const Projects = () => {
  return (
    <section className="services section" id="projects">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">My Works</span>
      
      <div className="projects-con">
        <div className="first-pro">
          <img src={project1} className="work1" alt="" />
          <h1 className="neurospark">Sneakers</h1>
          <h3 className="note">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
          </h3>
          <a href="https://sneakers-git-main-icewills-projects.vercel.app/" className="live-demo">Live Demo</a>
        </div>

        <div className="second-pro">
            <img src={work4} className="work4" alt="" />
            <h1 className="Ketus">Faces&Lashes</h1>
            <h3 className="ketus-note">
            Faces and Lashes is a premium Nigerian lash brand built on the belief that every woman deserves to feel confident and beautiful. We understand that your lashes are more than just an accessory—they're an expression of your inner radiance and personal style.
            </h3>
            <a href="https://facesnlashesng.vercel.app/" className="live-Demo">Live Demo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
