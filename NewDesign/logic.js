$(document).ready(function () {
  $('#button').on('click', 'i', function () {
    $(this).toggleClass('fa-chevron-left fa-times');
    $(this).toggleClass('after');
    $(this).parents().siblings().toggleClass('after');
  });
});
