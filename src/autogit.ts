str.includes(searchString, position?)
const mainStr: string = "Hello, welcome to TypeScript!";
const subStr: string = "TypeScript";

const containsSubStr: boolean = mainStr.includes(subStr);

console.log(containsSubStr); // Output: true
const str: string = "Hello World";
console.log(str.includes("world")); // Output: false
console.log(str.includes("World")); // Output: true
str.indexOf(searchValue, fromIndex?)
const mainStr: string = "Hello, welcome to TypeScript!";
const subStr: string = "TypeScript";

const index: number = mainStr.indexOf(subStr);

if (index !== -1) {
    console.log(`"${subStr}" found at index ${index}.`);
} else {
    console.log(`"${subStr}" not found.`);
}
// Output: "TypeScript" found at index 18.
const mainStr: string = "Hello, welcome to TypeScript!";
const regex: RegExp = /TypeScript/;

const containsSubStr: boolean = regex.test(mainStr);

console.log(containsSubStr); // Output: true
const str: string = "Hello World";
const regex: RegExp = /world/i; // 'i' flag for case-insensitive

console.log(regex.test(str)); // Output: true
function checkSubstring(mainStr: string, subStr: string): void {
    // Using includes()
    const includesResult: boolean = mainStr.includes(subStr);
    console.log(`Using includes(): ${includesResult}`);

    // Using indexOf()
    const index: number = mainStr.indexOf(subStr);
    const indexOfResult: boolean = index !== -1;
    console.log(`Using indexOf(): ${indexOfResult} (found at index ${index})`);

    // Using RegExp
    const regex = new RegExp(subStr);
    const regexResult: boolean = regex.test(mainStr);
    console.log(`Using RegExp: ${regexResult}`);
}

const mainString: string = "Learning TypeScript is fun!";
const substring: string = "TypeScript";

checkSubstring(mainString, substring);
/*
Output:
Using includes(): true
Using indexOf(): true (found at index 9)
Using RegExp: true
*/
