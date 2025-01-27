const reversedString = str.split("").reverse().join("");
const originalString = "hello";
const reversedString = originalString.split("").reverse().join("");
console.log(reversedString); // Output: "olleh"
const reversedString = [...str].reverse().join("");
const reversedString = str.split("").reduce((acc, char) => char + acc, "");
