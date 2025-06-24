function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Usage
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSpuT ,olleH"
function reverseString(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Usage
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSpuT ,olleH"
function reverseString(str: string): string {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str[0];
    }
}

// Usage
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSpuT ,olleH"
function reverseString(str: string): string {
    return [...str].reduce((acc, char) => char + acc, '');
}

// Usage
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSpuT ,olleH"
function reverseString(str: string): string {
    return Array.from(str).reverse().join('');
}

// Usage
const original = "Hello, 🌍!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!🌍 ,olleH"
function reverseWithBuiltInMethods(str: string): string {
    return str.split('').reverse().join('');
}

function reverseWithLoop(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function reverseWithRecursion(str: string): string {
    if (str === "") {
        return "";
    } else {
        return reverseWithRecursion(str.substr(1)) + str[0];
    }
}

function reverseWithReduce(str: string): string {
    return [...str].reduce((acc, char) => char + acc, '');
}

function reverseWithArrayFrom(str: string): string {
    return Array.from(str).reverse().join('');
}

// Usage
const original = "Hello, 🌍!";

console.log(reverseWithBuiltInMethods(original)); // Output: "!🌍 ,olleH"
console.log(reverseWithLoop(original));          // Output: "!🌍 ,olleH"
console.log(reverseWithRecursion(original));     // Output: "!🌍 ,olleH"
console.log(reverseWithReduce(original));        // Output: "!🌍 ,olleH"
console.log(reverseWithArrayFrom(original));     // Output: "!🌍 ,olleH"
