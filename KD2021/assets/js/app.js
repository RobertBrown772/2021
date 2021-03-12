$(document).ready(function () {
  console.log($('.navigation').height());

  $('.no-crumbs').css('margin-top', $('.navigation').height());

  $('.navigation--item').click(function (e) {
    $('.collapse').collapse('hide');
  });
  $('body').click(function (e) {
    $('.collapse').collapse('hide');
  });



  $('.navigation--hamburger').click(function (e) {
    $('.navigation-mobile').toggleClass('js-hide');
    $('body').toggleClass('modal-open');
    $('.js-arrow').toggleClass('d-none');
    $('.js-hamburger').toggleClass('d-none');
  });

  $('.js-backdrop').click(function (e) {
    $('.navigation-mobile').toggleClass('js-hide');
    $('body').toggleClass('modal-open');
    $('.js-arrow').toggleClass('d-none');
    $('.js-hamburger').toggleClass('d-none');
  });

});

