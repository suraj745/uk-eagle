import { select } from "./selector";

const businessAccordionData = [
  {
    head: "Silos",
    para: " UK Eagle's silos are a testament to innovation in agricultural storage. These precision-engineered structures ensure optimal grain storage, preserve quality, and safeguard the harvest for sustained prosperity.",
  },
  {
    head: "Refining",
    para: "UK Eagle's refining units are at the forefront of processing seeds into premium edible oils. Our state-of-the-art facilities guarantee the purity and quality of each oil variant, including cocoa, coffee, soybean, sunflower, and other edible oils.",
  },
  {
    head: "Seeds",
    para: " UK Eagle provides diverse, high-quality seeds to empower farmers to grow healthy and robust crops. Our seeds are carefully selected and tested to ensure optimal yield and resilience in various agricultural conditions",
  },
  {
    head: "Edible Oils",
    para: " Explore a world of culinary excellence with UK Eagle's premium edible oils. From the rich and nuanced flavors of cocoa and coffee oils to the heart-healthy choices of soybean and sunflower oils, our range caters to diverse tastes and nutritional needs.",
  },
];

function loadAccordion(container, item) {
  document.querySelector(".business-accordion").innerHTML = item
    .map((value, index) => {
      return ` <div class="accordion-item business-items">
    <h2 class="accordion-header" id="heading${index}">
      <section
        class="accordion-button collapsed accordion-heading"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse${index}"
        aria-expanded="${index === 0 ? "true" : "false"}"
        aria-controls="collapse${index}"
      >
      ${value.head}
      </section>
    </h2>
    <div
      id="collapse${index}"
      class="accordion-collapse collapse ${index === 0 ? "show" : ""}"
      aria-labelledby="heading${index}"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        ${value.para}
      </div>
    </div>
    </div>`;
    })
    .join("");
}

loadAccordion(select(".business-accordion"), businessAccordionData);
