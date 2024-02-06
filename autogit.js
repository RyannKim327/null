function findStringLength(str) {
  let count = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }
  return count;
}
const myString = "Hello, World!";
const length = findStringLength(myString);
console.log(length); // Output: 13
