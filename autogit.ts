function stringLength(str: string): number {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

// Example usage
const myString = "Hello, World!";
const length = stringLength(myString);
console.log(length); // Output: 13
