import React from 'react';
import Stack from "../assets/stackImage.png"

const Frontend = () => {
  return (
    <div className="skills_content">
     <h3 className="skills_title">Front-end Developer</h3>

        <div className="con">
        <div className="skills_box">
            <div className="skills_group"> 
                <div className="skills_data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills_name">HTML</h3>
                    <span className="skills_level">Basic</span>
                </div>
                </div>

                <div className="skills_data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills_name">CSS</h3>
                    <span className="skills_level">Basic</span>
                </div>
                </div>

                <div className="skills_data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills_name">JavaScript</h3>
                    <span className="skills_level">Professional</span>
                </div>
                </div> 
            </div>

            <div className="skills_group"> 

                <div className="skills_data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills_name">React</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
                </div> 
            </div>
        </div>
        <div className="stockImage">
        <img src={Stack} alt="" width='300px'/>
        </div>
        </div>
        
    </div>
  );
};

export default Frontend;