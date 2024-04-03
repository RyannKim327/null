function countOccurrences(str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    return count;
}

// Testing the function
const testStr = "hello world";
const charToCount = "l";
const result = countOccurrences(testStr, charToCount);
console.log(`The character "${charToCount}" occurs ${result} times in the string "${testStr}".`);
