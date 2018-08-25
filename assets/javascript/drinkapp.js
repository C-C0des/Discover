$(document).ready(function () {
   
  

 $(".buttongreen").on("click", function() {

     $("#results").empty();

     var mood = $(this).attr("data-mood");


 var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php?q=" +
     encodeURIComponent(mood) + "&api_key=1";

     console.log(queryURL);
     $.ajax({
         url: queryURL,
         method: "GET"
       })

       .then(function(response) {
         console.log(response);
         var results = response.drinks;
         console.log(results);
var randomResult = [Math.floor((Math.random() * results.length))]
           console.log(results[randomResult]);
             // Creating a div with the class "item"
             var drinkDiv = $("<div class='item'>");

             var category = results[randomResult].strCategory;
             var ing1 = results[randomResult].strIngredient1;
             var ing2 = results[randomResult].strIngredient2;
             var ing3 = results[randomResult].strIngredient3;
             var drinkName = results[randomResult].strDrink;

             
             var cat = $("<p>").text("Category: " + category);
             var ingredient1 = $("<p>").text("Ingredient 1: " + ing1);
             var ingredient2 = $("<p>").text("Ingredient 2: " + ing2);
             var ingredient3 = $("<p>").text("Ingredient 3: " + ing3);
             var title = $("<p>").text("Title: " + drinkName);

             // Creating an image tag
             var drinkImage = $("<img>");

             // Giving the image tag an src attribute of a proprty pulled off the
             // result item
             console.log(results[randomResult].strDrinkThumb);
             drinkImage.attr("src", results[randomResult].strDrinkThumb);


                 drinkDiv.append(title);
                 drinkDiv.append(ingredient1);
                 drinkDiv.append(ingredient2);
                 drinkDiv.append(ingredient3);
                 drinkDiv.append(cat);
                 drinkDiv.append(drinkImage);

             $("#results").html(drinkDiv);
           
         
       });

     })

 

 });