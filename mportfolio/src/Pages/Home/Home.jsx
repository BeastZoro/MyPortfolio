import React from "react";
import "./Home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section className="home  md:h-[80vh] relative top-[90px] flex flex-col items-center justify-center gap-[50px] py-[50px] dark:bg-dark dark:text-light-text bg-light text-dark-text">
      <div className="home_info flex flex-col gap-[30px] px-[20px]">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-[2rem] md:text-[3.5rem] uppercase font-bold">
            Hey I'M, mukesh kumar
          </h1>
          <p className="max-w-[80%] mx-auto">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>

        <div className="home_btns">
          <a
            className="bg-[#A64DA6] text-light-text"
            href="./Mukesh_Resume.pdf"
            download={true}
          >
            Resume
          </a>
          <Link to="projects" smooth duration={500} className="bg-gray-200 text-dark-text">
            Projects
          </Link>
        </div>
      </div>

      <div className="mouse_anim flex  flex-col items-center justify-center gap-3">
        <div className="mouse_outline"></div>
        <p>scroll down</p>
      </div>
    </section>
  );
};

export default Home;
