function getStringLength(str) {
    var count = 0;
    var index = 0;
    while (str[index] !== undefined) {
        count++;
        index++;
    }
    return count;
}

var myString = "Hello, World!";
console.log(getStringLength(myString));  // Output: 13
