import { contactInfo } from "../data/myData";
import '../styles/Footer.css';

function Footer() {
    return (
        <footer id="footer">
            <div className="container">

                {/* Social Link */}
                <div className="social-links">
                    <a href={contactInfo.socialLinks.linkedIn} target="_blank" rel="noreferrer noopener" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    <a href={contactInfo.socialLinks.github} target="_blank" rel="noreferrer noopener" className="github"><i className="bx bxl-github"></i></a>
                </div>

                {/* Copyright */}
                <div className="copyright">
                    &copy; Copyright <strong><span>NexaTech Solutions LLC</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;
