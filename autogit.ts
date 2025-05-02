function stringLength(input: string): number {
    let count = 0;
    
    // Loop through each character in the string
    for (let char of input) {
        count++;
    }

    return count;
}

// Example usage:
const myString = "Hello, world!";
const lengthOfMyString = stringLength(myString);
console.log(`Length of the string: ${lengthOfMyString}`); // Output: 13
