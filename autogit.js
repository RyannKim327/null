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
var char = "l";
var occurrences = countOccurrences(str, char);
console.log("Occurrences of '" + char + "' in '" + str + "': " + occurrences); // Output: Occurrences of 'l' in 'hello world': 3
