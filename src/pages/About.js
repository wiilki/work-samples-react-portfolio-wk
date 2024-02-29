import { biography, details } from '../data/myData';
import profileImg from "../assets/profile-img.jpg";
import '../styles/About.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function About() {
    return (
        <section id="about" className="about">
            <div class="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>About</h2>
                    <p>{biography}</p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={profileImg} alt="profile-img" className="img-fluid-profile" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>UI/UX Designer & Web Developer.</h3>
                        <div className="row">
                            {details.map((detail, index) => (
                                // Corrected className string template syntax and set to col-12 for full width
                                <div className='col-12' key={index}>
                                    <ul>
                                        <li>
                                            <i className={detail.icon}></i> <strong>{detail.title}:</strong> <span>{detail.content}</span>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
