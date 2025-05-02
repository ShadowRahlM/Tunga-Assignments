 
const name = 'Edwin Mugabi';
const dayOfBirth = new Date(1997, 10, 11); // Month is 0-indexed (10 = November)

// let dayOfBirth = new Date(1997, 10, 11); // Fixed the error




const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question("What's your favorite color ? ", (favoriteColor) => { 		//nodejs version
	console.log(`your favorite color is ${favoriteColor}`);
	readline.close();
});



const favoriteColor = prompt("What's your favorite color ? "); // browser version
console.log(`your favorite color is ${favoriteColor}`);


const word = "what's your best programming language besides python!";



let message = {'null':'It signifies an intentional absence of data','undefined':"any variable that isn't assigned a value in JS is undefined"};

message.null;
message.undefined;

let thing;

thing === undefined;