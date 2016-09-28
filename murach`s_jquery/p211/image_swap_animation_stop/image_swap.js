$(document).ready(function() {
	$('#image_list a').hover(
function(evt){$(this).stop(true).animate({top: 15}, 'slow');},
function(evt){$(this).stop(true).animate({top: 0}, 'slow');}
	);
}); // end ready