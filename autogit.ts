let string1: string = "Hello";
let string2: string = "World";
let result: string = string1 + " " + string2; // "Hello World"
let string1: string = "Hello";
let string2: string = "World";
let result: string = string1.concat(" ", string2); // "Hello World"
let string1: string = "Hello";
let string2: string = "World";
let result: string = `${string1} ${string2}`; // "Hello World"
let str1: string = "Hello";
let str2: string = "World";

// Using + operator
let concatenated1: string = str1 + " " + str2;

// Using concat method
let concatenated2: string = str1.concat(" ", str2);

// Using template literals
let concatenated3: string = `${str1} ${str2}`;

console.log(concatenated1); // Output: "Hello World"
console.log(concatenated2); // Output: "Hello World"
console.log(concatenated3); // Output: "Hello World"
