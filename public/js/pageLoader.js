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
       <a  href="/">   <img data-aos='fade-right' data-aos-duration='1000' src="/images/logo.png" alt="" /></a>
        </li>
      </ul>
      <ul class="col-lg-6 col-xl-5  nav-menus" data-mobnav="deactive">
        <li data-aos="fade-down" data-aos-duration='1000' data-aos-delay='200' class="nav-menu-item"><a href="/">home</a></li>
        <li data-aos="fade-down" data-aos-duration='1000' data-aos-delay='400' class="nav-menu-item dropdown-center">
          <a
            class="dropdown-toggle boot-dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            href="#"
            >our businesses
          </a>
  
          <ul id="dropdown1" class="dropdown-menu">
            <li><a  class="dropdown-item" href="/pages/our-businesses/agriculture.html">Agriculture</a></li>
            <li><a  class="dropdown-item" href="/pages/our-businesses/energy.html">Energy</a></li>
            <li><a  class="dropdown-item" href="/pages/our-businesses/infrastructure.html">Infrastructure</a></li>
            <li><a  class="dropdown-item" href="/pages/our-businesses/pharmaceutical.html">Pharmaceutical</a></li>
            <li><a  class="dropdown-item" href="/pages/our-businesses/supermarkets.html">Supermarkets</a></li>
            <li><a  class="dropdown-item" href="/pages/our-businesses/logistics.html">Logistics</a></li>
          </ul>
        </li>
        <li data-aos="fade-down" data-aos-duration='1000' data-aos-duration='1000' data-aos-delay='600'  class="nav-menu-item"><a href="/pages/contact-us.html">contact us</a></li>
        <li data-aos="fade-down" data-aos-duration='1000' data-aos-duration='1000' data-aos-delay='800' class="nav-menu-item"><a href="/pages/about-us.html">about us</a></li>
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
            <a class="text-white-50" href="mailto:sales@ukeagle.ae">
            sales@ukeagle.ae
            </a>
          </li>
  
          <li>
            <a
              class="text-decoration-none phone-number text-white-50"
              href="tel:+971 52 835 3817"
              ><span></span>+971 52 835 3817</a
            >
          </li>
  
          <li>
            <p class="text-white-50">
            Post Box No 112356 Dubai UAE</p>
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
            <li><a href="/pages/our-businesses/agriculture.html">Agriculture</a></li>
            <li><a href="/pages/our-businesses/energy.html">Energy </a></li>
            <li><a href="/pages/our-businesses/infrastructure.html"> Infrastructure</a></li>
            <li><a href="/pages/our-businesses/pharmaceutical.html"> Pharmaceutical</a></li>
            <li><a href="/pages/our-businesses/supermarkets.html"> Supermarkets</a></li>
            <li><a href="/pages/our-businesses/logistics.html"> Logistics</a></li>
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
