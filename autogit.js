function findFirstNonRepeatingChar(str) {
    // logic goes here
}
    var charCount = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
function findFirstNonRepeatingChar(str) {
    var charCount = {};

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}
var str = "aabbcde";
var result = findFirstNonRepeatingChar(str);
console.log(result); // Output: "c"
