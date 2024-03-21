function countOccurrences(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

var myString = "Hello, World!";
var charToCount = "o";
var occurrences = countOccurrences(myString, charToCount);

console.log("The character '" + charToCount + "' occurs " + occurrences + " times in the string.");
