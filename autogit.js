function calculateStringLength(string) {
  let count = 0;
  for (let i = 0; string[i] !== undefined; i++) {
    count++;
  }
  return count;
}

const str = "Hello, world!";
const length = calculateStringLength(str);
console.log(length); // Output: 13
