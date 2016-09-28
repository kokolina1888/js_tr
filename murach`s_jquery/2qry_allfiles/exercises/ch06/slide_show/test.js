$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;
		
	// Start slide show
    timer1 = setInterval(
        function () {   
        	console.log('yes');
        	$("#caption").slideUp(1000);
        	$("#slide").slideUp(1000,
           		function () {
           	     	if (nextSlide.next().length == 0) {
						nextSlide = $("#slides img:first-child");
					}
					else {
						nextSlide = nextSlide.next();
					}
					nextSlideSource = nextSlide.attr("src");
					nextCaption = nextSlide.attr("alt");
					$("#slide").attr("src", nextSlideSource).slideDown(1000);					
					$("#caption").text(nextCaption).slideDown(1000);
				}
			);
		}, 
		3000
	);
});