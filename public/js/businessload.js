import { select } from "./selector";
import { loadSwiperSlide } from "./serviceload";

const businessCardData = [
  {
    img: "/images/business/Agriculture.jpg",
    head: "Agriculture",
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, ut amet magnam modi, incidunt quaerat accusantium iusto tenetur voluptatum tempore at quasi temporibus neque expedita distinctio blanditiis cumque inventore nesciunt unde aspernatur. Quos est blanditiis necessitatibus repellat pariatur, consequatur nobis esse, corrupti architecto commodi, placeat corporis similique fugiat itaque adipisci.",
  },
  {
    img: "/images/business/Energy.jpg",
    head: "Energy",
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, ut amet magnam modi, incidunt quaerat accusantium iusto tenetur voluptatum tempore at quasi temporibus neque expedita distinctio blanditiis cumque inventore nesciunt unde aspernatur. Quos est blanditiis necessitatibus repellat pariatur, consequatur nobis esse, corrupti architecto commodi, placeat corporis similique fugiat itaque adipisci.",
  },
  {
    img: "/images/business/Infrastructure.jpg",
    head: "Infrastructure",
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, ut amet magnam modi, incidunt quaerat accusantium iusto tenetur voluptatum tempore at quasi temporibus neque expedita distinctio blanditiis cumque inventore nesciunt unde aspernatur. Quos est blanditiis necessitatibus repellat pariatur, consequatur nobis esse, corrupti architecto commodi, placeat corporis similique fugiat itaque adipisci.",
  },
  {
    img: "/images/business/Pharmacy.jpg",
    head: "Pharmaceutical",
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, ut amet magnam modi, incidunt quaerat accusantium iusto tenetur voluptatum tempore at quasi temporibus neque expedita distinctio blanditiis cumque inventore nesciunt unde aspernatur. Quos est blanditiis necessitatibus repellat pariatur, consequatur nobis esse, corrupti architecto commodi, placeat corporis similique fugiat itaque adipisci.",
  },
  {
    img: "/images/business/Supermarket.jpg",
    head: "Supermarkets",
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, ut amet magnam modi, incidunt quaerat accusantium iusto tenetur voluptatum tempore at quasi temporibus neque expedita distinctio blanditiis cumque inventore nesciunt unde aspernatur. Quos est blanditiis necessitatibus repellat pariatur, consequatur nobis esse, corrupti architecto commodi, placeat corporis similique fugiat itaque adipisci.",
  },
  {
    img: "/images/business/Logistics.jpg",
    head: "Logistics",
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, ut amet magnam modi, incidunt quaerat accusantium iusto tenetur voluptatum tempore at quasi temporibus neque expedita distinctio blanditiis cumque inventore nesciunt unde aspernatur. Quos est blanditiis necessitatibus repellat pariatur, consequatur nobis esse, corrupti architecto commodi, placeat corporis similique fugiat itaque adipisci.",
  },
];

function comp(value, head2, para2) {
  return `
    <div class="swiper-slide d-flex justify-content-center">
    <div  class="card home-card text-center">
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
}

loadSwiperSlide(businessCardData, select(".business-swiper-wrapper"), comp);
