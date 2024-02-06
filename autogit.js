function countOccurrences(string, word) {
  // Split the string into an array of words
  let words = string.split(" ");

  // Use the filter() method to create a new array with only the occurrences of the word
  let occurrences = words.filter((w) => w === word);

  // Return the length of the new array
  return occurrences.length;
}

// Example usage
let str = "Hello, hello, hello, world!";
let count = countOccurrences(str, "hello");
console.log(count); // Output: 3
function countOccurrences(string, word) {
  // Create a regular expression with the word and 'g' flag for global search
  let regex = new RegExp(word, "g");

  // Use the match() method to get an array of all occurrences of the word
  let occurrences = string.match(regex);

  // Return the length of the array
  return occurrences ? occurrences.length : 0;
}

// Example usage
let str = "Hello, hello, hello, world!";
let count = countOccurrences(str, "hello");
console.log(count); // Output: 3
function countOccurrences(string, word) {
  let occurrences = 0;
  let index = 0;

  // Loop through the string while there are occurrences of the word
  while ((index = string.indexOf(word, index)) !== -1) {
    occurrences++;
    index += word.length;
  }

  return occurrences;
}

// Example usage
let str = "Hello, hello, hello, world!";
let count = countOccurrences(str, "hello");
console.log(count); // Output: 3
