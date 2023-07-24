import React, { useState } from "react";
import '../styles/Contact.css'

function Contact() {
  // Define states to keep track of email and message input field errors
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // Function to handle onBlur event for email and message input fields
  const handleBlur = (event) => {
    // Check if event was triggered by email input field
    if (event.target.name === "email") {
      // Check if email input value does not contain "@" character
      if (!event.target.value.includes("@")) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
    // Check if event was triggered by message input field
    if (event.target.name === "message") {
      // Check if message input value is empty
      if (event.target.value === "") {
        setMessageError(true);
      } else {
        setMessageError(false);
      }
    }
  };

  // Return JSX for Contact component
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row mt-1">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Los Angeles, CA</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p><a href="mailto:thewillkim@icloud.com">thewillkim@icloud.com</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;