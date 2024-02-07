const sentence = "Hello world, hello universe, hello galaxy.";
const word = 'hello';

// Create a regular expression with the word and the "g" flag to search globally
const regex = new RegExp(word, 'gi');

// Use the match() method to find all matches of the word in the sentence and count the occurrences
const count = (sentence.match(regex) || []).length;

console.log(`The word "${word}" occurs ${count} times in the sentence.`);
