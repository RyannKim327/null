function getStringLength(str: string): number {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

// Example usage:
const myString = "Hello, World!";
const length = getStringLength(myString);
console.log(`The length of the string is: ${length}`);
function getStringLength(str: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}
function getStringLength(str: string): number {
    let count = 0;
    let index = 0;
    
    while (true) {
        try {
            str[index]; // Accessing the character at the current index
            count++;
            index++;
        } catch (e) {
            break; // Break the loop when an error occurs (index out of bounds)
        }
    }
    
    return count;
}
