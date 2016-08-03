$('#take-me-home, #take-me-home-2, #take-me-home-3').click(function(){
  $.scrollTo($('html'), {
    duration: 600
  });
  return false;
});




function FunctionName() {
$("#orange-paragraph").css({
	"background-color": "orange",
	"color": "white"
});
}
$(".button-style").click(FunctionName);



$("#take-me-home-2").click(function() {
	var variableStuff = $(".nav-container").html();

alert(variableStuff); 

});

