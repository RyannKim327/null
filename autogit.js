function findStringLength(str) {
    var count = 0;
    for (var i = 0; str[i] !== undefined; i++) {
        count++;
    }
    return count;
}

var myString = "Hello, World!";
var length = findStringLength(myString);
console.log(length); // Outputs: 13
