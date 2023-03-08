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
        <section id="portfolio">
            <div class="section-title">
                <h2>Portfolio</h2>
            </div>
            <div class="portfolio-container">
                <Project projects={projects} />
            </div>
        </section>
    );
}

export default Portfolio;