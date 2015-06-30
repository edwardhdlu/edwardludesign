$( document ).ready(function() {

$("#services_link").click(function() {
  $('html, body').animate({
      scrollTop: $("#services").offset().top - 50
  }, 1000);
});

$("#portfolio_link").click(function() {
  $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
  }, 1000);
});

$("#info_link").click(function() {
  $('html, body').animate({
      scrollTop: $("#info").offset().top 
  }, 1000);
});

var tmax_opts = {
  delay: 0.5,
  repeat: 0,
  repeatDelay: 2.5,
  yoyo: true
};

var tmax_tl           = new TimelineMax(tmax_opts),
    polytext_shapes   = $('svg.polytext > g path, polygon'),
    polytext_stagger  = 0.00475,
    polytext_duration = 2.5;

var polytext_staggerFrom = {
  scale: 0,
  opacity: 0,
  transformOrigin: 'center center',
};

var polytext_staggerTo = {
  opacity: 1,
  scale: 1,
  ease: Elastic.easeInOut
};

tmax_tl.staggerFromTo(polytext_shapes, polytext_duration, polytext_staggerFrom, polytext_staggerTo, polytext_stagger, 0);

});