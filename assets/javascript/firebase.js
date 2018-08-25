$(document).ready(function () {
   
    // Initialize Firebase
    var config = {
       apiKey: "AIzaSyASQ8jBTorfDSw2R15DJuRl8qXgnxXOAh0",
       authDomain: "moodfuse-afb60.firebaseapp.com",
       databaseURL: "https://moodfuse-afb60.firebaseio.com",
       projectId: "moodfuse-afb60",
       storageBucket: "moodfuse-afb60.appspot.com",
       messagingSenderId: "163903846814"
     };
     firebase.initializeApp(config);

 var database = firebase.database();

  
   
   $(".review-submit").on("click", function(event){
       event.preventDefault();
       // Grabs user input
       var userEmail = $("#InputEmail").val().trim();
       var userReview = $("#ReviewTextarea").val().trim();

       // Pushing to database
database.ref().push({
   userEmail: userEmail,
   userReview: userReview
});

console.log(userEmail);
console.log(userReview);

// Clears all of the text-boxes
$("#InputEmail").val("");
$("#ReviewTextarea").val("");

   });
// Create Firebase event for adding user email and review to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
   console.log(childSnapshot.val());
 
   // Store everything into a variable.
   var newuserEmail = childSnapshot.val().userEmail;
   var newuserReview = childSnapshot.val().userReview;
   
 
   // User Info
   console.log(newuserEmail);
   console.log(newuserReview);
   
 
 
   // Create the new row
   var newRow = $("<tr>").append(
     $("<td>").text(newuserEmail),
     $("<td>").text(newuserReview),
     
   );
 
   // Append the new row to the table
   $("#review-table > tbody").append(newRow);
 });

   });