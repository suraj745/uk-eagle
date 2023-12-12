import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({ lerp: 0.1 });

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelector(".scroll-up").addEventListener("click", (e) => {
  lenis.scrollTo(document.querySelector(".hero-scroll"));
});
