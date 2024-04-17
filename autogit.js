function countOccurrences(text, word) {
    let count = 0;
    const words = text.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }
    
    return count;
}

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget consectetur dui. Nam pharetra velit at justo suscipit, eu malesuada sapien ullamcorper. Sed ultricies cursus eros, vel gravida lorem feugiat vel. Nulla facilisi pharetra.";
const word = "consectetur";

const occurrences = countOccurrences(text, word);
console.log(`The word "${word}" occurs ${occurrences} times in the text.`);
