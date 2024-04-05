import { useInView } from "react-intersection-observer";
import AboutDetails from "../AboutDetails/AboutDetails";
import "./AboutStyle.css";
import { useContext } from "react";
import { TechContext } from "../../providers/tech";

import techsData from "../../data/techs.json";

const About = () => {
  const inViewObject = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { hover, handleHover, handleTechDetails } = useContext(TechContext);

  return (
    <section
      className={
        inViewObject.inView
          ? "about-container container blink-animation"
          : "about-container container hide"
      }
      id='about'
      ref={inViewObject.ref}
    >
      <h1 className='title'>SOBRE MIM</h1>
      <p className='text'>
        Venho de alguns meses de estudos em que inicialmente tive um foco em
        python com análises de dados e logo depois tive interesse no ramo WEB
        aprendendo suas principais tecnologias. As principais são:
      </p>
      <div className='skills-container'>
        <h1>TOQUE PARA MAIS</h1>
        <div className='skills-imgs'>
          {techsData.technologies.map((tech) => (
            <img
              src={tech.img}
              alt=''
              key={tech.id}
              onMouseOver={() => {
                handleTechDetails(tech.id);
              }}
              onMouseOut={() => {
                handleHover();
              }}
            />
          ))}
        </div>
      </div>
      <article className='details'>
        {hover === true ? <AboutDetails></AboutDetails> : ""}
      </article>
    </section>
  );
};

export default About;
