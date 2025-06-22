function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Example Usage:
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSyeT ,olleH"
function reverseString(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example Usage:
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSyeT ,olleH"
function reverseString(str: string): string {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str[0];
    }
}

// Example Usage:
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSyeT ,olleH"
function reverseString(str: string): string {
    return [...str].reverse().join('');
}

// Example Usage:
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSyeT ,olleH"
function reverseStringUnicodeSafe(str: string): string {
    return Array.from(str).reverse().join('');
}

// Example Usage:
const original = "Hello, 🌍!";
const reversed = reverseStringUnicodeSafe(original);
console.log(reversed); // Output: "!🌍 ,olleH"
// Method 1: Using split, reverse, join
function reverseWithBuiltIn(str: string): string {
    return str.split('').reverse().join('');
}

// Method 2: Using a for loop
function reverseWithLoop(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Method 3: Using recursion
function reverseWithRecursion(str: string): string {
    if (str === "") {
        return "";
    } else {
        return reverseWithRecursion(str.substr(1)) + str[0];
    }
}

// Method 4: Using ES6 spread operator
function reverseWithSpread(str: string): string {
    return [...str].reverse().join('');
}

// Method 5: Unicode safe reversal
function reverseUnicodeSafe(str: string): string {
    return Array.from(str).reverse().join('');
}

// Example Usage:
const original = "Hello, 🌍!";

console.log(reverseWithBuiltIn(original));      // Output: "!🌍 ,olleH"
console.log(reverseWithLoop(original));         // Output: "!🌍 ,olleH"
console.log(reverseWithRecursion(original));    // Output: "!🌍 ,olleH"
console.log(reverseWithSpread(original));       // Output: "!🌍 ,olleH"
console.log(reverseUnicodeSafe(original));      // Output: "!🌍 ,olleH"
