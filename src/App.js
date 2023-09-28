import Home from "../src/components/Home";
import About from "./components/About";
import FCourses from "./components/FCourses";
import Pcourses from "./components/Pcourses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Pcourses />
      <FCourses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
