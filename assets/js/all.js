"use strict";

$(function () {
  console.log('Hello Bootstrap5');
  var myCourseswiper = new Swiper(".myCourseSwiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    autoplay: {
      delay: 2000
    },
    breakpoints: {
      // when window width is >= 320px
      570: {
        // slidesPerView: 3,
        spaceBetween: 8
      },
      // when window width is >= 480px
      768: {
        // slidesPerView: 4,
        spaceBetween: 16
      },
      // when window width is >= 640px
      992: {
        // slidesPerView: 5,
        spaceBetween: 16
      }
    } // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

  });
  var myReviewSwiper = new Swiper(".myReviewSwiper", {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    // autoplay: {
    //   delay: 2000,
    // },
    // cssMode: true,
    navigation: {
      nextEl: ".review-swiper-button-next",
      prevEl: ".review-swiper-button-prev"
    },
    pagination: {
      el: ".review-swiper-pagination",
      clickable: true
    },
    mousewheel: true,
    keyboard: true
  });
  var elem = document.querySelector('input[name="inputAppoint"]');
  console.log("found date pick=".concat(elem));
  var datepicker = new Datepicker(elem, {
    // ...options
    language: 'zh-TW',
    buttonClass: 'btn'
  });
});
//# sourceMappingURL=all.js.map
