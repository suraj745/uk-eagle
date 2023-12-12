import { select } from "./selector";
import { loadSwiperSlide } from "/public/js/customfunction";

const businessCardData = [
  {
    img: "/images/business/Agriculture.jpg",
    head: "Agriculture",
    subhead: "Growing a Brighter Future for Agriculture",
    para: "At UK Eagle, we understand the challenges faced by modern-day agriculture. Therefore are dedicated to providing our farmers with comprehensive solutions that empower them to provide us with the best produce.Our agricultural offerings from Silos to Cold Milk Rushing units to refining units are designed to elevate both productivity and sustainability. We also offer a range of products like premium seeds, and high-quality edible oils.",
  },
  {
    img: "/images/business/Energy.jpg",
    head: "Energy",
    subhead: "Energy Solutions like no other",
    para: "Our diversified range of products in the energy sector is what sets us apart. We have developed processes that ensure the products we offer are customer-specific for different types of markets and the needs of the customer. We offer a variety of products from Petroleum and lubricants to a range of renewable resources too.",
  },
  {
    img: "/images/business/Infrastructure.jpg",
    head: "Infrastructure",
    subhead: "transforming lives for a stronger tomorrow",
    para: "UK Eagle believes in building a very strong future, we are passionate about building infrastructures that connect communities and their hearts. From highways and tunnels to roads and bridges, we build everything; UK Eagle is always looking ahead, paving the way to build a reliable tomorrow.",
  },
  {
    img: "/images/business/Pharmacy.jpg",
    head: "Pharmaceutical",
    subhead: "Healthier you for a healthier world",
    para: "UK Eagle is one of the most reliable brands of Pharma products, we are dedicated to building a healthier future and making life-changing products that blend into the lives of people. With the ever-changing and unexpected world that we live in, UK Eagle is thriving to become the most reliable brand for all types of Pharma Products. We do not aim to just make medicines but to conquer the roots of diseases, provide optimum solutions, and make this world sustainable and a healthier one.",
  },
  {
    img: "/images/business/Supermarket.jpg",
    head: "Supermarkets",
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, ut amet magnam modi, incidunt quaerat accusantium iusto tenetur voluptatum tempore at quasi temporibus neque expedita distinctio blanditiis cumque inventore nesciunt unde aspernatur. Quos est blanditiis necessitatibus repellat pariatur, consequatur nobis esse, corrupti architecto commodi, placeat corporis similique fugiat itaque adipisci.",
  },
  {
    img: "/images/business/Logistics.jpg",
    head: "Logistics",
    subhead: "Bridging businesses worldwide",
    para: "UK Eagle is one of the most reliable brands of Pharma products, we are dedicated to building a healthier future and making life-changing products that blend into the lives of people. With the ever-changing and unexpected world that we live in, UK Eagle is thriving to become the most reliable brand for all types of Pharma Products. We do not aim to just make medicines but to conquer the roots of diseases, provide optimum solutions, and make this world sustainable and a healthier one.",
  },
];

function comp(...args) {
  const { head2, para2 } = args[0];
  const { img } = args[0].value;
  return `
    <div class="swiper-slide d-flex justify-content-center">
    <div  class="card home-card text-center">
      <img
        id="home-card-top"
        src="${img}"
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
