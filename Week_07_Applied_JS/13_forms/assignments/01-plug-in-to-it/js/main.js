
$("#take-me-home").click(function() {
	$.scrollTo("#top-of-the-world", 800);
});


  $(document).ready(function(){
    $("#take-me-home").sticky({topSpacing:0});
  });

  $('#countdown').countdown({
    timestamp   : new Date(2015, 0, 3) // January 3rd, 2018
});