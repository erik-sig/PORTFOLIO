import { useInView } from "react-intersection-observer";
import "./ProjectsStyle.css";
import projectData from "../../data/projects.json";
import { useContext } from "react";
import { ModalContext } from "../../providers/modal";

const Projects = () => {
  const inViewObject = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { handleModalVisible } = useContext(ModalContext);

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
          {projectData.projects.map((project) => (
            <img
              src={project.img}
              onClick={() => handleModalVisible(project.id)}
              key={project.id}
              className='projects'
            ></img>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
