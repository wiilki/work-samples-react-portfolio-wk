import React from "react";
import Project from "./Project";

const projects = [
    {
        id: 1,
        title: "Employee Database Manager",
        screenshot: "/img/portfolio/portfolio-1.jpg",
        repo: "https://github.com/wiilki/employee-database-manager-app-wk",
    },
];

function Portfolio() {
    return (
        <section id="portfolio" class="portfolio section-bg">
            <div class="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>
                <div className="portfolio-container">
                    <Project projects={projects} />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;