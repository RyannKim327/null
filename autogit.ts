function getStringLength(str: string): number {
    let length: number = 0;
    for (let char of str) {
        length++;
    }
    return length;
}

// Example usage
const exampleString = "Hello, World!";
const lengthOfString = getStringLength(exampleString);
console.log(lengthOfString); // Output: 13
