function reverseString(str) {
    // Step 1: Convert the string to an array
    var arr = str.split('');

    // Step 2: Reverse the array
    var reversedArr = arr.reverse();

    // Step 3: Convert the array back to a string
    var reversedStr = reversedArr.join('');

    return reversedStr;
}

var originalStr = "Hello, World!";
var reversedStr = reverseString(originalStr);

console.log(reversedStr); // Output: "!dlroW ,olleH"
