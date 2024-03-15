function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

const originalString = "Hello world, this is a test";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "test a is this world, Hello"
