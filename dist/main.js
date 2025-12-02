(() => {
  // src/js/main.js
  document.addEventListener("DOMContentLoaded", function() {
    if (typeof Swiper === "undefined")
      return;
    new Swiper(".locations-block__list.swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      watchOverflow: false,
      navigation: {
        nextEl: ".locations-block__next",
        prevEl: ".locations-block__prev"
      },
      grabCursor: true
    });
  });
})();
