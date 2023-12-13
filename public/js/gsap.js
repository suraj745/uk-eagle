import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { select } from "./selector";

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

function pinScroll(trigger, pin) {
  ScrollTrigger.create({
    trigger,
    start: "top 30%",
    end: "bottom 50%+=100px",
    pin,
  });
}

mm.add("(min-width:992px)", () => {
  pinScroll(select(".section-3-outer"), select(".section-3-left"));
});
