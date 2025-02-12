function getStringLength(str: string): number {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

// Example usage:
const myString = "Hello, TypeScript!";
const length = getStringLength(myString);
console.log(length); // Output: 18
function getStringLength(str: string): number {
    let count = 0;
    let index = 0;

    while (str[index] !== undefined) {
        count++;
        index++;
    }

    return count;
}

// Example usage:
const myString = "Hello, TypeScript!";
const length = getStringLength(myString);
console.log(length); // Output: 18
function getStringLength(str: string): number {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count++;
    }

    return count;
}

// Example usage:
const myString = "Hello, TypeScript!";
const length = getStringLength(myString);
console.log(length); // Output: 18
