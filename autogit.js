function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(" ");
    
    // Reverse the array
    let reversedWords = words.reverse();
    
    // Join the array back into a string
    let reversedStr = reversedWords.join(" ");
    
    return reversedStr;
}

let originalStr = "Hello World Javascript";
let reversedStr = reverseWords(originalStr);

console.log(reversedStr); // Output: "Javascript World Hello"
