$(document).ready(function() {
    console.log("jquery is working");
	$( ".bar" ).draggable( { 
		appendTo: "body"
	});

// product display


	$( "#product-1" ).click(function() {
		$( "#product-1" ).hide();
		$( "#show-1" ).slideToggle("slow");
		// $( "#show-1" ).slideToggle("slow");
		// if $( ".lg" ).insertAfter( $( "grid" ) 
		// );
	});

	// $( "#product-1" ).click(function() {
	// 	$( "#show-1" ).slideToggle("slow");
	// 	// if $( ".lg" ).insertAfter( $( "grid" ) 
	// 	// );
	// });

	$( "#show-1" ).click(function() {
				$( "#product-1" ).show(1000);
		$( "#show-1" ).slideToggle("slow");
	});


	// $( "#show-1" ).click(function() {
	// // 	self.location.reload();
	// 	$( ".wrapper" ).toggle("slow");
	// });

// function myFunction() {
//     var swap = document.getElementById('show-1');
//     if (swap.style.display === 'none') {
//         swap.style.display = 'block';
//     } else {
//         swap.style.display = 'none';
//     }
// }

// myFunction;
  
	// $( "#product-1" ).click(function() {
	// 	location.reload();
	// });

	// --

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



	// $( "#product-1" ).click(function() {
	// 		window.location.reload();
	// });

// $( ".wrapper" ).click(function() {
// 	});
		// window.location.reload();
		



});



		// $ ( ".wrapper" ).toggle("slow");
