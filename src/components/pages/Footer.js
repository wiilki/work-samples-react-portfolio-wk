import React from "react";
import '../styles/Footer.css'

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/thewillkim/" target="blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/wiilki/" target="blank" className="github"><i className="bx bxl-github"></i></a>
                    <a href="https://stackoverflow.com/users/21405607/will" target="blank" className="stack-overflow"><i className="bx bxl-stack-overflow"></i></a>
                </div>
                <div className="copyright">
                    &copy; Copyright <strong><span>Will Kim</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;
