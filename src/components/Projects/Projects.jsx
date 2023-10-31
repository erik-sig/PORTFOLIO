import React from "react";
import { useInView } from "react-intersection-observer";
import "./ProjectsStyle.css";

const Projects = ({ handleModalProject }) => {
  const projectsArray = [
    "todo-project",
    "car-project",
    "films-project",
    "github-project",
  ];

  const inViewObject = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section
        ref={inViewObject.ref}
        className={
          inViewObject.inView
            ? "projects-container container blink-animation"
            : "projects-container container hide"
        }
        id='projects'
      >
        <div className='projects-text-container'>
          <h1 className='title'>Projetos</h1>
          <p className='text'>
            Alguns projetos que eu fiz ao longo do meu aprendizado:
          </p>
        </div>
        <div className='projects-menu'>
          {projectsArray.map((project) => (
            <div
              key={project}
              id={project}
              className='projects'
              onClick={(e) => {
                handleModalProject(e.target);
                console.log(e);
              }}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
