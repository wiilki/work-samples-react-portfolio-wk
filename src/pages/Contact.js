
import { contactInfo } from "../data/myData";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Contact.css'
import 'aos/dist/aos.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Contact() {

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row mt-1">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>{contactInfo.location}</p>
            </div>
            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;