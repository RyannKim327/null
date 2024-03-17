function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(" ");
    
    // Reverse the array
    words.reverse();

    // Join the array back into a string
    return words.join(" ");
}

let originalString = "Hello World";
let reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "World Hello"
