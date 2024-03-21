function countOccurrence(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Usage
const str = "hello world";
const char = "o";
const occurrence = countOccurrence(str, char);

console.log(`The character "${char}" occurred ${occurrence} times in the string "${str}".`);
