function countOccurrences(str, word) {
    return str.split(word).length - 1;
}

const sentence = "apple banana apple orange apple";
const wordToCount = "apple";

const occurrences = countOccurrences(sentence, wordToCount);
console.log(`The word "${wordToCount}" appears ${occurrences} times in the sentence.`);
