function reverseWords(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Reverse the order of the words using the reverse method
  const reversedWords = words.reverse();

  // Join the reversed words back into a string
  const reversedString = reversedWords.join(' ');

  return reversedString;
}

const inputString = 'Hello world!';

const reversedString = reverseWords(inputString);
console.log(reversedString); // Output: "world! Hello"
