function findFirstRepeatedChar(str) {
    const charMap = {};
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (charMap[char]) {
            return char;
        }

        charMap[char] = true;
    }
    
    return null;
}

const str = "hello";
const repeatedChar = findFirstRepeatedChar(str);

if (repeatedChar) {
    console.log(`The first repeated character in "${str}" is "${repeatedChar}".`);
} else {
    console.log(`No repeated characters found in "${str}".`);
}
