var form = $('#newCommentForm');

 	$("form").on("submit", function(event) {
         event.preventDefault();
          
         var formData = $(this).serialize();
          console.log(formData);
          console.log($(this).attr("data-id"));
          

          console.log($("input[name=title]").val());

       $.post('/commentGrabber/', formData).done(function(responseData) {
            console.log(responseData);
       });
    });     