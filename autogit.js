function countCharacter(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

const myString = "Hello, World!";
const character = "l";

console.log(countCharacter(myString, character)); // Output: 3 (since 'l' appears 3 times in the string)
