$(function(){

  $('.slider__items').slick({
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
  });

  $('.datepicker-here').datepicker({
    minDate: new Date(),
  });

  $('select').styler();

  $('.properties__item-image').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true,
          fixedContentPos:false,
        }
    });
});
  //animation
  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
  })
  wow.init();

  //adaptive function(burger)
  $(window).resize(function(event) {
    adaptive_function();
  });
  function adaptive_header(w,h) {
    var headerBurger=$('.header__burger');
    var headerLang=$('.header__menu');
    if(w<950){
      if(!headerLang.hasClass('done')){
        headerLang.addClass('done').appendTo(headerBurger);
      }
    }else{
      $.each($(headerLang), function(index, val) {
        if($(this).hasClass('header__menu-right')){
          if($(this).hasClass('done')){
             $(this).removeClass('done').prependTo($('.header__inner-item').eq(2));
        }
      }else{
          if($(this).hasClass('done')){
             $(this).removeClass('done').prependTo($('.header__inner-item').eq(0));
          }
        }
      });
    }
  }
  function adaptive_function() {
      var w=$(window).outerWidth();
      var h=$(window).outerHeight();
    adaptive_header(w,h);
  }
    adaptive_function();

    $('.header__burger').on('click', function(){
      $('.header__menu').slideToggle();
  });

  $('.header__burger').click(function(event) {
    $(this).toggleClass('active');
    $('.menu__btn').toggleClass('active');
    if($(this).hasClass('active')){
      $('body').data('scroll',$(window).scrollTop());
    }
      $('body').toggleClass('lock');
    if(!$(this).hasClass('active')){
      $('body,html').scrollTop(parseInt($('body').data('scroll')));
    }
  });

});

