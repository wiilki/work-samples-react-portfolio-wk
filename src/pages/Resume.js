import '../styles/Resume.css';
import {
    frontEndProficiencies,
    backEndProficiencies,
    databaseManagementProficiencies,
    apisIntegrationProficiencies,
    fullStackProficiencies
} from "../data/resumeData";

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
                <h6 className="resume-download">Download my <a href="https://app.rezi.ai/s/oMVJO6lISu0pTn5AF3Gi" target="_blank" rel="noopener noreferrer">RESUME</a></h6>
                <br />
                <div className="row">
                    <div className="col-lg-4">
                        <div className="resume-item">
                            <h4>Front End Technologies</h4>
                            <ul>
                                {frontEndProficiencies.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="resume-item">
                            <h4>Back-End Development</h4>
                            <ul>
                                {backEndProficiencies.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="resume-item">
                            <h4>Database Management</h4>
                            <ul>
                                {databaseManagementProficiencies.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>APIs Integration</h4>
                            <ul>
                                {apisIntegrationProficiencies.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Full Stack</h4>
                            <ul>
                                {fullStackProficiencies.map((skill, index) => (
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
