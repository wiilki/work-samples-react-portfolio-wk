import React from "react";
import profileImg from "../assets/profile-img.jpg";
import '../styles/About.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>About</h2>
                    <p>My name is Will. I'm 34 years old and located out of Los Angeles. I am currently enrolled in UCLA
                        Extentsion's Software Development Bootcamp. I hope to be a Full-stack Developer by April 2023.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={profileImg} alt="profile-img" className="img-fluid" />
                    </div>
                    <div className=" col-lg-8 pt-4 pt-lg-0 content">
                        <h3>UI/UX Designer &amp; Web Developer.</h3>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>June 1988</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a href="https://william-kim.com/">william-kim.com</a></span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Los Angeles, USA</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>34</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href="mailto:thewillkim@icloud.com">thewillkim@icloud.com</a></span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default About;