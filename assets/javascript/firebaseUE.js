$(document).ready(function () {
   
  // Initialize Firebase for user emails
  var config = {
    // apiKey: "AIzaSyAG9FTb07UjDA0N52-woX3DTU8Zdy9KVz8",
    // authDomain: "mood-fuse-app.firebaseapp.com",
    // databaseURL: "https://mood-fuse-app.firebaseio.com",
    // projectId: "mood-fuse-app",
    // storageBucket: "mood-fuse-app.appspot.com",
    // messagingSenderId: "417107133968"
       apiKey: "AIzaSyASQ8jBTorfDSw2R15DJuRl8qXgnxXOAh0",
       authDomain: "moodfuse-afb60.firebaseapp.com",
       databaseURL: "https://moodfuse-afb60.firebaseio.com",
       projectId: "moodfuse-afb60",
       storageBucket: "moodfuse-afb60.appspot.com",
       messagingSenderId: "163903846814"
     
   };
   firebase.initializeApp(config);
  var database = firebase.database();


 
 $("#newuser").on("click", function(event){
     event.preventDefault();
     var email = $("#email-input").val().trim();

database.ref().push({
 email: email
});

console.log( "new user" + email);

$("#email-input").val("");


 });

database.ref().on("child_added", function(childSnapshot) {
 console.log(childSnapshot.val());

 var newUserEmail = childSnapshot.val().email;

 console.log("new user: " + newUserEmail);


});

 });