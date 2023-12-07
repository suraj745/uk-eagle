import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// // scrollTriger.matchMedia({
// //   "(min-width: 1200px)": ,
// // });

gsap.registerPlugin(ScrollTrigger);

function pinScroll() {
  ScrollTrigger.create({
    trigger: ".section-3-outer",
    start: "top top",
    end: "bottom bottom",
    pin: ".section-3-left",
    markers: true,
  });
}
pinScroll();
