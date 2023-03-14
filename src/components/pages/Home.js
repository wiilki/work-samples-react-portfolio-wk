import React, { useEffect, useRef } from "react";
import { init } from 'ityped';
import '../styles/Home.css';

function Home() {
  // create a reference to the <span> element that will hold the typed text
  const textRef = useRef();

  // use the ityped library to type out the given strings
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ['a Coder', 'a Developer', 'a Freelancer']
    });
  }, []);

  return (
    // render a section with a container holding a heading and the typed text
    <section id="home" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Will Kim</h1>
        <p>I'm <span ref={textRef}></span></p>
      </div>
    </section>
  );
}

export default Home;
