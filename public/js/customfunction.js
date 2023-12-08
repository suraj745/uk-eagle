import { select } from "./selector";

export function loadSwiperSlide(data, select, component) {
  select.innerHTML = data
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

      return component(value, head2, para2);
    })
    .join("");
}
