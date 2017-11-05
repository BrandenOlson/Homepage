function generateNormal() {
	n = 8;
	sum = 0;
	for(var i = 1; i <= n; i++) {
		sum = sum + Math.random();
	}
    return (2*sum - n) / n;
}

function draw(f, count, color) {
    var total = 100;
    var half = total/2;
    var numbers = [];
    for (var i = 0; i < total; i++) numbers[i] = 0;
    for (var i = 0; i < count; i++) {
        numbers[half + Math.round(half * f())]++;
    }
    var screenWidth = document.getElementById("maincontent").clientWidth;
    var screenHeight = document.getElementById("maincontent").clientHeight;
    var maxCount = Math.max(...numbers);
    for (var i = 1; i < total; i++) {
        $('#normal').append($('<div>').css({
            left: screenWidth*i/total + 'px',
            height: 0.45*screenHeight*numbers[i]/maxCount, 
            background: color,
            width: 1.15*screenWidth/total + 'px'
        }));
    }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var count = 1500;
var cols = [];
cols[1] = 143 
cols[2] = 149 
cols[3] = 158 
draw(generateNormal, count, 
	 'rgba('.concat(cols[1], ', ', cols[2], ', ', cols[3], ', 1)'));

// Redraw the histogram if the window is resized
$(function() {
	$(window).resize(function() {
		$('#normal').empty();
		draw(generateNormal, count, 
	 		'rgba('.concat(cols[1], ', ', cols[2], ', ', cols[3], ', 1)'));
		try {
            		progress(80, $('.prog-bar1'));
        	} catch(err) {
        	}
   	}).trigger('resize');
});
