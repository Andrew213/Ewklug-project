$(function () {

  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });

  $('.steps__slider-btn').on('click', function () {

    $('.steps__slider-btn').removeClass('btn-active');
    $(this).addClass('btn-active');
  });

  $(document).ready(function () {
    $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });

  var containerEl = $(".steps__slider")

  var mixer = mixitup(containerEl, {
    load: {
      filter: '.category-step1'
    },
    animation: {
      enable: false
    }
  });

var mySwiper = new Swiper('.hero-slider__container', {
   loop: true,

   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 
 });


   $('.header__burger').click(function (event) {
     $('.header__nav').toggleClass('active');
     $('.body').toggleClass('lock');
   });
 


   $( "#accordion" ).accordion({
      active: false,
      collapsible: true
   });


   document.addEventListener('click', function(event){
      const accordionBtn = event.target.closest('.questions__item');
   
   if(accordionBtn){
      accordionBtn.classList.toggle('questions__item--active')
   }
   
   })

});



