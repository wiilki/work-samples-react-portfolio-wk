import React from "react";
import profileImg from "../assets/profile-img.jpg"

function About() {
    return (
        <div className="section-title">
            <div class="section-title">
                <h2>About</h2>
            </div>
            <p>My name is Will. I'm 34 years old and located out of Los Angeles. I am currently enrolled in UCLA
                Extentsion's Software Development Bootcamp. I hope to be a Full-stack Developer by April 2023.</p>
            <img src={profileImg} alt="profile-img"></img>
        </div>
    );
}

export default About;
