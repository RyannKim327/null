function getStringLength(str) {
  let length = 0;
  while (str[length] !== undefined) {
    length++;
  }
  return length;
}

const myString = "Hello, World!";
const length = getStringLength(myString);
console.log(length); // Output: 13
