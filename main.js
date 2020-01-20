$(document).ready(function () {
  //Scroll or hide the menu
  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
    $('html').toggleClass('locked');
  });

  $('.top-nav .nav-link').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
    $('html').removeClass('locked');
  });

  $('nav a[href*="#"]').on('click', function () { // nav calculate to move scroll
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100,
    }, 2000);
  });

  $('#up').on('click', function () { //button for go to top of page
    $('html, body').animate({
      scrollTop: 0,
    }, 2000);
  });

  AOS.init({ //Librarie of animations
    easing: 'ease',
    duration: 800,
  });
});
