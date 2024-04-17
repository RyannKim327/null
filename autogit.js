function reverseString(str) {
    // Convert the string to an array of characters
    var arr = str.split("");
    
    // Reverse the array
    var reversedArr = arr.reverse();
    
    // Join the characters back together to create a new string
    var reversedStr = reversedArr.join("");
    
    return reversedStr;
}

// Example usage
var originalStr = "Hello, World!";
var reversedStr = reverseString(originalStr);
console.log(reversedStr); // Outputs: "!dlroW ,olleH"
