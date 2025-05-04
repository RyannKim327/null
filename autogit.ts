function reverseString(input: string): string {
    return input.split('').reverse().join('');
}

// Example usage:
const original = "Hello, world!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!dlrow ,olleH"
function reverseString(input: string): string {
    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    return reversed;
}

// Example usage:
const original = "Hello, world!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!dlrow ,olleH"
function reverseString(input: string): string {
    if (input === "") {
        return "";
    } else {
        return reverseString(input.substr(1)) + input.charAt(0);
    }
}

// Example usage:
const original = "Hello, world!";
const reversed = reverseString(original);
console.log(reversed); // Output: "!dlrow ,olleH"
