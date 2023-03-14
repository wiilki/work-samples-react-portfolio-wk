import React from "react";
import Project from "./Project";
import '../styles/Portfolio.css';

const projects = [
    {
        title: "Employee Database Manager",
        screenshot: "/imports/portfolio/portfolio-1.jpg",
        repo: "https://github.com/wiilki/employee-database-manager-app-wk",
        type: "App",
    },
    {
        title: "Simple Note Taker",
        screenshot: "/imports/portfolio/portfolio-2.jpg",
        repo: "https://github.com/wiilki/simple-note-taker-application-wk",
        type: "Web",
    },
    {
        title: "Employee Webpage Generator",
        screenshot: "/imports/portfolio/portfolio-3.jpg",
        repo: "https://github.com/wiilki/team-profile-webpage-generator-wk",
        type: "App",
    },
    {
        title: "Professional README Generator",
        screenshot: "/imports/portfolio/portfolio-4.jpg",
        repo: "https://github.com/wiilki/professional-readme-generator-wk",
        type: "App",
    },
    {
        title: "Marvel Geeks Fandom",
        screenshot: "/imports/portfolio/portfolio-5.jpg",
        repo: "https://github.com/wiilki/marvel-geeks-fandom-page",
        type: "Web",
    },
    {
        title: "City Weather Search",
        screenshot: "/imports/portfolio/portfolio-6.jpg",
        repo: "https://github.com/wiilki/city-weather-search-app-wk",
        type: "Web",
    },
    {
        title: "Current Work Day Scheduler",
        screenshot: "/imports/portfolio/portfolio-7.jpg",
        repo: "https://github.com/wiilki/current-work-day-scheduler-wk",
        type: "Web",
    },
    {
        title: "Time Javascript Quiz",
        screenshot: "/imports/portfolio/portfolio-8.jpg",
        repo: "https://github.com/wiilki/timed-javascript-quiz-wk",
        type: "Web",
    },
    {
        title: "Random Password Generator",
        screenshot: "/imports/portfolio/portfolio-9.jpg",
        repo: "https://github.com/wiilki/random-password-generator-refactor",
        type: "Web",
    },
    {

        title: "Ecommmerce Database Manager (back-end)",
        screenshot: "/imports/portfolio/portfolio-10.jpg",
        repo: "https://github.com/wiilki/ecommerce-database-manager-back-end",
        type: "App",
    },
    {

        title: "CMS Style Tech Blog",
        screenshot: "/imports/portfolio/portfolio-11.jpg",
        repo: "https://github.com/wiilki/CMS-style-tech-blog-wk",
        type: "Web",
    },
];

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-App">App</li>
                            <li data-filter=".filter-Web">Web</li>
                        </ul>
                    </div>
                </div>

                <Project projects={projects} />

            </div>
        </section>
    );
}

export default Portfolio;