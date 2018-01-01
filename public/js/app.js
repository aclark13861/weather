$(document).ready(function() {

	$('#delete1').click(function() {
		$(this).parent().remove();
	});

	$('#delete2').click(function() {
		$(this).parent().remove();
	});

	$('#delete3').click(function() {
		$(this).parent().remove();
	});

	$('#delete4').click(function() {
		$(this).parent().remove();
	});


	var form = $('#newCommentForm');

	 	$(form).on("submit", function(event) {
	         event.preventDefault();
	          
	         var formData = $(this).serialize();
	          console.log(formData);
	          console.log($(this).attr("data-id"));
	          

	          console.log($("input[name=title]").val());
	        
	          var comment = $("input[name=title]").val();
	        $.ajax({
	        	type: "POST",
	        	url: "/commentGrabber",
	        	data: String,
	        	success: function(){$(this).dialog( "close" );},

	        });

	        return false;  


	    });
});