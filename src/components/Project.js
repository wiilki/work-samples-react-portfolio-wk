import React from "react";
import '../styles/Portfolio.css';

function Project(props) {
  return (
    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
      {props.projects.map((project, index) => (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={project.id || index}>
          <div className="portfolio-wrap">
            <img src={project.screenshot} className="img-fluid" alt="screenshot"></img>
            <div className="portfolio-info">
              <h4>{project.title}</h4>
              <div className="portfolio-links">
                <a href={project.repo} title={project.title} data-gallery="portfolioGallery" className="portfolio-lightbox"><i className="bx bx-plus"></i></a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
