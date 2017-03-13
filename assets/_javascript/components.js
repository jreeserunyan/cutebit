$(document).ready(function() {

	$( ".outline" ).draggable( { 
		appendTo: "body"
	});

	$( "a.btn--add" ).draggable( { 
		appendTo: "body"
	});

	$( "footer" ).draggable( { 
		appendTo: "body"
	});

	$( ".bar" ).draggable( { 
		appendTo: "body"
	});

});

var ImageSet = function(thumb, caption) {
	this.thumb = thumb;
	this.caption = caption;
};