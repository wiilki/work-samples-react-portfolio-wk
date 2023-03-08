import React from "react";

function Project(props) {
  return (
    <div className="portfolio-wrap">
        {props.projects.map((project) => (
          <div className="portfolio-info">
         <h4>{project.title}</h4>
         <a href={project.repo} title={project.title}><img src={project.screenshot} alt="screenshot"></img></a>
        </div>
        ))}
      </div>
  
  );
}

export default Project;