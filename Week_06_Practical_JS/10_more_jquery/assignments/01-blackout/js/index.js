/*function changelight() {
	$("body").css("background","black");
}

$("#light_switch").click(changelight);

*/



//function changelight() {
//	$("body").toggleClass("black");
//}

//$("#light_switch").click(changelight);


$(document).ready(function() {
$("#light_switch").click(function(){
  $("body").toggleClass("dark");
});

});






