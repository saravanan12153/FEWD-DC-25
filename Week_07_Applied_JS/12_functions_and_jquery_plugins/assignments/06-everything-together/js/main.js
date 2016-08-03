// Using a Flickity carousel with jQuery
// initialization for homepage carousel
$('.carousel-container').flickity({
  // options
  autoPlay: 2000,
  cellAlign: 'left',
  contain: true,
  setGallerySize: false,
  wrapAround: true
});

// ScrollTo in action
$('#take-me-home, #take-me-home-2, #take-me-home-3').click(function(){
  $.scrollTo($('html'), {
    duration: 600
  });
  return false;
});


// What a waypoint looks like
var sectionTwoWaypoint = new Waypoint({
  element: document.getElementById('section-2'),
  handler: function(direction) {
    if (direction === 'down') {
      $('aside').delay(500).fadeIn();
    }
    if (direction === 'up') {
      $('aside').fadeOut();
    }
  },
  offset: 1500
});
