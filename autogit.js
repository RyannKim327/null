function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

const input = "Hello world!";
const reversed = reverseWords(input);
console.log(reversed); // Output: "world! Hello"
