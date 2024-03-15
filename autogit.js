function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

// Example
const sentence = "Hello, how are you?";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence);  // Output: "you? are how Hello,"
