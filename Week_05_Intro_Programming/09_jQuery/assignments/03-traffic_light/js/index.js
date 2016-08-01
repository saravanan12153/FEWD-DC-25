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