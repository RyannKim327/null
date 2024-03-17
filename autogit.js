function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

let originalString = "Hello, world!";
let reversedString = reverseWords(originalString);

console.log(reversedString); // Output: "world! Hello,"
