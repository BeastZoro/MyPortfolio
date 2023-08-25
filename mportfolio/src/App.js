import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./Pages/Projects/Projects";

function App() {

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  console.log(theme)

  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
  
      <Home />
      <hr className="dark:bg-light bg-light w-full h-[20px]"/>
      <About />

      <Projects />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
