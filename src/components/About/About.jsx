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
    "bi bi-filetype-html",
    "bi bi-filetype-css",
    "bi bi-filetype-js",
    "bi bi-git",
    "bi bi-filetype-jsx",
    "bi bi-filetype-py",
    "bi bi-filetype-scss",
  ];

  const handleHover = (event) => {
    const className = event.getAttribute("class");
    if (className.includes("html")) {
      setDetails((prev) => ({
        ...prev,
        name: "HTML",
        text: "Conhecimento geral de HTML e HTML semântico",
        color: "rgb(221 75 37)",
      }));
    }
    if (className.includes("css")) {
      setDetails((prev) => ({
        ...prev,
        name: "CSS",
        text: "Conhecimento geral das estilizações e animações do CSS base",
        color: "rgb(37 75 221)",
      }));
    }
    if (className.includes("js")) {
      setDetails((prev) => ({
        ...prev,
        name: "JS",
        text: "Utilização de uma boa lógica de programação e das principais funções de JS",
        color: "rgb(239 216 29)",
      }));
    }
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
        text: "Tecnologia que estou aprendendo atualmente. Possuo um conhecimento geral intermediário e sobre a utilização dos principais Hooks, API´s, componentização, além de querer começar a utlizar StyledComponents",
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
