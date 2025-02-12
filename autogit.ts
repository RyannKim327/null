function getStringLength(str: string): number {
    let length = 0;
    
    for (let char of str) {
        length++;
    }
    
    return length;
}

// Example usage:
const myString = "Hello, World!";
const lengthOfMyString = getStringLength(myString);
console.log(lengthOfMyString); // Output: 13
