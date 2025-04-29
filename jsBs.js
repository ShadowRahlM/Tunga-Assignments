 
const name = 'Edwin Mugabi';
const dayOfBirth = new Date(1997, 10, 11); // Month is 0-indexed (10 = November)

// let dayOfBirth = new Date(1997, 10, 11); // Fixed the error

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question("What's your favorite color ? ", (favoriteColor) => {
	console.log(`your favorite color is ${favoriteColor}`);
	readline.close();
});
console.log(`your favorite color is ${favoriteColor}`);

const word = "what's your best programming language besides python!";


let message = {'nul':'It signifies an intentional absence of data','undefined':"any variable that isn't assigned a value in JS is undefined"};

let thing;

thing === undefined;
