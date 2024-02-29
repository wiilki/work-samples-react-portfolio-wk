import Project from "../components/Project";
import '../styles/Portfolio.css';

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>

                <Project />

            </div>
        </section>
    );
}

export default Portfolio;
