function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Example usage
let str = "hello, world!";
let char = "l";
let charCount = countOccurrences(str, char);
console.log(`The character '${char}' occurs ${charCount} times in the string.`);
