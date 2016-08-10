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

$(document).ready(function(){

$("#stopButton").click(function(){
	$("#stopLight").toggleClass("red");
	$("#slowLight").removeClass("yellow");
	$("#goLight").removeClass("green");
		});

$("#slowButton").click(function(){
	$("#slowLight").toggleClass("yellow");
	$("#stopLight").removeClass("red");
	$("#goLight").removeClass("green");
		});

$("#goButton").click(function(){
	$("#goLight").toggleClass("green");
	$("#slowLight").removeClass("yellow");
	$("#stopLight").removeClass("red");
		});

}); //closing out READY
>>>>>>> Stashed changes
