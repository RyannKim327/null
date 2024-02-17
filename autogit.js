function firstRepeatedCharacter(str) {
    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            return char;
        } else {
            charCount[char] = 1;
        }
    }

    return null;
}

// Example
const inputString = 'hello world';
const firstRepeatedChar = firstRepeatedCharacter(inputString);
if (firstRepeatedChar) {
    console.log(`The first repeated character is: '${firstRepeatedChar}'`);
} else {
    console.log('No repeated character found');
}
