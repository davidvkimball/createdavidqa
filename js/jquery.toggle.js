$(function() {

// Accordion menu
  $('nav > ul > li,nav > ul > li > a[href^=#]').on('click', function() {
    (window.innerWidth ? window.innerWidth : $(window).width()) <= 480 && (
    $(this).children('ul:not(:animated)').slideToggle(),
    $(this).children('span').toggleClass('open'),
    $('.sub-menu').not($(this).children('.sub-menu')).slideUp(),
    $('nav li').children('span').not($(this).children('span')).removeClass('open')
    )
  });
    $('.sub-menu li a[href^=#]').on('click', function(event) {
    event.stopPropagation();
  });
 
// When a link within the menu is clicked during small screen display, it closes once
// For in-page links
  $('nav a').on('click', function() {
    (window.innerWidth ? window.innerWidth : $(window).width()) <= 480 && $('#open').click()
  });

// To prevent the menu from not being displayed when resizing after closing the menu in small screen display.
  $(window).resize(function() {
    var menu = $('#menu'),
        sub = $('.sub-menu'),
      w = window.innerWidth ? window.innerWidth : $(window).width();
      w > 480 && menu.is(':hidden') && menu.attr('style', ''),
      w > 480 && sub.is(':hidden') && sub.attr('style', '')
  });

// The behavior of the open menu button
  $('#open').click(function() {
    $('#menu').slideToggle(300);
    $('#open-icon').toggleClass('close');
    return false;
  });
    
});