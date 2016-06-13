/*
//Prob:  We need a way to see user's badge count and JS points
//Sol: Use Node.js to connect to Treehouse API to get profile info and print it 
var http = require("http");
var username = "chalkers";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points JS";
  console.log(message);
}

//Connect to the API URL (http://teamtreehouse.com/username.json)
var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
  var body = '';
  //Read data
  response.on('data', function(chunk) {
    body += chunk;
  }); 
  response.on('end', function() {
    var profile = JSON.parse(body);
    console.dir(profile);
  }); //Parse data
    //Print data
});//end response

request.on("error", function(error) {
  console.error(error.message);
});
*/

//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var http = require("http");
var username = "johnamann";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

//Connect to the API URL (http://teamtreehouse.com/username.json)
var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
  var body = "";
  //Read the data
  response.on('data', function (chunk) {
    body += chunk;
  });
  response.on('end', function(){
    var profile = JSON.parse(body);
    printMessage(username, profile.badges.length, profile.points.JavaScript)
  });
  //Parse the data
  //Print the data
});

request.on("error", function(error){
  console.error(error.message);
});











