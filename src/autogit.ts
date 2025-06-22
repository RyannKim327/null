function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Example Usage:
const original = "TypeScript";
const reversed = reverseString(original);
console.log(reversed); // Output: tpircSepyT
function reverseString(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example Usage:
const original = "Hello";
const reversed = reverseString(original);
console.log(reversed); // Output: olleH
function reverseString(str: string): string {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

// Example Usage:
const original = "Recursion";
const reversed = reverseString(original);
console.log(reversed); // Output: noisruceR
function reverseString(str: string): string {
    return [...str].reverse().join('');
}

// Example Usage:
const original = "ES6";
const reversed = reverseString(original);
console.log(reversed); // Output: 6SE
function reverseStringUnicode(str: string): string {
    return Array.from(str).reverse().join('');
}

// Example Usage:
const original = "😊 TypeScript 💻";
const reversed = reverseStringUnicode(original);
console.log(reversed); // Output: 💻 tpircSeyT 😊
// Method 1: Using Built-in Methods
function reverseWithBuiltIn(str: string): string {
    return str.split('').reverse().join('');
}

// Method 2: Using a for Loop
function reverseWithLoop(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Method 3: Using Recursion
function reverseWithRecursion(str: string): string {
    if (str === "") {
        return "";
    } else {
        return reverseWithRecursion(str.substr(1)) + str.charAt(0);
    }
}

// Method 4: Using ES6 Spread Operator
function reverseWithSpread(str: string): string {
    return [...str].reverse().join('');
}

// Method 5: Handling Unicode with Array.from
function reverseWithUnicode(str: string): string {
    return Array.from(str).reverse().join('');
}

// Example Usage:
const original = "🌍 TypeScript 🚀";

console.log("Original:", original);
console.log("Reversed (Built-in):", reverseWithBuiltIn(original));
console.log("Reversed (Loop):", reverseWithLoop(original));
console.log("Reversed (Recursion):", reverseWithRecursion(original));
console.log("Reversed (Spread):", reverseWithSpread(original));
console.log("Reversed (Unicode):", reverseWithUnicode(original));

/*
Output:
Original: 🌍 TypeScript 🚀
Reversed (Built-in): 🚀 tpircSeyT 🌍
Reversed (Loop): 🚀 tpircSeyT 🌍
Reversed (Recursion): 🚀 tpircSeyT 🌍
Reversed (Spread): 🚀 tpircSeyT 🌍
Reversed (Unicode): 🚀 tpircSeyT 🌍
*/
