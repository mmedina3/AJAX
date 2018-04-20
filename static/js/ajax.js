var queryURL = "https://callook.info/WA6UHA/json";

$('#nasa-image-button').click(function() { 

    $.ajax({
      url: queryURL,
      method: "GET"
      dataType: "jsonp"
    }).done(function(response) {
    console.log(response);
    $("center").html(response.name)
    });
});


// $('#nasa-image-button').click(function() { 
//     var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=5NgWztxsp8BpOkEh6wyvrggQ0GUQMvmv&limit=2";
//     $.ajax({
//       url: queryURL,
//       method: "GET",
//       dataType: "jsonp",
//     }).done(function(json) {
//     console.log(json);
//     $('img').attr('src', json.data.image_url)
//     });
// });