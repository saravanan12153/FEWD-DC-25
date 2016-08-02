// var contentz

// $('#take-me-home, #take-me-home-2, #take-me-home-3').click(function(){
//   // $.scrollTo($('html'){
//   //   duration: 600
//   	$("#top-of-the-world").html("header").val()=contentz;
//     $("#nav-compenents").text(contentz);
//   console.log("take me home 2 clicked");
// });

var onoff1 = 0
$("#take-me-home-2").click(function(){
	if (onoff1 == 0) {
		$("#nav-components").show("slow");
		onoff1 = 1;
	} else if (onoff1 == 1) {
		$("#nav-components").hide("slow");
		onoff1 = 0;
	};
	console.log("toggle header");
});

var contentz
var onoff2 = 0
$("#take-me-home-2").click(function(){
	contentz = $("#callHeader").html(); 
	$("#nav-components-2").text(contentz);
	if (onoff2 == 0) {
		$("#nav-components-2").show("slow");
		onoff2 = 1;
	} else if (onoff2 == 1) {
		$("#nav-components-2").hide("slow");
		onoff2 = 0;
	};
	console.log("showing code");
});

$("#orange-p").click(function(){
	$("#orange-paragraph").toggleClass("orangey");
	console.log("orange paragraph clicked");
});