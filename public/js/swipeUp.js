import { select } from "./selector";
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(callback, options);

const targetElement = document.querySelector(".scroll-observer");

observer.observe(targetElement);

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      select(".scroll-up").style.display = "none";
    } else {
      select(".scroll-up").style.display = "flex";
    }
  });
}
