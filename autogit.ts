function getStringLength(str: string): number {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
}

const example = "Hello, world!";
console.log(getStringLength(example));  // Output: 13
