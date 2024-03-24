function countCharOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Example usage
const str = "Hello, World!";
const char = "l";
const count = countCharOccurrences(str, char);
console.log(`The character "${char}" occurs ${count} times in the string "${str}".`);
