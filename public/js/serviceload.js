const serviceCard = [
  {
    img: "https://www.promap.co.uk/wp-content/uploads/2019/10/2B-Social-Infrastructure-PM-WEB.jpg",
    head: "Social Infrastructure",
    para: "UK Eagle specializes in developing social infrastructure projects to enhance the quality of life for communities. From state-of-the-art healthcare facilities to educational institutions, we create spaces that foster growth, well-being, and connectivity.",
  },
  {
    img: "https://wc.wallpaperuse.com/wallp/19-191438_s.jpg",
    head: "Transport",
    para: "We pave the way for efficient and sustainable transportation solutions. Whether it's road networks, bridges, or intelligent transport systems, UK Eagle is dedicated to enhancing connectivity and mobility for people and goods.",
  },
  {
    img: "https://i.ytimg.com/vi/JOCry6Wbd_Y/maxresdefault.jpg",
    head: " HAM/BOT (Hybrid Annuity Model/Build-Operate-Transfer",
    para: "UK Eagle pioneered the Hybrid Annuity Model (HAM) and Build-Operate-Transfer (BOT) projects. We offer comprehensive solutions, from conceptualization to execution and operation, ensuring long-term viability and success.",
  },
  {
    img: "https://th.bing.com/th/id/OIP.w2MMSJbcXiB_6quC8p1axwHaDK?rs=1&pid=ImgDetMain",
    head: "Water",
    para: "Water is a precious resource, and UK Eagle manages it. Our water infrastructure projects focus on ensuring access, conservation, and sustainable use, contributing to environmental stewardship and community well-being.",
  },
  {
    img: "https://primefuels.com/wp-content/uploads/2019/08/Infrastructure_BannerFeature.jpg",
    head: "Highways",
    para: "Building the arteries that connect cities and regions, UK Eagle is synonymous with high-quality highway construction. Our expertise is creating safe, efficient, and technologically advanced road networks that drive economic growth and connectivity.",
  },
  {
    img: "https://th.bing.com/th/id/OIP._y6y47kj1bQJlwuQDf9uBwHaEq?rs=1&pid=ImgDetMain",
    head: "Metro",
    para: " Embracing urbanization, UK Eagle is a crucial player in the development of metro systems. We design, build, and operate metro projects that redefine urban mobility, reducing congestion and providing fast, reliable transportation options for growing cities.",
  },
];

function loadSwiperSlide(data, component) {
  component.innerHTML = data
    .map((value, index) => {
      let head2;
      let para2;

      if (value.head.length >= 22) {
        head2 = value.head.slice(0, 22);
      } else {
        head2 = value.head;
      }

      if (value.para.length >= 100) {
        para2 = value.para.slice(0, 100);
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
