var language;

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

  // initLanguage();
  //
  // console.log('/language/' + localStorage.getItem('language') + '.json');
  // //Setting all texts with language selections
  // $('#lang-WIP').text(language.wip);
});

//Functions used for set up the language ( NOT WORKING CHROME DON'T ACCEPT REQUEST FROM FILE)

// function initLanguage()
// {
//   (localStorage.getItem('language') == null) ? setLanguage('es') : setLanguage('en');
//
//   getLanguage();
// }
//
// function getLanguage() {
//
//   $.ajax({
//     url: '/language/' + localStorage.getItem('language') + '.json',
//     dataType: 'json',
//     async: false,
//     dataType: 'json',
//     success: function (lang) {
//       language = lang;
//     },
//   });
// }
//
// function setLanguage(lang) {
//   console.log(lang);
//   localStorage.setItem('language', lang);
// }
