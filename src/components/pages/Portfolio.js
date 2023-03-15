import React from "react";
import Project from "./Project";
import '../styles/Portfolio.css';

const projects = [
    {
        title: "Employee Database Manager",
        screenshot: "./imports/portfolio/portfolio-1.jpg",
        repo: "https://github.com/wiilki/employee-database-manager-app-wk",
    },
    {
        title: "Simple Note Taker",
        screenshot: "./imports/portfolio/portfolio-2.jpg",
        repo: "https://github.com/wiilki/simple-note-taker-application-wk",
    },
    {
        title: "Employee Webpage Generator",
        screenshot: "./imports/portfolio/portfolio-3.jpg",
        repo: "https://github.com/wiilki/team-profile-webpage-generator-wk",
    },
    {
        title: "Professional README Generator",
        screenshot: "./imports/portfolio/portfolio-4.jpg",
        repo: "https://github.com/wiilki/professional-readme-generator-wk",
    },
    {
        title: "Marvel Geeks Fandom",
        screenshot: "./imports/portfolio/portfolio-5.jpg",
        repo: "https://github.com/wiilki/marvel-geeks-fandom-page",
    },
    {
        title: "City Weather Search",
        screenshot: "./imports/portfolio/portfolio-6.jpg",
        repo: "https://github.com/wiilki/city-weather-search-app-wk",
    },
    {
        title: "Current Work Day Scheduler",
        screenshot: "./imports/portfolio/portfolio-7.jpg",
        repo: "https://github.com/wiilki/current-work-day-scheduler-wk",
    },
    {
        title: "Time Javascript Quiz",
        screenshot: "./imports/portfolio/portfolio-8.jpg",
        repo: "https://github.com/wiilki/timed-javascript-quiz-wk",
    },
    {
        title: "Random Password Generator",
        screenshot: "./imports/portfolio/portfolio-9.jpg",
        repo: "https://github.com/wiilki/random-password-generator-refactor",
    },
    {

        title: "Ecommmerce Database Manager (back-end)",
        screenshot: "./imports/portfolio/portfolio-10.jpg",
        repo: "https://github.com/wiilki/ecommerce-database-manager-back-end",
    },
    {

        title: "CMS Style Tech Blog",
        screenshot: "./imports/portfolio/portfolio-11.jpg",
        repo: "https://github.com/wiilki/CMS-style-tech-blog-wk",
    },
];

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>

                <Project projects={projects} />

            </div>
        </section>
    );
}

export default Portfolio;