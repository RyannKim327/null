function getStringLength(str) {
  let count = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }
  return count;
}

const myString = "Hello, World!";
const stringLength = getStringLength(myString);
console.log(stringLength); // Outputs: 13
