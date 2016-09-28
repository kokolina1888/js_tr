$(document).ready(function() {
	
	// runs when an h2 heading is clicked
    $("#faqs h2").click(function() {
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus") {
		   	$(this).next().slideUp(3000, 'easeInCubic');
	   	}
	   	else {
	        $(this).next().slideDown(1000, 'easeInQuad');
	   	}
    }); // end click
    
    // runs when the page is ready
    $("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+175px" }, 1000 )
		       .animate( { fontSize: "175%", left: "-175px" }, 1000 );
		    
	// runs when the top-level heading is clicked
	$("#faqs h1").click(function() {
		$(this).animate( { fontSize: "650%", opacity: 1, left: "175" }, 2000 )  
			   .animate( { fontSize: "175%", left: "-175px" }, 1000 );
	}); // end click
    
}); // end ready
