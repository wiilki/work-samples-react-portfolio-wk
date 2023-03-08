import React from "react";
import screenshot from "../../assets/img/portfolio/portfolio-1.jpg"

function Project1() {
    return (
        <div class="portfolio-wrap">
            <h4>Employee Manger</h4>
            <a href="https://github.com/wiilki/employee-database-manager-app-wk" title="Employee Database Manger"><img src={screenshot} alt="screenshot"></img></a>
        </div>

    );
}

export default Project1;
