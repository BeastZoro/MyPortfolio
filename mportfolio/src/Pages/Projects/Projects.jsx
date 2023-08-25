import React from "react";
import "./Projects.css";
import Project_data from "./Projects_data";
import Project from "../../components/Project";

const Projects = () => {
  console.log(Project_data);
  return (
    <section className="py-[50px] dark:bg-dark bg-light text-dark-text dark:text-light-text">
      <div className="about_title font-bold">
        <h1 className="relative uppercase tracking-widest text-[1.8rem] text-center py-4">
          Projects
        </h1>
      </div>

      <div className="projects_wrapper py-[20px]">
       {
        Project_data.map((ele,index) =>  <Project key={index} proj={ele} />)
       }
      </div>
    </section>
  );
};

export default Projects;
