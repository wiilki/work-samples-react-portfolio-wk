import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import About from "../src/components/About";
import Portfolio from "../src/components/Portfolio";
import Contact from "../src/components/Contact";
import Resume from "../src/components/Resume";
import Home from "../src/components/Home";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />    
      <Footer />
    </div>
  );
}

export default App;
