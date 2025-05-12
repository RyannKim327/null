function getStringLength(str: string): number {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

// Example usage:
const myStr = "Hello, world!";
console.log(getStringLength(myStr));  // Output: 13
