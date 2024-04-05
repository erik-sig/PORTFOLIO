import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import AboutDetails from "../AboutDetails/AboutDetails";
import "./AboutStyle.css";

const About = () => {
  const [details, setDetails] = useState({ name: "", text: "", color: "" });
  const [isHover, setIsHover] = useState(false);

  const inViewObject = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const icons = [
    "bi bi-git",
    "bi bi-filetype-jsx",
    "bi bi-filetype-py",
    "bi bi-filetype-scss",
    "bi bi-filetype-tsx",
  ];

  const handleHover = (event) => {
    const className = event.getAttribute("class");

    if (className.includes("git")) {
      setDetails((prev) => ({
        ...prev,
        name: "GIT",
        text: "Conhecimento sobre GIT Bash e GIT Desktop",
        color: "rgb(232 77 49)",
      }));
    }
    if (className.includes("jsx")) {
      setDetails((prev) => ({
        ...prev,
        name: "REACT",
        text: "Tecnologia que possuo conhecimento avançado das principais tecnologias, como hooks, componentização e funcionamento geral.",
        color: "rgb(102 219 251)",
      }));
    }
    if (className.includes("py")) {
      setDetails((prev) => ({
        ...prev,
        name: "PYTHON",
        text: "Conhecimento intermediário da tecnologia, focando principalmente em análise de dados com bibliotecas como PANDAS e automotização de atividades",
        color: "#366c9c",
      }));
    }
    if (className.includes("scss")) {
      setDetails((prev) => ({
        ...prev,
        name: "SASS",
        text: "Tecnologia que uso recentemente para organizar meus estilos de uma melhor forma",
        color: "rgb(206 107 156)",
      }));
    }
    if (className.includes("tsx")) {
      setDetails((prev) => ({
        ...prev,
        name: "TypeScript",
        text: "Conhecimento avançado da tecnologia que permite uma boa manuntenção e prática ao código limpo e organizado",
        color: "rgb(55 124 200)",
      }));
    }

    setIsHover(true);
  };

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
        Olá, meu nome é Erik Signori Thalheimer e assim como amante de
        tecnologia, tenho outros hobbies como esportes, jogos competitivos,
        história e acima de tudo, curiosidade sobre o Universo. Mas voltando a
        realidade... tenho experiências com python e análises de dados e logo
        depois tive interesse no ramo WEB aprendendo suas principais
        tecnologias. As principais são:
      </p>
      <div className='skills-container'>
        <h1>TOQUE PARA MAIS</h1>
        <div className='skills-imgs'>
          {icons.map((icon) => (
            <i
              key={icon}
              className={icon}
              onMouseOver={(e) => {
                handleHover(e.target);
              }}
              onMouseOut={() => {
                setIsHover(false);
              }}
            ></i>
          ))}
        </div>
      </div>
      <article className='details'>
        {isHover === true ? (
          <AboutDetails details={details}></AboutDetails>
        ) : (
          ""
        )}
      </article>
    </section>
  );
};

export default About;
