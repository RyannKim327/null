function reverseString(str) {
    // Step 1: Convert the string to an array
    var strArray = str.split('');
    
    // Step 2: Reverse the order of the elements in the array
    var reversedArray = strArray.reverse();
    
    // Step 3: Join the elements back together to form a reversed string
    var reversedStr = reversedArray.join('');
    
    return reversedStr;
}

// Test the function
var originalStr = "Hello, World!";
var reversedStr = reverseString(originalStr);

console.log("Original string: " + originalStr);
console.log("Reversed string: " + reversedStr);
Original string: Hello, World!
Reversed string: !dlroW ,olleH
