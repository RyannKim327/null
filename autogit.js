function countOccurrences(str, char) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    
    return count;
}

let myString = "Hello, World!";
let charToCount = "l";
let occurrences = countOccurrences(myString, charToCount);

console.log(`The character "${charToCount}" occurs ${occurrences} times in the string.`);
