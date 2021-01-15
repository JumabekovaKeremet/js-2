let first= "Shrek";
let second= first;
let third= second;
let fourth= third;
let fifth= fourth;

let capital= "Tokio";
let country= "Japan";

let subject= "Distance"
let unit= "meters";

subject= "Spacing";
unit= "centimeters";

subject= "Force";
unit= "newtons";

let title= "Inferno";
let author= "Dan Brown";

title= "Dead Souls";
author= "Gogol";

let artist= "Ed Sheeran";
let movie= "Terminator"

console.log(fifth);
console.log(capital + " is the capital of " + country);
console.log(subject + "is measured in "  + unit );
console.log( "My favourite book is " + title + " by " + author + "!");
console.log("My favourite song is 'Yesterday' by Beatles");
console.log("My favourite song is \"Yesterday\" by Beatles");
console.log(" I\'m the best!");
console.log("I'm the fan of \"" + artist + "\"!");
console.log(`I'm the fan of "` + artist + `"!`);
console.log(`My favourite movie is "` +  movie + `"`);
console.log(`My favourite movie is "${movie}"`);

let firstName= prompt('What is your name?');

console.log(`Your name is ${firstName}`);
