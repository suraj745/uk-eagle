import "/public/js/lenis";
import "/public/js/gsap";
import "/public/js/aos";
import "/public/js/swup";
import "/public/js/screenload";
import "/public/js/serviceload";
import "/public/js/swipeUp";
import "/public/js/swiper";
import "/public/js/pageLoader";
import "/public/js/modal";
import "/public/js/businessload";

import "/public/js/scrollFunction";

function checkLoc() {
  if (window.location.pathname === "/") {
    document.querySelector(".nav-menus > :nth-child(1) > a").style.display =
      "none";
  } else {
    document.querySelector(".nav-menus > :nth-child(1)").style.display =
      "block";
  }
}

checkLoc();
