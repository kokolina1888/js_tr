$(document).ready(function(){
var slider = $('#image_list');//slider = ul element
var leftProperty, newleftProperty;

//the click even handler for the right button

$('#right_button').click(function(){

	//get the value of the current left property
	leftProperty = parseInt(slider.css('left'));

	//determine new value of left property
	if (leftProperty - 300 <= -900) {
		newleftProperty = 0;
	}
	else {
		newleftProperty = leftProperty - 300;

	}
	console.log(newleftProperty);

	//use the animate method to change the left property
	slider.animate({left: newleftProperty}, 1000);
});//end click

//the click event handler for the left button

$('#left_button').click(function(){
console.log(leftProperty);

	//get the value of the current left property
	leftProperty = parseInt(slider.css('left'));

	//determine new value of left property
	if (leftProperty < 0) {
		newleftProperty = leftProperty + 300;
	}
	else {
		newleftProperty = 0;
	}

	//use the animate method to change the left property
	slider.animate({left: newleftProperty}, 1000);
});//end click
});

