$('#take-me-home, #take-me-home-2, #take-me-home-3').click(function(){
  $.scrollTo($('html'), {
    duration: 600
  });
  return false;
});
