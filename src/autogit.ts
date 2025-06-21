function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Example usage:
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

// Example usage:
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSyeT ,olleH"
function reverseString(str: string): string {
    if (str.length <= 1) {
        return str;
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}

// Example usage:
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSyeT ,olleH"
function reverseString(str: string): string {
    return [...str].reverse().join('');
}

// Example usage:
const original = "Hello, TypeScript!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!tpircSyeT ,olleH"
function reverseStringUnicodeSafe(str: string): string {
    return Array.from(str).reverse().join('');
}

// Example usage:
const original = "Hello, 🌍!";
const reversed = reverseStringUnicodeSafe(original);
console.log(reversed); // Output: "!🌍 ,olleH"
function reverseStringSplitReverseJoin(str: string): string {
    return str.split('').reverse().join('');
}

function reverseStringForLoop(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function reverseStringRecursion(str: string): string {
    if (str.length <= 1) return str;
    return reverseStringRecursion(str.substr(1)) + str.charAt(0);
}

function reverseStringSpreadOperator(str: string): string {
    return [...str].reverse().join('');
}

function reverseStringUnicodeSafe(str: string): string {
    return Array.from(str).reverse().join('');
}

// Example usage:
const original = "Hello, 🌍!";

console.log(reverseStringSplitReverseJoin(original));      // Output: "!🌍 ,olleH"
console.log(reverseStringForLoop(original));             // Output: "!🌍 ,olleH"
console.log(reverseStringRecursion(original));           // Output: "!🌍 ,olleH"
console.log(reverseStringSpreadOperator(original));      // Output: "!🌍 ,olleH"
console.log(reverseStringUnicodeSafe(original));         // Output: "!🌍 ,olleH"
