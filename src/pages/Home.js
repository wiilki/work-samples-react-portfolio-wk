import { useEffect, useRef } from 'react';
import { init } from 'ityped';

function Home() {
  const textRef = useRef(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Check if iTyped has already been initialized to prevent double initialization
    if (textRef.current && !isInitialized.current) {
      init(textRef.current, {
        showCursor: true,
        strings: ['a Coder', 'a Developer', 'a Freelancer'],
      });
      isInitialized.current = true; 
    }

  }, []);

  return (
    <section id="home" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Will Kim</h1>
        <p>I'm <span ref={textRef}></span></p>
      </div>
    </section>
  );
}

export default Home;
