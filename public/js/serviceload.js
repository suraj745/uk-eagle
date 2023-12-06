const serviceCard = [
  {
    img: "/images/image/services/1.jpg",
    head: "Social Infrastructure",
    para: "UK Eagle specializes in developing social infrastructure projects to enhance the quality of life for communities. From state-of-the-art healthcare facilities to educational institutions, we create spaces that foster growth, well-being, and connectivity.",
  },
  {
    img: "/images/image/services/2.jpg",
    head: "Transport",
    para: "We pave the way for efficient and sustainable transportation solutions. Whether it's road networks, bridges, or intelligent transport systems, UK Eagle is dedicated to enhancing connectivity and mobility for people and goods.",
  },
  {
    img: "/images/image/services/3.jpg",
    head: " HAM/BOT (Hybrid Annuity Model/Build-Operate-Transfer",
    para: "UK Eagle pioneered the Hybrid Annuity Model (HAM) and Build-Operate-Transfer (BOT) projects. We offer comprehensive solutions, from conceptualization to execution and operation, ensuring long-term viability and success.",
  },
  {
    img: "/images/image/services/4.jpg",
    head: "Water",
    para: "Water is a precious resource, and UK Eagle manages it. Our water infrastructure projects focus on ensuring access, conservation, and sustainable use, contributing to environmental stewardship and community well-being.",
  },
  {
    img: "/images/image/services/5.jpg",
    head: "Highways",
    para: "Building the arteries that connect cities and regions, UK Eagle is synonymous with high-quality highway construction. Our expertise is creating safe, efficient, and technologically advanced road networks that drive economic growth and connectivity.",
  },
  {
    img: "/images/image/services/6.jpg",
    head: "Metro",
    para: " Embracing urbanization, UK Eagle is a crucial player in the development of metro systems. We design, build, and operate metro projects that redefine urban mobility, reducing congestion and providing fast, reliable transportation options for growing cities.",
  },
];

// document.querySelector(
//   ".service-tail"
// ).innerHTML = ``;

function loadSwiperSlide(data, component) {
  console.log(component);
  component.innerHTML = data
    .map((value, index) => {
      let head2;
      let para2;

      if (value.head.length >= 22) {
        head2 = value.head.slice(0, 22);
      } else {
        head2 = value.head;
      }

      if (value.para.length >= 120) {
        para2 = value.para.slice(0, 120);
      } else {
        para2 = value.para;
      }

      return `
      <div class="swiper-slide">
        <div id="home-card" class="card">
          <img
            id="home-card-top"
            src="${value.img}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="main-heading fs-2 card-heading">${head2}</h5>
            <p class="card-text fs-4">
              ${para2}....
            </p>
            <a href="#" class="btn default-button">
              Learn More
            </a>
          </div>
        </div>
      </div>`;
    })
    .join("");
}

loadSwiperSlide(serviceCard, document.querySelector(".service-swiper-wrapper"));
