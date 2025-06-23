function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Usage
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

// Usage
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSyeT ,olleH"
function reverseString(str: string): string {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

// Usage
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSyeT ,olleH"
function reverseString(str: string): string {
    return [...str].reverse().join('');
}

// Usage
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSyeT ,olleH"
function reverseString(str: string): string {
    return Array.from(str).reverse().join('');
}

// Usage
const original = "Hello, 🌍!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!🌍 ,olleH"
// Method 1: Using split, reverse, join
function reverseStringBuiltIn(str: string): string {
    return str.split('').reverse().join('');
}

// Method 2: Using a for loop
function reverseStringLoop(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Method 3: Using recursion
function reverseStringRecursive(str: string): string {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}

// Method 4: Using ES6 spread operator
function reverseStringSpread(str: string): string {
    return [...str].reverse().join('');
}

// Method 5: Using Array.from for Unicode support
function reverseStringUnicode(str: string): string {
    return Array.from(str).reverse().join('');
}

// Usage
const original = "Hello, 🌍!";

console.log(reverseStringBuiltIn(original));     // Output: "!🌍 ,olleH"
console.log(reverseStringLoop(original));        // Output: "!🌍 ,olleH"
console.log(reverseStringRecursive(original));   // Output: "!🌍 ,olleH"
console.log(reverseStringSpread(original));      // Output: "!🌍 ,olleH"
console.log(reverseStringUnicode(original));     // Output: "!🌍 ,olleH"
