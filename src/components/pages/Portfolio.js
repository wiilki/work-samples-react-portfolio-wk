import React from "react";
import Project from "./Project";
import '../styles/Portfolio.css';

const projects = [
    {
        title: "Pet Picker MERN",
        screenshot: "./imports/portfolio/portfolio-15.jpg",
        repo: "https://github.com/wiilki/pet-picker",
        deployed: "https://pet-picker-mern.herokuapp.com/",
    },
    {

        title: "Just Another Text Editor",
        screenshot: "./imports/portfolio/portfolio-14.jpg",
        repo: "https://github.com/wiilki/just-another-text-editor-wk",
        deployed: "https://infinite-cliffs-55483.herokuapp.com/",
    },
    {

        title: "Social Network Data API",
        screenshot: "./imports/portfolio/portfolio-13.jpg",
        repo: "https://github.com/wiilki/social-network-data-api",
    },
    {

        title: "So You Want to Manage a Project",
        screenshot: "./imports/portfolio/portfolio-12.jpg",
        repo: "https://github.com/wiilki/so-you-want-to-manage-a-project",
        deployed: "https://vast-brook-40513.herokuapp.com/",
    },
    {

        title: "CMS Style Tech Blog",
        screenshot: "./imports/portfolio/portfolio-11.jpg",
        repo: "https://github.com/wiilki/CMS-style-tech-blog",
        deployed: "https://gentle-basin-90216.herokuapp.com/",
    },
    {
        title: "Employee Database Manager",
        screenshot: "./imports/portfolio/portfolio-1.jpg",
        repo: "https://github.com/wiilki/employee-database-manager-app-wk",
    },
    {
        title: "Simple Note Taker",
        screenshot: "./imports/portfolio/portfolio-2.jpg",
        repo: "https://github.com/wiilki/simple-note-taker-application-wk",
        deployed: "https://whispering-lake-09940.herokuapp.com/",
    },
    {

        title: "Ecommmerce Database Manager (back-end)",
        screenshot: "./imports/portfolio/portfolio-10.jpg",
        repo: "https://github.com/wiilki/ecommerce-database-manager-back-end",
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
        deployed: "https://wiilki.github.io/marvel-geeks-fandom-page/",
    },
    {
        title: "City Weather Search",
        screenshot: "./imports/portfolio/portfolio-6.jpg",
        repo: "https://github.com/wiilki/city-weather-search-app-wk",
        deployed: "https://wiilki.github.io/city-weather-search-app-wk/",
    },
    {
        title: "Current Work Day Scheduler",
        screenshot: "./imports/portfolio/portfolio-7.jpg",
        repo: "https://github.com/wiilki/current-work-day-scheduler-wk",
        deployed: "https://wiilki.github.io/current-work-day-scheduler-wk/",
    },
    {
        title: "Time Javascript Quiz",
        screenshot: "./imports/portfolio/portfolio-8.jpg",
        repo: "https://github.com/wiilki/timed-javascript-quiz-wk",
        deployed: "https://wiilki.github.io/timed-javascript-quiz-wk/",
    },
    {
        title: "Random Password Generator",
        screenshot: "./imports/portfolio/portfolio-9.jpg",
        repo: "https://github.com/wiilki/random-password-generator-refactor",
        deployed: "https://wiilki.github.io/random-password-generator-refactor/",
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