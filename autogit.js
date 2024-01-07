function reverseWords(str) {
    // Step 1: Split the string into an array of words
    var wordsArray = str.split(" ");
    
    // Step 2: Reverse the order of words in the array
    var reversedArray = wordsArray.reverse();
    
    // Step 3: Join the reversed array into a single string
    var reversedString = reversedArray.join(" ");
    
    // Return the reversed string
    return reversedString;
}

// Example usage
var originalString = "Hello World! This is a test.";
var reversedString = reverseWords(originalString);
console.log(reversedString);
test. a is This World! Hello
