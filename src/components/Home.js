import React from "react";
import '../styles/Home.css';

function Home() {
    return (
        <section id="home" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Will Kim</h1>
                <p>I'm <span className="typed" data-typed-items="a Coder, a Developer, a Freelancer"></span></p>
            </div>
        </section>

    );
}

export default Home;
