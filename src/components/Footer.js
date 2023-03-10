import React from "react";
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <div className="container">
                <h3>Will Kim</h3>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/thewillkim/" target="blank" className="linkedin">LinkedIn</a>
                </div>
                <div className="copyright">
                    &copy; Copyright <strong><span>Will Kim</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;
