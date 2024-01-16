function findStringLength(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}

const myString = "Hello, world!";
const length = findStringLength(myString);
console.log(length); // Output: 13
