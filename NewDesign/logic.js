$(document).ready(function () {
  $('#button').on('click', 'i', function () {
    $(this).toggleClass('fa-chevron-left fa-times');
    $(this).toggleClass('after');
    $(this).parents().siblings().toggleClass('after');
  });
});

const collapseNav = () => {
  document.getElementById('nav').classList.toggle('collapsed');
  document.getElementById('iconButtonNav').classList.toggle('fa-chevron-left');
  document.getElementById('iconButtonNav').classList.toggle('fa-chevron-right');
};
