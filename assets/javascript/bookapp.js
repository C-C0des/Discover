$(document).ready(function () {
   


 $(".buttonyellow").on("click", function() {

     $("#results").empty();

     var mood = $(this).attr("data-mood");


 var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" +
     encodeURIComponent(mood) + "&api_key=AIzaSyB9XAxTgYAcBAH0oXzDFrnky3fNU82zGuU";

     console.log(queryURL);
     $.ajax({
         url: queryURL,
         method: "GET"
       })

       .then(function(response) {
         console.log(response);
         var results = response.items;
         console.log(results);
var randomResult = [Math.floor((Math.random() * results.length) + 1)]
           console.log(results[randomResult]);
             // Creating a div with the class "item"
             var bookDiv = $("<div class='item'>");

             var rating = results[randomResult].volumeInfo.averageRating;
             var desc = results[randomResult].volumeInfo.description;
             var bookName = results[randomResult].volumeInfo.title;

             
             var p = $("<p>").text("Rating: " + rating);
             var description = $("<p>").text("Description: " + desc);
             var title = $("<p>").text("Title: " + bookName);

             // Creating an image tag
             var bookImage = $("<img>");

             // Giving the image tag an src attribute of a proprty pulled off the
             // result item
               console.log(results[randomResult].volumeInfo.imageLinks.thumbnail);
                 bookImage.attr("src", results[randomResult].volumeInfo.imageLinks.thumbnail);


             bookDiv.append(title);
             bookDiv.append(description);
             bookDiv.append(p);
             bookDiv.append(bookImage);

             $("#results").html(bookDiv);
           
         
       });

     })

    

 });
