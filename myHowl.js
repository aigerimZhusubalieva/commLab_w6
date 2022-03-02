var sound = new Howl({
	src: ['sound.wav'],
})

var circle1 = document.getElementById('circle1');
// var circle2 = document.getElementById('circle2');
// var circle3 = document.getElementById('circle3');

circle1.addEventListener("click", function(e){
	sound.play();
	playing = false;
});

// circle2.addEventListener("click", function(e){
// 	sound.play();
// });

// circle3.addEventListener("mouseover", function(e){
// 	sound.play();
// });