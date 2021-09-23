$(document).ready(function() {
	$('#slides').superslides({
		animation : "fade",
		play: 5000, 
	});

	var typed = new Typed(".typed" , {
		strings: ["Koutaro Kobayashi"],
		typeSpeed: 150,
		loop: 3,
		startDelay: 1000,
		showCursor: false
	});

	var typed = new Typed(".typed2" , {
		strings: ["Tokyo Metropolitan University", "Department of Mathematics"],
		typeSpeed: 100,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});



});


var body = document.getElementsByTagName('body')[0];

function fadeOut() {
    body.classList.add('bodyfadeout');
}

function linkUrl() {
    location.href = 'https://qiita.com/kota-math/items/8b32c4eb87fa86bd15c2'
}

function linkUrl2() {
	　location.href = 'https://github.com/kota-math'
}
var bt1 = document.getElementById('button1');
var bt2 = document.getElementById('button2');

bt1.addEventListener('click', function() {
    fadeOut();
    setTimeout(linkUrl, 1500);
});

bt2.addEventListener('click', function() {
    fadeOut();
    setTimeout(linkUrl2, 1500);
});



