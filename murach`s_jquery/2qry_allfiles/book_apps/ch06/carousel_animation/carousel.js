$(document).ready(function() {
	$('image_list a').hover(
function(evt){$(this).stop(true).animate({top: 15}, 'fast');},
function(evt){$(this).stop(true).animate({top: 0}, 'fast');}
	);
}); // end ready