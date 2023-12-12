import { select } from "./selector";
import { loadSwiperSlide } from "./customfunction";
const serviceCard = [
  {
    img: "https://www.promap.co.uk/wp-content/uploads/2019/10/2B-Social-Infrastructure-PM-WEB.jpg",
    head: "Social Infrastructure",
    para: "We are committed towards building places that resonate with lives. Be it any form of construction, we aim to build them with equal efforts and compassion. We build spaces that promote growth and enhance the experience of people.",
  },
  {
    img: "https://wc.wallpaperuse.com/wallp/19-191438_s.jpg",
    head: "Transport related services",
    para: "We pave paths to your destinations. With our exceptionally expanded network we make sure all your transport related solutions are provided to you with complete efficiency.",
  },
  {
    img: "https://i.ytimg.com/vi/JOCry6Wbd_Y/maxresdefault.jpg",
    head: "HAMBOT",
    para: "UKEagle being the pioneers in HAM and BOT services provide conceptual design that pathways that will flip the industry of Infrastructure. We are built different.",
  },
  {
    img: "https://primefuels.com/wp-content/uploads/2019/08/Infrastructure_BannerFeature.jpg",
    head: "Highways and Metro Projects",
    para: "We are committed towards ensuring in building the esteemed projects with complete pride and dedication. Our expertise lies in these projects where we focus on building safe, secure and technologically established systems.",
  },
];

// function comp(...args) {
//   const { head2, para2 } = args[0];
//   const { img } = args[0].value;

//   return `
//   <div class="swiper-slide">
//   <div  class="card home-card">
//     <img
//       id="home-card-top"
//       src="${img}"
//       class="card-img-top"
//       alt="..."
//     />
//     <div class="card-body">
//       <h5 class="main-heading fs-2 card-heading">${head2}</h5>
//       <p class="card-text fs-4">
//         ${para2}....
//       </p>
//       <a href="#" class="btn default-button">
//         Learn More
//       </a>
//     </div>
//   </div>
// </div>`;
// }

// loadSwiperSlide(serviceCard, select(".service-swiper-wrapper"), comp);

function serviceLoad() {
  const tabContainer = document.querySelector(".infra-tab");

  tabContainer.innerHTML = serviceCard
    .map((value, index) => {
      return ` <li class="nav-item" role="presentation">
    <button
      class="nav-link w-100 infra-navb ${index == 0 && "active"}"
      id="pills-${value.head.split(" ")[0]}-tab"
      data-bs-toggle="pill"
      data-bs-target="#pills-${value.head.split(" ")[0]}"
      type="button"
      role="tab"
      aria-controls="pills-${value.head.split(" ")[0]}"
      aria-selected="${index == 0 ? "true" : "false"}"
    >
     ${value.head}
    </button>
  </li>`;
    })
    .join("");
}

function loadInfraContent(container) {
  const infraContent = document.querySelector(".infra-content");

  infraContent.innerHTML = serviceCard
    .map((value, index) => {
      return `<div class="tab-content" id="pills-tabContent">
    <div
      class="tab-pane fade  ${index == 0 && "show active"}"
      id="pills-${value.head.split(" ")[0]}"
      role="tabpanel"
      aria-labelledby="pills-${value.head.split(" ")[0]}-tab"
      tabindex="0"
    >
      <section class="container-fluid about-outer padding-bt-130">
        <section class="container about-innner mt-5">
          <section
            class="row about-row align-items-center justify-content-between flex-column flex-lg-row gap-5 gap-lg-0"
          >
            <section class="col col-lg-6 about-left">
              <img
                class="responsive-img infra-nav-tab-img"
                src="${value.img}"
                alt=""
              />
            </section>
            <ul
              class="about-right content-gap col col-lg-6 get-margin"
            >
              <li>
                <h2 class="main-heading d-flex align-items-center">
                 ${value.head}
                </h2>
              </li>
              <li>
                <p>
                ${value.para}
                </p>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </div>
    </div>`;
    })
    .join("");
}
serviceLoad();
loadInfraContent();
