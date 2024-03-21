function getStringLength(str) {
    var length = 0;
    while (str[length] !== undefined) {
        length++;
    }
    return length;
}

var myString = "Hello, World!";
var length = getStringLength(myString);
console.log(length); // Output: 13
