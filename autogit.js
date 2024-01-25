function getStringLength(str) {
  let count = 0;
  let index = 0;

  while (str[index] !== undefined) {
    count++;
    index++;
  }

  return count;
}
let myString = "Hello, world!";
let length = getStringLength(myString);
console.log(length); // Output: 13
