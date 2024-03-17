function reverseStringWords(str) {
    // Split the string into an array of words
    const wordsArray = str.split(' ');

    // Reverse the array
    const reversedArray = wordsArray.reverse();

    // Join the array back into a string
    const reversedString = reversedArray.join(' ');

    return reversedString;
}

const originalString = "Hello world how are you";
const reversedString = reverseStringWords(originalString);

console.log(reversedString); // Output: "you are how world Hello"
