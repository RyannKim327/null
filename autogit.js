function reverseWords(str) {
    // Split the string into an array of words
    let wordsArray = str.split(" ");

    // Reverse the array of words
    let reversedArray = wordsArray.reverse();

    // Join the array back into a string
    let reversedString = reversedArray.join(" ");

    return reversedString;
}

let originalString = "Hello World, how are you?";
let reversedString = reverseWords(originalString);

console.log(reversedString); // Output: "you? are how World, Hello"
