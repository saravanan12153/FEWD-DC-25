
$('#take-me-home, #take-me-home-2, #take-me-home-3').click(function() {
	$.scrollTo('#start-of-page', 800);

});
var controller = $.superscrollorama();
  controller.addTween('#carousel-title-1', TweenMax.from($('#carousel-title-1'), .5, {css:{opacity:0}}));

