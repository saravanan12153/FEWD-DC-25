<<<<<<< HEAD
<<<<<<< HEAD
//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function() {
   // WRITE OTHER CODE HERE!!
	$('#stopButton').click(function(){
		$('#stopLight').toggleClass('red');
	});
	$('#slowButton').click(function(){
		$('#slowLight').toggleClass('amber');
	});
	$('#goButton').click(function(){
		$('#goLight').toggleClass('green');
	});

}); //closing document.ready()//
=======

$("#stopButton").click(function() {
	$("#stopLight").toggleClass("bulbred");
	console.log("stop");

});

$("#slowButton").click(function(){
	$("#slowLight").toggleClass("bulbyellow");
	console.log("slow");
});



$("#goButton").click(function(){
 $("#goLight").toggleClass("bulbgreen");
 console.log("go");
});
>>>>>>> origin/master
=======
//Implement the red light using jQuery. Don't forget to add the script tags.
>>>>>>> origin/master
