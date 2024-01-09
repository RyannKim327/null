function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
let str = "Hello, World!";
let char = "l";
let occurrences = countOccurrences(str, char);
console.log(`Number of occurrences of "${char}" in "${str}": ${occurrences}`);
// Output: Number of occurrences of "l" in "Hello, World!": 3
