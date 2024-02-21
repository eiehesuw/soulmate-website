$('.sales__slider').slick({
  dots: true,
  slidesToShow: 3,
  centerMode: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  lazyLoad: 'ondemand',
  initialSlide: 2,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 420,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});
