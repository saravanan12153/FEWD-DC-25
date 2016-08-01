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
