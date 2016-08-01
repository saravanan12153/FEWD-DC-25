
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
