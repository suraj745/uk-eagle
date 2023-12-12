import { select } from "./selector";
import "./navFunction";
import { stickyNavbar, navSlider } from "./navFunction";
select(
  "nav"
).innerHTML = `<section class="container-fluid nav-outer main-navbar">
  <section class="container nav-inner">
    <section class="row nav-row justify-content-between">
      <ul
        class="col-5 col-md-3 col-lg-2 col-xl-2 nav-logo d-flex align-items-center"
      >
        <li>
       <a href="/">   <img src="/images/logo.png" alt="" /></a>
        </li>
      </ul>
      <ul class="col-lg-6 col-xl-4 nav-menus" data-mobnav="deactive">
        <li class="nav-menu-item"><a href="/">home</a></li>
        <li class="nav-menu-item dropdown-center">
          <a
            class="dropdown-toggle boot-dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
            >our businesses
          </a>
  
          <ul id="dropdown1" class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Agriculture</a></li>
            <li><a class="dropdown-item" href="#">Energy</a></li>
            <li><a class="dropdown-item" href="#">Infrastructure</a></li>
            <li><a class="dropdown-item" href="#">Pharmaceutical</a></li>
            <li><a class="dropdown-item" href="#">Supermarkets</a></li>
            <li><a class="dropdown-item" href="#">Logistics</a></li>
          </ul>
        </li>
        <li class="nav-menu-item"><a href="/pages/contact-us.html">contact us</a></li>
        <li class="nav-menu-item"><a href="/pages/about-us.html">about us</a></li>
      </ul>
  
      <section class="col-2 col-xl-4 nav-hamburger">
        <i class="fa-solid ham fa-bars"></i>
      </section>
    </section>
  </section>
  </section>`;

select(
  "footer"
).innerHTML = `<section class="container-fluid padding-tp-130 footer-outer">
  <section class="container footer-inner">
    <section class="row footer-row">
        <ul class="footer-list">
          <li>
            <p class="fw-bold text-white">Quick Contact</p>
          </li>
          <li>
            <p class="text-white-50">
              If you have any questions or need help, feel free to contact
              with our team.
            </p>
          </li>
  
          <li>
            <a
              class="text-decoration-none phone-number text-white-50"
              href="tel:91 2738484838"
              ><span></span>+91 27384 84838</a
            >
          </li>
  
          <li>
            <p class="text-white-50">
              2307 Beverley Rd Brooklyn, New York 11226 United States.
            </p>
          </li>
        </ul>
  
     
          <ul class="footer-list2">
            <li><p>Company</p></li>
            <li><a href="#">Our Businesses</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
          </ul>

          <ul class="footer-list2">
            <li><p>Our Businesses</p></li>
            <li><a href="#">Agriculture</a></li>
            <li><a href="#">Energy </a></li>
            <li><a href="#"> Infrastructure</a></li>
            <li><a href="#"> Pharmaceutical</a></li>
            <li><a href="#"> Supermarkets</a></li>
            <li><a href="#"> Logistics</a></li>
          </ul>
  
          
  
          <ul class="footer-social-link">
            <li><p>Social Links</p></li>
            <li class="social-icons">
              <a href="#"><ion-icon class='text-white' name="logo-linkedin"></ion-icon></a>
  
  
              <a href="#">
                <ion-icon class='text-white' name="logo-twitter"></ion-icon>
              </a>

              
              <a href="#">
                <ion-icon class='text-white' name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
      </section>
   
  
    <section class="row py-5">
      <p class="text-white text-center py-5">
        2022 © All Rights Reserved By UK EAGLE
      </p>
    </section>
  </section>
  </section>`;

stickyNavbar();
navSlider();
