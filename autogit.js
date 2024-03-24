function findFirstRepeatedChar(str) {
    let charSet = new Set();
    
    for (let char of str) {
        if (charSet.has(char)) {
            return char;
        } else {
            charSet.add(char);
        }
    }
    
    return null;  // no repeated character found
}

let str = "abcdefgabc";
let repeatedChar = findFirstRepeatedChar(str);
console.log("First repeated character:", repeatedChar);
