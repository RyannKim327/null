function getStringLength(str) {
  let length = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    length++;
  }
  return length;
}
const myString = "Hello, world!";
const length = getStringLength(myString);
console.log(length);  // Output: 13
