import $ from "jquery";
import "/public/js/screenload";
import "/public/js/swiper";
import "/public/js/pageLoader";
import "/public/js/modal";
import "/public/js/swipeUp";
import "/public/js/serviceload";
import "/public/js/businessload";
import "/public/js/gsap";
import { select } from "./public/js/selector";

function navSlider() {
  const navMenus = document.querySelector(".nav-menus");
  const hamburger = document.querySelector(".ham");

  hamburger.addEventListener("click", (e) => {
    if (navMenus.getAttribute("data-mobnav") == "active") {
      navMenus.setAttribute("data-mobnav", "deactive");
      hamburger.classList.remove("fa-xmark");
    } else {
      navMenus.setAttribute("data-mobnav", "active");
      hamburger.classList.add("fa-xmark");
    }
  });
}

function stickyNavbar() {
  window.addEventListener("scroll", function () {
    var scrollPos = window.scrollY;
    let navbar_select = document.querySelector(".main-navbar");
    // Print the scroll position to the console
    if (scrollPos > 100) {
      navbar_select.classList.add("sticky_navbar");
    } else {
      navbar_select.classList.remove("sticky_navbar");
    }
  });
}

stickyNavbar();
navSlider();
