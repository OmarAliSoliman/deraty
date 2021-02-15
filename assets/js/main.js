$(document).ready(function () {
  "use strict";

  // AOS.init();

  // $('.feature-card-slider').slick({
  //   dots: false,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   rtl: true,
  //   arrows: true,
  //   infinite: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  if ($(".show-application")) {
    $(" .show-application .owl-carousel").owlCarousel({
      autoplay: true,
      loop: true,
      // margin: 10,
      responsiveClass: true,
      nav: false,
      autoplay: true,
      arrows: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 4,
          nav: true,
          loop: false,
        },
      },
    });
  }

  if ($(".features")) {
    $(".features .owl-carousel").owlCarousel({
      autoplay: true,
      loop: true,
      // margin: 10,
      responsiveClass: true,
      nav: false,
      autoplay: true,
      arrows: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: true,
        },
        1000: {
          items: 4,
          nav: true,
          loop: false,
        },
      },
    });
  }
});
