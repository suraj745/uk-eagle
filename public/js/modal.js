const cardData = [
  {
    icon: "/images/chooseus/UK Eagle_ Icon_ Excellence.png",
    head: "Excellence",
    para: " Excellence isn't just a goal at UK Eagle; it's embedded in our DNA, a philosophy reflected in our logo. We pursue excellence in every facet of our operations, from innovation to quality assurance, sustainability, and our global presence. By choosing UK Eagle, you align with an organization where excellence is not merely a standard but a driving force, ensuring that every interaction, every solution, and every partnership exceeds expectations. Join us on a journey where excellence is not just a commitment but a way of life.",
  },
  {
    icon: "/images/chooseus/UK Eagle_ Icon_ Innovation.png",
    head: "Innovation",
    para: "UK Eagle stands as a beacon of innovation in every sector it operates. Our relentless commitment to staying ahead of the curve drives us to invest heavily in research and development. By choosing UK Eagle, you align yourself with a dynamic organization that consistently introduces cutting-edge solutions, ensuring you benefit from the latest advancements in technology and practices.",
  },
  {
    icon: "/images/chooseus/UK Eagle_ Icon_ QualityAssurance.png",
    head: "Quality Assurance",
    para: "Quality is the cornerstone of every UK Eagle product and service. Rigorous quality control measures are embedded in our processes to guarantee that each offering meets and exceeds industry standards. When you choose UK Eagle, you choose reliability and performance, ensuring that your operations run smoothly and efficiently.",
  },
  {
    icon: "/images/chooseus/UK Eagle_ Icon_ Sustainibility.png",
    head: "Sustainability",
    para: "UK Eagle is dedicated to environmental responsibility and sustainability. We understand the importance of minimizing our ecological footprint and promoting eco-friendly practices. By choosing UK Eagle, you contribute to a greener future, aligning your values with an organization committed to sustainable business practices across agriculture, energy, and infrastructure.",
  },
  {
    icon: "/images/chooseus/UK Eagle_ Icon_ GlobalPresence.png",
    head: "Global Presence",
    para: " With a robust global presence, UK Eagle brings its expertise to diverse markets worldwide. Our extensive network allows us to understand and adapt to different regions' unique challenges and opportunities. By choosing UK Eagle, you gain a partner with a global perspective and a local touch, ensuring tailored solutions that suit your specific needs",
  },
  {
    icon: "/images/chooseus/UK Eagle_ Icon_ CustomerCentricApproach.png",
    head: "Customer-Centric Approach",
    para: "At the core of UK Eagle's philosophy is a commitment to our customers. We prioritize a customer-centric approach, aiming to meet and exceed your expectations. Your satisfaction is our priority, and we work diligently to build long-term partnerships. When you choose UK Eagle, you choose a collaborative and responsive partner dedicated to your success.",
  },
];

const chooseUs = document.querySelector(".section-3-right");

chooseUs.innerHTML = cardData
  .map((value) => {
    let para2;
    if (value.para.length > 150) {
      para2 = value.para.slice(0, 150);
    }
    return `<ul
      class="section-3-card flex-column d-flex justify-content-around align-items-between"
      >
      <li class='modal-image'><img src="${value.icon}" alt="${value.icon
      .split("/")
      .at(-1)}"/></li>
      <li><h2 class='section-3-card-head'>${value.head}</h2></li>
      <li><p class="font-sm text-secondary">${para2} ....</p></li>
      <li class="d-none full-content">
        <p>${value.para}</p>
      </li>
      <li><a>Read More</a></li>
    </ul>`;
  })
  .join("");

function cardClickModal() {
  document.querySelectorAll(".section-3-card").forEach((value) => {
    value.addEventListener("click", () => {
      const modal = document.querySelector(".main-modal-outer");

      console.log("modal-loaded", modal);
      modal.innerHTML = `<section class="main-modal-inner d-flex justify-content-center align-items-center">
           <section
             class="main-modal-row p-5 justify-content-center align-items-center"
           >
             <section class="text-end p-3">
             <ion-icon class="modal-toggle font-xl text-white" name="close-circle-outline"></ion-icon>
             </section>
             <ul class="main-modal-content">
               <li>
               <img class="modal-loaded-img" src="${
                 value.querySelector(".modal-image > img").src
               }">
               </li>
               <li>
               <h1 class='fw-bold'>${
                 value.querySelector(".section-3-card-head").textContent
               }</h1>
               </li>
               <li>
               ${value.querySelector(".full-content").textContent}
               </li>
             </ul>
           </section>
         </section>
    `;

      const activeModal = document.querySelector(".main-modal-outer");
      activeModal.classList.toggle("active");

      closeModal(activeModal.querySelector(".modal-toggle"), activeModal);
      anyWhereClose(activeModal);
    });
  });
}

function closeModal(closeButton, modal) {
  closeButton.addEventListener("click", (e) => {
    modal.classList.remove("active");
  });
}

function anyWhereClose(modal) {
  modal.addEventListener("click", (e) => {
    modal.classList.remove("active");
  });

  modal.querySelector(".main-modal-row").addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

cardClickModal();

// function cardClickModal() {
//   document.querySelectorAll(".section-3-card").forEach((card, index) => {
//     card.addEventListener("click", () => {
//       const modal = document.querySelector(".main-modal-outer");
//       console.log(modal);
//     });
//   });
// }

// cardClickModal();
