function reverseString(str) {
    // Step 1: Convert string to array
    var arr = str.split("");

    // Step 2: Reverse the array
    var reversedArr = arr.reverse();

    // Step 3: Join the array back to a string
    var reversedStr = reversedArr.join("");

    return reversedStr;
}

// Pass the string you want to reverse to the function
var originalStr = "Hello, World!";
var reversedStr = reverseString(originalStr);

console.log(reversedStr); // Output: "!dlroW ,olleH"
