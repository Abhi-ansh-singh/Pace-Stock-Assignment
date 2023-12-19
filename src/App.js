import Header from "../src/Components/Header/Header.js";
import About from "./Components/About/About.js";
import Footer from "./Components/Footer/Footer.js";
import Skills from "./Components/Skills/Skills.js";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage.js";
import RecentProjects from "./Components/RecentProjects/RecentProjects.js";

function App() {
  
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <RecentProjects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
