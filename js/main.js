$('.open__popup').click(function(e) {
  e.preventDefault();
  $('.popup__bg').fadeIn(600);
  $('html').addClass('no__scroll')
});

$('.close__popup').click(function() {
  $('.popup__bg').fadeOut(600);
  $('html').removeClass('no__scroll')
});

$(function() {
  
  var header = $('#header'),
      mainHeight = $('#main').innerHeight(),
      scrollOffSet = $(window).scrollTop();

  checkScroll(scrollOffSet);

  $(window).on('scroll', function() {
    scrollOffSet = $(this).scrollTop();

    checkScroll(scrollOffSet);
  });

  function checkScroll() {
    if(scrollOffSet >= mainHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  };
}); 