import { select } from "./selector";

function swipeUp() {
  window.addEventListener("scroll", () => {
    if (window.scrollY <= 300) {
      select(".scroll-up").style.display = "none";
    } else {
      select(".scroll-up").style.display = "flex";
    }
  });
}

swipeUp();
