$("#take-me-home, #take-me-home-2, #take-me-home-3").click(function() {
  $.scrollTo('#start-of-page', 800);
});

$(".yellow").bacon({
        'type' : 'bezier',
        'c1' : { x : 10,        y : 0  },
        'c2' : { x : -115,      y : 170 },
        'c3' : { x : 35,        y : 340 },
        'c4' : { x : 15,        y : 480 },
        'align'  : 'right'
    }
);

$(".yellow").bacon({
        'type' : 'line',
        'step'      : 5,
        'align'     : 'right'
    }
);
