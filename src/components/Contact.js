import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="section-title">
        <h2>Contact</h2>
      </div>
      <form className="email-form">
        <div className="row">
          <div>
            <input type="text" name="name" id="name" placeholder="Your Name" required></input>
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder="Your Email" required></input>
          </div>
        </div>
        <div>
          <textarea name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
