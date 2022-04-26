//The require statement is a built-in function that's globally available in Node.js
//It allows the app.js file to access the fs module's functions through the fs assignment
const fs = require('fs');
const generatePage = require('./src/page-template.js');
//An array which holds the user command-line arguments
const profileDataArgs = process.argv.slice(2);
//Using assignment destructuring, we assign elements of an array to variable names in a single expression
const [name, github] = profileDataArgs;

//There are three arguments in this function
//The first argument is the file name that will be created, or the output file
//The second argument is the data that's being written: the HTML string template
//The third argument is the callback function that will handle any errors as well as the success message
fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});