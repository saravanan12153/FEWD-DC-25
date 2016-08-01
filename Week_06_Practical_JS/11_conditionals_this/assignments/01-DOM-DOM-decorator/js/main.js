
//#### 1. Border around author's name ####//
    $(".author-name").css({"border": "red 14px solid"});

//#### 2. Orange border around .author-related-news-container ####//
    $(".author-related-news-container").css({"border": "orange 14px solid"});

//#### 3. Hide each image on the page ####//
    $("img").hide(1000);

//#### 4. Make each H2 have a pink background with padding ####//
    $(document).find("h2").css("background", "pink");

//#### 5. Make each H3 have a green background with white text ####//
    $("h3").css({"background-color": "green",
        "color":"white"
        });

        //####wrong assignment below####//
// ######################################################################
// ######################## Comparison Operators ########################
// ######################################################################
// Comparing things in Javascript

// 1- You can compare strings but it's often pretty useless
var color = "red", animal = "turtle";
if (color > animal) {
  // false - nothing will return here
} else {
  console.log ("Color is not greater than animal - what are you thinking?")
}

// 1b- Note that you don't need an else statement when writing a conditional statement
if (color === animal) {
  // false - nothing will return here
} else {
  console.log ("Color is not equal to animal. Get over it.");
}

// 2- You can intialize different variable types (string and integer) in one line
// But what happens when we compare them?
var otherColor = "blue", daysInAWeek = "7";
if (otherColor === daysInAWeek) {
  // false - nothing will return here
} else {
  console.log ("Blue and 7 are not equal because they are different variable types.");
}

// 2b - You could use the fact that they aren't the same to compare them
if (otherColor !== daysInAWeek) {
  // true - because they aren't equal
  console.log ("This prints precisely because Blue and 7 are not equal - because we used the inequality operator");
}

// 3- A more realistic scenario is comparing integers, no quotes
var blackJack = 21, daysInAWeek = 7;
if (blackJack >= daysInAWeek) {
  // true - because blackJack is larger than daysInAWeek
  console.log ("Blackjack is a greater number than how many days are in a week");
}

// 3b- Now we will actually do something with a comparison condition
if (daysInAWeek <= blackJack) {
  // true - because blackJack is larger than daysInAWeek
  $("#orange-text").css({
    "color": "white",
    "background-color": "orange",
    "padding": "20px"
  })
}

// 4- Another integer comparison, using else if
var blackJack = 21, daysInAWeek = 7;
if (blackJack <= daysInAWeek) {
  // false, blackJack is not less than or equal to daysInAWeek
} else if (blackJack >= daysInAWeek) {
  $("#blackjack-container").html("<img src=\"http://blackjacklife.com/wp-content/uploads/2012/01/blackjack-picture-1.jpg\">");
}

// 5- Setting a Boolean based on variable values
// Note the program flow here, this is getting more advanced
var octopusLegs = 8, maxVolumeLevel = 45;
if (octopusLegs !== maxVolumeLevel) {
  var checkVal = true;
}
function calamari () {
  if (checkVal === true) {
    $(".box-example-1").css({
      "background-color": "yellow",
      "color" : "black"
    });
  }
}
calamari();

// ########################################################
// ######################## .val() ########################
// ########################################################

// 1- val() use to get value from input field
var inputValue = $( "#input-set-placeholder-value" ).val();
function setValueInHTML () {
  $("#input-value-output").html(inputValue);
}
setValueInHTML();

// 2- Think about using .val() constructively with forms
// What does `this` represent when used in this function?
// Why didn't I have to call this function?
$( "button" ).click(function() {
  var text = $( this ).text();
  $( "#input-destination" ).val( text );
});

// 3- Using return with Arguments
// This is how most functional programming occurs
// Variables values are defined on the fly by parameters passed into functions
function addThings(val1, val2) {
  var sum = val1 + val2;
  return sum;
}
var newNumber = addThings(1414, 8908098);
console.log(newNumber);

////////////// DOM DOM traversal assignemnt 7.27.2016 ////////////////////
// Red border around .author-name
// Orange border around .author-related-news-container
// Hide each image on the page
// Make each H2 have a pink background with padding
// Make each H3 have a green background with white text
$(document).ready(function() {

// $(".author-name").css("border", "1px solid red");
$(".author-info-container").prev().css("border", "2px solid red");
$(".author-related-news-title").next().css("border", "2px solid orange");
// $("img").hide();
$(document).find("img").hide();
$(document).find("h2").css({
    "background-color": "pink",
    "padding": "10px",
});
$(document).find("h3").css({
    "background-color": "limegreen",
    "color": "white",
});

}); //close document.ready