
const swiper = new Swiper('.heroSwiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.hero-swiper-button-next',
    prevEl: '.hero-swiper-button-prev',
  },
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  pagination: {
    el: '.swiper-pagination',

    type: 'custom',
    renderCustom: function (swiper, current, total) {
      // Тут може бути довільна розмітка та класи для кастомной пагінації
      return `<span class="current">${String(current).padStart(
        2,
        '0'
      )}</span><span class="total">${String(total).padStart(2, '0')}</span>`;
    },
  },
});
