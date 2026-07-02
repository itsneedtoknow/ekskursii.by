import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
const reviewCards = document.querySelectorAll(".review");

reviewCards.forEach((item) => {
  const itemReadMore = item.querySelector(".review__more");

  if (itemReadMore) {
    itemReadMore.addEventListener("click", function (e) {
      e.stopPropagation();

      reviewCards.forEach((card) => {
        if (card !== item) {
          card.classList.remove("review--expanded");
          const btn = card.querySelector(".review__more");
          if (btn) btn.textContent = "Далее";
        }
      });

      const isExpanded = item.classList.toggle("review--expanded");

      itemReadMore.textContent = isExpanded ? "Свернуть" : "Далее";
      swiper.update();
    });
  }
});

document.body.addEventListener("click", function (e) {
  if (!e.target.closest(".review")) {
    reviewCards.forEach((card) => {
      card.classList.remove("review--expanded");
      const btn = card.querySelector(".review__more");
      if (btn) btn.textContent = "Подробнее";
      swiper.update();
    });
  }
});
