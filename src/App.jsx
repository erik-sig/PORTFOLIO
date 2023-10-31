import Navbar from "./components/Navbar/Navbar";
import Asides from "./components/Asides/Asides";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import PingPong from "./components/PingPong/PingPong";
import ModalProject from "./components/ModalProject/ModalProject";
import { useState } from "react";
import todoProjectImg from "./assets/imgs/todo-list.png";
import carProjectImg from "./assets/imgs/car-project.png";
import filmsProjectImg from "./assets/imgs/films-project.png";
import gitHubProjectImg from "./assets/imgs/githuAPI-project.png";
import "./Styles/Animations/Animations.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [modalDetails, setModalDetails] = useState({
    img: {},
    technologies: [""],
    colorTechnologies: [""],
    text: "",
    repository: "",
    site: "",
  });

  const handleModalProject = (event) => {
    const id = event.getAttribute("id");

    console.log(id);

    if (id === "todo-project") {
      setModalDetails((prev) => ({
        ...prev,
        img: { todoProjectImg },
        technologies: ["JavaScript"],
        colorTechnologies: ["rgb(239 216 29)"],
        text: "Projeto feito com HTML, CSS e JS puro utilizando o local storage para salvar os lembretes no navegador",
        repository: "https://github.com/erik-sig/ToDo-List",
        site: "https://to-do-list-bice-eight.vercel.app",
      }));
    }

    if (id === "car-project") {
      setModalDetails((prev) => ({
        ...prev,
        img: { carProjectImg },
        technologies: ["JavaScript"],
        colorTechnologies: ["rgb(239 216 29)"],
        text: "Projeto com HTML, CSS e JS puro",
        repository: "https://github.com/erik-sig/Projetos-HTML-CSS",
        site: "https://projetos-html-5646770uz-erik-sig.vercel.app",
      }));
    }

    if (id === "films-project") {
      setModalDetails((prev) => ({
        ...prev,
        img: { filmsProjectImg },
        technologies: ["JavaScript"],
        colorTechnologies: ["rgb(239 216 29)"],
        text: "Projeto feito com JavaScript usando OMDB API para fazer requests de filmes que o usuário buscar. Como funciona como uma lista de filmes, local storage também foi usado",
        repository: "https://github.com/erik-sig/Site-filmes",
        site: "https://site-filmes-luwp27y0e-erik-sig.vercel.app",
      }));
    }

    if (id === "github-project") {
      setModalDetails((prev) => ({
        ...prev,
        img: { gitHubProjectImg },
        technologies: ["React"],
        colorTechnologies: ["rgb(102 219 251)"],
        text: "Projeto feito com React usando AXIOS para fazer requests da API do GitHub",
        repository: "https://github.com/erik-sig/GitHubAPI",
        site: "https://git-hub-api-gamma.vercel.app",
      }));
    }

    setIsClicked(true);
  };

  return (
    <>
      {isClicked === true ? (
        <ModalProject
          modalDetails={modalDetails}
          setIsClicked={setIsClicked}
        ></ModalProject>
      ) : (
        ""
      )}
      <Asides></Asides>
      <Navbar></Navbar>
      <main>
        <Header></Header>
        <PingPong></PingPong>
        <About></About>
        <Projects
          handleModalProject={handleModalProject}
          setIsClicked={setIsClicked}
        ></Projects>
      </main>
    </>
  );
}

export default App;
