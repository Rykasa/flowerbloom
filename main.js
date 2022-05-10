const swiper = new Swiper('.swiper-container', {

  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  // And if we need scrollbar
});