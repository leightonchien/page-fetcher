// Implement a small command line node app called fetcher.js that
// 1. takes a URL as a command-line argument 
// 2. takes a local file path and download the resource to the specified path.
/////////////////////////////////////////////////////////////////////////////////

// Require Request Module: to make the http request.
const request = require("request");

// Require File System module: to write the file
const fs = require("fs");

// Create variable to pass the given URL
const url = process.argv[2];

// Create a variable to pass the local file
const file = process.argv[3];

// Create a variabe to obtain the size of the index.hmtl file
const stats = fs.statSync("index.html");

// Convert size into bytes
const sizeBytes = stats.size;

// Use the callback based approach we've been learning so far
request(url, (error, response, body) => {

  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Example homepage.

  // Write the body of www.example.com/ into our local index.html file; if error, throw error
  fs.writeFile("index.html", body, function(err) {
    if (err) throw err;
    
    // If no error print the below log to terminal
    //Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
    console.log("Downloaded and saved 3261 bytes to ./index.html");
  });
});