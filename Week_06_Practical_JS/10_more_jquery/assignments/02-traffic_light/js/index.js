//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function() {

$("#stopButton").click(function() {
  $("#stopLight").toggleClass("redLight");
  console.log("red");
  //use .removeClass to turn other lights off simultaneously
  $("#slowLight").removeClass("yellowLight");
  $("#goLight").removeClass("greenLight");
});

$("#slowButton").click(function() {
  $("#slowLight").toggleClass("yellowLight");
  console.log("yellow");
  //use .removeClass to turn other lights off simultaneously
  $("#stopLight").removeClass("redLight");
  $("#goLight").removeClass("greenLight");
});

$("#goButton").click(function() {
  $("#goLight").toggleClass("greenLight");
  console.log("green");
  //use .removeClass to turn other lights off simultaneously
  $("#stopLight").removeClass("redLight");
  $("#slowLight").removeClass("greenLight");
});


}); //closing document.ready()