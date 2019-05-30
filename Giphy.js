var topics = ["dogs","cats","rabbit","stunk","goldfish","birds","forest"];


for (var i =  0; i<topics.length; i++){
  var topicBtn = $('<button>');
  topicBtn.text(topics[i]);
  topicBtn.attr('data-topic',topics[i])
  topicBtn.on("click", function(e) {
    searchGiphy($(e.target).attr('data-topic'))
  })
  $('.topics-area').append(topicBtn)
}

function searchGiphy(query){
  console.log(query)
  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=WmZEz3TtPIDWVyEBZBHfNXtxsJclPynt&limit=30");
  xhr.done(function (response) {
    console.log("success got data", response); 
    $('.inner').empty();
    var results = response.data;
    for (var i =  0; i<10; i++){
     // $('.inner').append(`<img src=${jiffs[i].images.original.url} style="height:350px; width:350px;"/>`)
      var animalDiv = $("<div>");

    var p = $("<p>").text("Rating: " + results[i].rating);
    var animalImage = $("<img>");
    //you load the stil pictures first 

    animalImage.attr("src", results[i].images.fixed_height_still.url);

    animalImage.attr("data-state", results[i].images.fixed_height.url);
    //assign a move and still attribute of the moving Giphy function
    animalImage.attr("move", results[i].images.fixed_height.url);
    animalImage.attr("still", results[i].images.fixed_height_still.url);
    animalImage.addClass("aimage");
    animalDiv.append(p);
    animalDiv.append(animalImage);
    $(".inner").prepend(animalDiv);
    animalImage.on("click", function(){
      var img=$(this);
      var src=img.attr("src");
      var imgAlt=img.attr("data-state");
      img.attr("src", imgAlt);
      img.attr("data-state", src);

    });
    }      
    });
}
$("#searchgifs").click((event) => {
  event.preventDefault();
  var userInput = $("#searchtopics").val().trim();
  searchGiphy(userInput.replace(" ", "+"))
});



 
$("#addAnimal").on("click", function(event) {
event.preventDefault();
var animal = $("#animal-input").val().trim();
animals.push(animal);
creatingButtons();
$("#animals").empty();
})

function creatingButtons() {
  $(".animalButtons").empty();
  for (var i = 0; i < animals.length; i++) {
  var a = $("<button>");
  a.addClass("animal");
  a.attr("data-name", animals[i]);
  a.text(animals[i]);
  $(".animalButtons").append(a);
  }
}




































