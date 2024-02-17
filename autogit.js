function findFirstRepeatedChar(str) {
    var charMap = {};
    
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        
        if (charMap[char]) {
            return char;
        } else {
            charMap[char] = 1;
        }
    }

    return null;
}

var str = "aabbccddeeff";
var firstRepeatedChar = findFirstRepeatedChar(str);
console.log("First repeated character in the string is:", firstRepeatedChar);
