import { select } from "./selector";

export function navSlider() {
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

export function stickyNavbar() {
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
