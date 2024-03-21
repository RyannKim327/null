function getStringLength(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}

var str = "Hello, World!";
var length = getStringLength(str);
console.log(length); // Output: 13
