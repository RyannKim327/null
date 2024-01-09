function reverseWords(str) {
    // Step 1: Split the string into an array of words
    let words = str.split(' ');

    // Step 2: Reverse the order of the array elements
    words.reverse();

    // Step 3: Join the array elements back into a string
    let reversedStr = words.join(' ');

    return reversedStr;
}

// Example usage
let input = 'Hello world! This is a test.';
let reversed = reverseWords(input);

console.log(reversed);
// Output: 'test. a is This world! Hello'
