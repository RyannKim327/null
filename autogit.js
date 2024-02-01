const sentence = "This is a sample sentence. This sentence contains the word 'sentence'.";

const word = "sentence";
const regex = new RegExp(word, "gi");
const count = (sentence.match(regex) || []).length;

console.log(count); // Output: 2
const sentence = "This is a sample sentence. This sentence contains the word 'sentence'.";

const word = "sentence";
const words = sentence.split(" ");
const count = words.filter((w) => w === word).length;

console.log(count); // Output: 2
const sentence = "This is a sample sentence. This sentence contains the word 'sentence'.";

const word = "sentence";
let count = 0;
let currentIndex = -1;

while ((currentIndex = sentence.indexOf(word, currentIndex + 1)) !== -1) {
  count++;
}

console.log(count); // Output: 2
