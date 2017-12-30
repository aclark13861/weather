$("form").on("submit", function(event) {
    event.preventDefault();

    var formData = $(this).serialize();
    console.log(formData);
    console.log($(this).attr("data-id"));

});    