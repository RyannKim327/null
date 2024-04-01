function countOccurrences(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

var str = "hello world";
var char = "o";
var occurrences = countOccurrences(str, char);

console.log("Number of occurrences of '" + char + "' in '" + str + "': " + occurrences);
