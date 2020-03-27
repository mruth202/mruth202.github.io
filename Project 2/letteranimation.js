function setup() {

	animateCircles();
	animatePaths();
	animateEllipses();
	animateGroups();
}

function animateCircles(){
	// retrieve all the SVG paths in the html
	var pathEls = document.querySelectorAll('circle');

	for (var i = 0; i < pathEls.length; i++) {

		// for each path
		var pathEl = pathEls[i];

		// Set an offset alonf the path. Here we use thge library anime.js !!Awesome library!!
		// see documentation here: http://animejs.com/documentation/
		var offset = anime.setDashoffset(pathEl);

		pathEl.setAttribute('stroke-dashoffset', offset);

		// Animation parameters
		anime({
			targets: pathEl,
			strokeDashoffset: [offset, 0],
			duration: anime.random(1000, 3000),
			delay: anime.random(0, 2000),
			loop: true,
			direction: 'alternate',
			easing: 'easeInOutSine',
			autoplay: true
		});
	}

}

var randx = new Array(0,0,0,0,0,0,0,0,0);
var randy = new Array(0,0,0,0,0,0,0,0,0);
var rotating = false;
var theta = 0;
var scaleTimes = 0;
var scaleAnimation;


function getMouseClick(event) {
	var x = event.clientX;
	var y = event.clientY;
	var w = window.innerWidth;
	var h = window.innerHeight;
	var k = 0;

	if ( y < 400) {
	    for (k = 0; k < 9; k++) {
			randx[k] = Math.floor(Math.random() * (w-100)) - w/2;
			randy[k] = Math.floor(Math.random() * (h-100)) - h/2;
		}
		if (rotating) {
			rotating = false;
			theta = 0;
			scaleAnimation.stop();
		}
		animatePaths();
	}
	else if (y > 400) {

	//alert( 'Middle row(' + x + ',' + y + ')'  );
		rotating = true;
		//theta = 5;
		//theta = 1.1;
		animatePaths();
	} 
	else {
	  //alert( 'Bottom row(' + x + ',' + y + ')'  );
	  
	}

}


function animatePaths(){
	// retrieve all the SVG paths in the html
	var pathEls = document.querySelectorAll('path');

	for (var i = 0; i < pathEls.length; i++) {

		// for each path
		var pathEl = pathEls[i];

		// Set an offset alonf the path. Here we use thge library anime.js !!Awesome library!!
		// see documentation here: http://animejs.com/documentation/
		var offset = anime.setDashoffset(pathEl);

		pathEl.setAttribute('stroke-dashoffset', offset);
		var dx = 0;
		var dy = 0;
		dx = randx[i];
		dy = randy[i];
		
		// Animation parameters
		anime({ 
			targets: pathEl,
			strokeDashoffset: [offset, 0],
			duration: anime.random(1000, 3000),
			//delay: anime.random(0, 2000),
			delay: 0,
			loop: true,
			direction: 'alternate',
			easing: 'easeInOutSine',
			autoplay: true
		});
		if (!rotating) {
			anime({
				targets:pathEl,
				//rotate: theta,
				translateX: dx,
				translateY: dy,
				duration: 20,
				easing: 'easeInOutExpo',
				loop: false
			});
		}

		if (rotating) {
			//if (i == 4) {
				//theta += 5;
				theta =  1.0 + Math.random() * 0.5; 
				scaleAnimation = anime({
					targets:pathEl,
					translateX: dx,
					translateY: dy,
					
					scale: theta, 
					duration: 2000,
					easing: 'linear',
					direction: 'alternate',
					
					
				});
			//}
		}
	}
}

function animateEllipses(){
	// retrieve all the SVG paths in the html
	var pathEls = document.querySelectorAll('ellipse');

	for (var i = 0; i < pathEls.length; i++) {

		// for each path
		var pathEl = pathEls[i];

		// Set an offset alonf the path. Here we use thge library anime.js !!Awesome library!!
		// see documentation here: http://animejs.com/documentation/
		var offset = anime.setDashoffset(pathEl);

		pathEl.setAttribute('stroke-dashoffset', offset);

		// Animation parameters
		anime({
			targets: pathEl,
			strokeDashoffset: [offset, 0],
			duration: anime.random(1000, 3000),
			delay: anime.random(0, 2000),
			loop: true,
			direction: 'alternate',
			easing: 'easeInOutSine',
			autoplay: true
		});
	}
}

function animateGroups(){
	// retrieve all the SVG paths in the html
	var pathEls = document.querySelectorAll('group');

	for (var i = 0; i < pathEls.length; i++) {

		// for each path
		var pathEl = pathEls[i];

		// Set an offset alonf the path. Here we use thge library anime.js !!Awesome library!!
		// see documentation here: http://animejs.com/documentation/
		var offset = anime.setDashoffset(pathEl);

		pathEl.setAttribute('stroke-dashoffset', offset);

		// Animation parameters
		anime({
			targets: pathEl,
			strokeDashoffset: [offset, 0],
			duration: anime.random(1000, 3000),
			delay: anime.random(0, 2000),
			loop: true,
			direction: 'alternate',
			easing: 'easeInOutSine',
			autoplay: true
		});
	}
}