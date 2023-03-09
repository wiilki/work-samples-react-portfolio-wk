import React from "react";
import '../styles/Portfolio.css';

function Project(props) {
  return (
    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
      {props.projects.map((project) => (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={project.id}>
          <div className="portfolio-wrap">
            <img src={project.screenshot} className="img-fluid" alt="screenshot"></img>
            <div className="portfolio-info">
              <h4>{project.title}</h4>
              <p>{project.type}</p>
              <div className="portfolio-links">
                <a href="{project.screenshot}" data-gallery="portfolioGallery"
                  class="portfolio-lightbox" title={project.title}><i
                    class="bx bx-plus"></i></a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
