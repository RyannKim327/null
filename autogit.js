function reverseWords(str) {
    // Split the string into an array of words
    let wordsArr = str.split(' ');

    // Reverse the array
    wordsArr.reverse();

    // Join the array back into a string
    let reversedStr = wordsArr.join(' ');

    return reversedStr;
}

// Test the function
let originalStr = 'Hello world, it is a beautiful day';
let reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: 'day beautiful a is it world, Hello'
