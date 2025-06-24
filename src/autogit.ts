str.includes(searchString, position?)
const mainStr: string = "Hello, world!";
const subStr: string = "world";

const hasSubStr: boolean = mainStr.includes(subStr);

console.log(hasSubStr); // Output: true
const mainStr: string = "Hello, World!";
const subStr: string = "world";

const hasSubStr: boolean = mainStr.toLowerCase().includes(subStr.toLowerCase());

console.log(hasSubStr); // Output: true
str.indexOf(searchValue, fromIndex?)
const mainStr: string = "Hello, world!";
const subStr: string = "world";

const index: number = mainStr.indexOf(subStr);

const hasSubStr: boolean = index !== -1;

console.log(hasSubStr); // Output: true
const mainStr: string = "Hello, World!";
const subStr: string = "world";

const index: number = mainStr.toLowerCase().indexOf(subStr.toLowerCase());

const hasSubStr: boolean = index !== -1;

console.log(hasSubStr); // Output: true
const mainStr: string = "Hello, world!";
const pattern: RegExp = /world/;

const hasSubStr: boolean = pattern.test(mainStr);

console.log(hasSubStr); // Output: true
const mainStr: string = "Hello, world!";
const subStr: string = "world";

// Escape special characters in subStr if necessary
const escapedSubStr: string = subStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const pattern: RegExp = new RegExp(escapedSubStr);

const hasSubStr: boolean = pattern.test(mainStr);

console.log(hasSubStr); // Output: true
const mainStr: string = "Hello, World!";
const subStr: string = "world";

const pattern: RegExp = new RegExp(subStr, 'i');

const hasSubStr: boolean = pattern.test(mainStr);

console.log(hasSubStr); // Output: true
function checkSubstring(mainStr: string, subStr: string): void {
    // Using includes()
    const hasIncludes: boolean = mainStr.includes(subStr);
    console.log(`Using includes(): ${hasIncludes}`);

    // Using indexOf()
    const hasIndexOf: boolean = mainStr.indexOf(subStr) !== -1;
    console.log(`Using indexOf(): ${hasIndexOf}`);

    // Using RegExp
    const pattern: RegExp = new RegExp(subStr, 'i'); // Case-insensitive
    const hasRegExp: boolean = pattern.test(mainStr);
    console.log(`Using RegExp: ${hasRegExp}`);
}

const mainStr: string = "TypeScript is awesome!";
const subStr: string = "script";

checkSubstring(mainStr, subStr);
Using includes(): false
Using indexOf(): false
Using RegExp: true
