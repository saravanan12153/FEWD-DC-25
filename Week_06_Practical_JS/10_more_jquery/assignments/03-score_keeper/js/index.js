//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function() {

<<<<<<< HEAD
var value = 0;

$("#zero").click( function() {
	value = 0;
	$("#result").text(0)
	console.log("zero");
});

$("#add5").click( function() {
	value = value + 5;
	$("#result").text(value)
	console.log("add5");
});

$("#add10").click( function() {
	value = value + 10;
	$("#result").text(value)
	console.log("add10");
});

$("#sub1").click( function() {
	value = value - 1;
	$("#result").text(value)
	console.log(value);
});

}); //closing document.ready()
=======
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
>>>>>>> refs/remotes/origin/master
