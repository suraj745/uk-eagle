console.log(window.location.hash);

import Lenis from "@studio-freight/lenis";

const lenis = new Lenis(".about-page");

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

console.log(document.querySelector(".about-dropdown .dropdown-item"));
