import $ from "jquery";
import "/public/js/swiper";
import "/public/js/loader";
import "/public/js/modal";
import "/public/js/serviceload";
import "/public/js/gsapmain";

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

// document.querySelectorAll(".counter-container").forEach((value) => {
//   counterUp(value.querySelector("h1"), {
//     duration: 1000,
//     delay: 16,
//   });
// });

stickyNavbar();
navSlider();

{
  /* <section class="container-fluid nav-outer main-navbar">
        <section class="container nav-inner">
          <section class="row nav-row">
            <ul
              class="col-5 col-md-3 col-lg-2 col-xl-2 nav-logo d-flex align-items-center"
            >
              <li>
                <img src="/public/images/logo.png" alt="" />
              </li>
            </ul>
            <ul class="col-lg-8 col-xl-6 nav-menus" data-mobnav="deactive">
              <li class="nav-menu-item"><a href="#">home</a></li>
              <li class="nav-menu-item dropdown-center">
                <a
                  class="dropdown-toggle boot-dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                  >about us
                </a>

                <ul id="dropdown1" class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Agri</a></li>
                  <li><a class="dropdown-item" href="#">Energy</a></li>
                  <li><a class="dropdown-item" href="#">Infra</a></li>
                  <li><a class="dropdown-item" href="#">Pharma</a></li>
                  <li><a class="dropdown-item" href="#">Supermarkets</a></li>
                  <li><a class="dropdown-item" href="#">Logistics</a></li>
                </ul>
              </li>
              <li class="nav-menu-item">
                <a class=" " href="#">Sustainability </a>
              </li>
              <li class="nav-menu-item"><a href="#">news</a></li>
              <li class="nav-menu-item"><a href="#">contact us</a></li>
              <li class="nav-menu-item"><a href="#">subscribe</a></li>
              <li class="nav-menu-item"><a href="#">social</a></li>
            </ul>
            <section class="col-md-2 col-xl-4 nav-button">
              <button class="default-button">Request a quote</button>
            </section>

            <section class="col-2 col-xl-4 nav-hamburger">
              <i class="fa-solid ham fa-bars"></i>
            </section>
          </section>
        </section>
      </section> */
}
