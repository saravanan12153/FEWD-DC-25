//Implement the red light using jQuery. Don't forget to add the script tags.

<<<<<<< Updated upstream
$(document).ready(function() {

	$("#stopButton").click(function( ){
		$('#stopLight').toggleClass('red');
	});

	$("#slowButton").click(function( ){
		$('#slowLight').toggleClass('yellow');
	});

	$("#goButton").click(function(){
		$('#goLight').toggleClass('green');
	});

}); //close document.ready
=======
//$("#click-toggle").click(function(){
//  $("#toggle-target").toggleClass("orange");
//});


/*$(".bulb").click(function(){
  $("#stopLight").toggleClass("orange");
});

$(".bulb").click(function(){
  $("#slowLight").toggleClass("orange");
});

$(".bulb").click(function(){
  $("#goLight").toggleClass("orange");
});
*/


$(document).ready(function() {
$(".stopButton").click(function() {
	  $("#stopLight").toggleClass(".bulbstop");
});

$(".slowButton").click(function() {
$("#slowLight").toggleClass(".bulbslow");
console.log("slow");
});


$(".goButton").click(function() {
$("#goLight").toggleClass(".bulbgo");
});

});

>>>>>>> Stashed changes
