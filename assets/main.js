$(document).ready(function() {
    console.log("jquery is working");
	$( ".bar" ).draggable( { 
		appendTo: "body"
	});

// product display

	$( "#product-1" ).click(function() {
		$( "#show-1" ).toggle("slow");
	});

	$( "#product-2" ).click(function() {
		$( "#show-2" ).toggle("slow");
	});

	$( "#product-3" ).click(function() {
		$( "#show-3" ).toggle("slow");
	});

	$( "#product-4" ).click(function() {
		$( "#show-4" ).toggle("slow");
	});

	$( "#product-5" ).click(function() {
		$( "#show-5" ).toggle("slow");
	});

	$( "#product-6" ).click(function() {
		$( "#show-6" ).toggle("slow");
	});
});



