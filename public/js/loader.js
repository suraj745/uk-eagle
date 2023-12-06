document.querySelector(
  "nav"
).innerHTML = ` <section class="container-fluid nav-outer main-navbar">
  <section class="container nav-inner">
    <section class="row nav-row">
      <ul
        class="col-5 col-md-3 col-lg-2 col-xl-2 nav-logo d-flex align-items-center"
      >
        <li>
          <img src="/images/logo.png" alt="" />
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
  
      <section class="col-2 col-xl-4 nav-hamburger">
        <i class="fa-solid ham fa-bars"></i>
      </section>
    </section>
  </section>
  </section>`;

document.querySelector(
  "footer"
).innerHTML = `<section class="container-fluid padding-tp-130 footer-outer">
  <section class="container footer-inner">
    <section class="row footer-row">
      <section class="col footer-col">
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
  
        <section class="footer-lists">
          <ul class="footer-list2">
            <li><p>Company</p></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Leadership Team </a></li>
            <li><a href="#"> News & Media</a></li>
            <li><a href="#"> Case Studies</a></li>
            <li><a href="#"> Our Projects </a></li>
            <li><a href="#"> Contacts</a></li>
          </ul>
  
          <ul class="footer-list2">
            <li><p>Services</p></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Leadership Team </a></li>
            <li><a href="#"> News & Media</a></li>
            <li><a href="#"> Case Studies</a></li>
            <li><a href="#"> Our Projects </a></li>
            <li><a href="#"> Contacts</a></li>
          </ul>
          <ul class="footer-list2">
            <li><p>Support</p></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Leadership Team </a></li>
            <li><a href="#"> News & Media</a></li>
            <li><a href="#"> Case Studies</a></li>
            <li><a href="#"> Our Projects </a></li>
            <li><a href="#"> Contacts</a></li>
          </ul>
  
          <ul class="footer-social-link">
            <li><p>Social Links</p></li>
            <li class="social-icons">
              <a href="#"><ion-icon name="logo-instagram"></ion-icon> </a>
  
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
  
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </section>
  
    <section class="row py-5">
      <p class="text-white text-center py-5">
        © 2022 Solatec, All Rights Reserved UK EAGLE
      </p>
    </section>
  </section>
  </section>`;
