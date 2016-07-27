//Implement the red light using jQuery. Don't forget to add the script tags.

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