function countOccurrences(text, word) {
    let count = 0;
    let words = text.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }
    
    return count;
}

let text = "Hello world, hello again";
let word = "hello";
let occurrences = countOccurrences(text, word);

console.log(`The word "${word}" occurs ${occurrences} times in the text.`);
