$(document).ready(function() {

var light = "on"

$("button").click( function() {
	if (light == "on") { 
			$("body").css("background-color","black");
			light = "off";
			console.log(light);
	} else if (light = "off") {
			$("body").css("background-color","white");
			light = "on";
			console.log(light);
		};
});


}); //document ready, close