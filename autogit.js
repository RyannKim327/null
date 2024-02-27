function getLength(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}

const str = 'Hello, world!';
const length = getLength(str);
console.log(length); // Output: 13
