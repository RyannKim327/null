function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

let str = "hello world";
let char = "o";
let occurrences = countOccurrences(str, char);

console.log(`The character "${char}" occurs ${occurrences} times in the string "${str}".`);
