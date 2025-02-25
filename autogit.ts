function getStringLength(str: string): number {
    let length = 0;
    
    // Iterate through each character in the string
    for (let i = 0; str[i] !== undefined; i++) {
        length++;
    }
    
    return length;
}

// Example usage
const myString = "Hello, World!";
const length = getStringLength(myString);
console.log(`The length of the string is: ${length}`);  // Output: 13
