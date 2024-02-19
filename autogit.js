function reverseWords(str) {
    // Split the string into an array of words
    var words = str.split(' ');

    // Reverse the array
    words = words.reverse();

    // Join the array back into a string
    var reversedString = words.join(' ');

    return reversedString;
}

var originalString = "Hello world this is a test";
var reversedString = reverseWords(originalString);

console.log(reversedString); // Output: "test a is this world Hello"
