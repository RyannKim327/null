function findFirstRepeatedChar(str) {
    let charSet = new Set();
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charSet.has(char)) {
            return char;
        }
        charSet.add(char);
    }
    
    return null;
}

// Example
const str = 'abcdeab';
const repeatedChar = findFirstRepeatedChar(str);
console.log(repeatedChar); // Output: 'a'
