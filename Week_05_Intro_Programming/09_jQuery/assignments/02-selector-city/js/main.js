// ########################################################
// ######################## jQuery ########################
// ########################################################
// Please note that these selectors aren't connected to anything!

// Identical to CSS Selectors
// For regular HTML elements just put them between the quotes
$('div') // select all <div>'s
$('h2') // select all <h2>'s
$('p a') // select all <a>'s inside of all <p>'s
$('p, a') // select all <p>'s and <a>'s

// For HTML IDs, put the # sign in front
$('#someId')
$('#someId a')

// FOR HTML classes, put the . in front
$('.someClass')
$('.someClass a')


// #######################################################
// ######################## .html ########################
// #######################################################

// Select the HTML contents from an ID on the page and put them in the console
var exampleOne = $("#funny-bone").html();
console.log(exampleOne);

// Overwrite HTML contents in an ID
// Note that I can include HTML tags right in there
$("#redacted-funny-bone").html('<span>How many coders does it take to screw in a light bulb?</span>');

// Select text content from inside an HTML element
var exampleTwo = $("#funny-bone-again").text();
console.log(exampleTwo);

// Overwrite HTML contents in an ID
// Note that I can include HTML tags right in there
$("#redacted-funny-bone-again").text('How many coders does it take to screw in a light bulb?');

$('#funny-bone').css('color', 'red');

// Multiple property
$('$ID').css({
  'height': '100px',
  'width': '100px'
});



// #############################################################
// ######################## Click Event ########################
// #############################################################

// 1- Click on input button, turn element red using jQuery
$('#js01ID').click(function(){
  $('#adamsmorgan').toggleClass('red');
});


// ##############################################################
// ######################## JS Selectors ########################
// ##############################################################

// Find HTML ID numbers-1 and color it red
var numberOne = document.getElementById('numbers-1');
numberOne.style.color = "red";
