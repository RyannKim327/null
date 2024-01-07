function reverseWords(str) {
   // Step 1: Split the string into an array of words
   const wordsArray = str.split(' ');

   // Step 2: Reverse the order of the array
   const reversedArray = wordsArray.reverse();

   // Step 3: Join the reversed array back into a string
   const reversedString = reversedArray.join(' ');

   return reversedString;
}

// Example usage
const inputString = "Hello world, how are you?";
const reversedWordsString = reverseWords(inputString);
console.log(reversedWordsString);
you? are how world, Hello
