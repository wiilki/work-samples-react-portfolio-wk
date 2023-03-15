import React from "react";

function Project(props) {
  return (
    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
      {/* Iterating over an array of "projects" contained in the "props" object */}
      {props.projects.map((project, index) => (
        <div className={`col-lg-4 col-md-6 portfolio-item`} key={project.id || index}>
          <div className="portfolio-wrap">
            <img src={project.screenshot} className="img-fluid" alt="screenshot" />
            <div className="portfolio-info">
              <h4>{project.title}</h4>
              <div className="portfolio-links">
                <a href={project.repo} title={project.title} data-gallery="portfolioGallery" className="portfolio-lightbox" target="_blank" ><i className="bx bxl-github"></i></a>
                {/* Display icon only if 'deployed' value exists */}
                {project.deployed && (
                  <a href={project.deployed} title={project.title} data-gallery="portfolioGallery" className="portfolio-lightbox" target="_blank" >
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
