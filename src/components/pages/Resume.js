import React from "react";
import '../styles/Resume.css'

function Resume() {
    return (
        <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Resume</h2>
                </div>
                <br></br>
                <h6 className="resume-download">Download my <a href="../imports/resume.pdf" download>RESUME</a></h6>
                <br></br>
                <div className="row">

                    <div className="col-lg-6">

                        <div className="resume-item">
                            <h4>Front-end Proficiencies</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>JQuery</li>
                                <li>responsive design</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="resume-item">
                            <h4>Back-end Proficiencies</h4>
                            <ul>
                                <li>APIs</li>
                                <li>Node</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
