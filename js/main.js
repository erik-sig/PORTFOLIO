const observer = new IntersectionObserver(
  (elements) => {
    console.log(elements);

    Array.from(elements).forEach((element) => {
      if (element.intersectionRatio >= 0.3) {
        element.target.classList.remove("hide");
        element.target.classList.add("blink-animation");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

Array.from(document.querySelectorAll(".container")).forEach((element) => {
  observer.observe(element);
});

const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  const body = document.querySelector("body");
  const items = document.querySelector(".items");

  if (body.style.overflowY == "hidden") body.style.overflowY = "auto";
  else body.style.overflowY = "hidden";

  items.classList.toggle("menu-activate");
  menu.classList.toggle("menu-press");
});

const projects = document.querySelectorAll(".projects");
const modalContainer = document.querySelector(".modal-container");
const modalBtns = document.querySelectorAll(".modal-btn");

modalContainer.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

projectsArray = ["todo-project", "car-project", "films-project"];

projects.forEach((project) => {
  project.addEventListener("click", (e) => {
    let choiceProject;
    projectsArray.forEach((project) => {
      if (e.target.id == project) choiceProject = e.target.id;
    });
    modalContainer.style.display = "flex";
    modalBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        choice = e.target;
        if (choiceProject == "todo-project")
          if (choice.textContent == "Repositório")
            choice.setAttribute(
              "href",
              "https://github.com/erik-sig/ToDo-List"
            );
          else
            choice.setAttribute(
              "href",
              "https://to-do-list-bice-eight.vercel.app"
            );
        if (choiceProject == "car-project")
          if (choice.textContent == "Repositório")
            choice.setAttribute(
              "href",
              "https://github.com/erik-sig/Projetos-HTML-CSS"
            );
          else
            choice.setAttribute(
              "href",
              "https://projetos-html-5646770uz-erik-sig.vercel.app"
            );
        if (choiceProject == "films-project")
          if (choice.textContent == "Repositório")
            choice.setAttribute(
              "href",
              "https://github.com/erik-sig/Site-filmes"
            );
          else
            choice.setAttribute(
              "href",
              "https://site-filmes-luwp27y0e-erik-sig.vercel.app"
            );
      });
    });
  });
});
