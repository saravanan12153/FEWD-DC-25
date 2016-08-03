$(document).ready(function(){
	$('#take-me-home, #take-me-home-2, #take-me-home-3').click(function(){
  scrollTo($('header'), {
    duration: 600
  });
  return false;
});

	$('.button-style').click(function(){
		$('#orange-paragraph').toggleClass('tcorange')
	
	});	
});