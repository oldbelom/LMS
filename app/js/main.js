$(function(){

  $('.slider__inner').slick({
    infinite: true,
    autoplay: true,
    arrows: false,
  });

  $('.reviews__slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev">&#8249</button>',
    nextArrow: '<button type="button" class="slick-next">&#8250</button>',
  });

  $(".rateYo").rateYo({
    rating: 4.5,
    readOnly: true,
    starWidth: "15px",
  });

  $('.header__menu-btn').on('click', function(){
    $('.menu > ul').toggle(400, "swing");
  });

});