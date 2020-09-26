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

  var containerEl = $(".steps__slider")

  var mixer = mixitup(containerEl, {
    load: {
      filter: '.category-step1'
    },
    animation: {
      enable: false
    }
  });
});






// $(function () {
//   $('#Container').mixItUp({
//     load: {
//       filter: '.category-step1'
//     }
//   });
// });