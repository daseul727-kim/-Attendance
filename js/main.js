$(document).ready(function() {
  AOS.init({
    duration: 1200,
  })
});

document.addEventListener("DOMContentLoaded", function() {
  document.title = MAIN_TITLE;

  document.getElementById("nav_menu_1").text = NAV_MENU_1
  document.getElementById("nav_menu_2").text = NAV_MENU_2
  document.getElementById("nav_menu_3").text = NAV_MENU_3
  document.getElementById("nav_menu_4").text = NAV_MENU_4
});


/**
 * add header scroll class
 */
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll >= 50){
    $('.header').addClass('scroll')
  }else{
    $('.header').removeClass('scroll')
  }
});

/**
 * nav click event
 * @param id
 */
function navMove(id){
  var offset = $("#" + id).offset().top;
  if (window.innerWidth < 768) {
    $('html, body').animate({scrollTop : offset - 70}, 400);
  }else{
    $('html, body').animate({scrollTop : offset}, 400);
  }
}
