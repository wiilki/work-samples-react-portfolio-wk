import { projectData } from "../data/projectData";
import "../styles/Portfolio.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Project() {
  return (
    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
      {projectData.map((project, index) => (
        <div className={`col-lg-4 col-md-6 portfolio-item`} key={project.id || index}>
          <div className="portfolio-wrap">
            <img src={project.screenshot} className="img-fluid" alt="screenshot" />
            <div className="portfolio-info">
              <h4>{project.title}</h4>
              <h3> {project.codes} </h3> 
              <div className="portfolio-links">
                <a href={project.repo} title={project.title} target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-github"></i>
                </a>
                {project.deployed && (
                  <a href={project.deployed} title={project.title} target="_blank" rel="noopener noreferrer">
                    <i className="bx bx-link"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;