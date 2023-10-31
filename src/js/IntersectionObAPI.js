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

export default IntersectionObserver;
