$(document).ready(function() {

	$('#submit-btn').click(function() {
		var city = $("#city-type").val();
		console.log(city);
		});

	if (city === 'San Francisco' || city === 'Bay Area' || city === 'SF' ) {
		$('body').css('background-image', 'images/sf.jpg');
		console.log('san fran');
	}

	else if (city === 'NYC' || city === 'New York' || city === 'NYC') {
		$('body').css('background-image', 'images/nyc.jpg');
		console.log('nyc');
	}

	else if (city === 'Austin' || city === 'ATX')  {
		$('body').css('background-image', 'images/austin.jpg');
		console.log('austin');
	}

	else if (city === 'Sydney') {
		$('body').css('background-image', 'images/sydney.jpg');
		console.log('sydney');
	}

	else if (city === 'LA' || city === 'Los Angeles') {
		$('body').css('background-image', 'images/la.jpg');
		console.log('la');
	}

	else {
		$('body').css('background-image','images/maxresdefault.jpg');
	}

});