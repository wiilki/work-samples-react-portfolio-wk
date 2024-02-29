import '../styles/Resume.css';
import { frontEndProficiencies, backEndProficiencies } from "../data/resumeData";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Resume() {
    return (
        <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Resume</h2>
                </div>
                <br />
                <h6 className="resume-download">Download my <a href="../imports/resume.pdf" download>RESUME</a></h6>
                <br />
                <div className="row">
                    <div className="col-lg-6">
                        <div className="resume-item">
                            <h4>Front-end Proficiencies</h4>
                            <ul>
                                {frontEndProficiencies.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="resume-item">
                            <h4>Back-end Proficiencies</h4>
                            <ul>
                                {backEndProficiencies.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
