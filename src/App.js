import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import About from "../src/components/About";
import Portfolio from "../src/components/Portfolio";
import Contact from "../src/components/Contact";
import Resume from "../src/components/Resume";
import Home from "../src/components/Home";
import '../src/styles/index.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />    
      <Footer />
    </div>
  );
}

export default App;
