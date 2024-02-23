function countOccurrences(text, character) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === character) {
            count++;
        }
    }
    return count;
}

let str = "hello world";
let char = "o";
let occurrences = countOccurrences(str, char);
console.log(`The character "${char}" occurs ${occurrences} times in the string "${str}".`);
