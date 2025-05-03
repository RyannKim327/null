function getStringLength(str: string): number {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}

const example = "Hello, TypeScript!";
console.log(getStringLength(example)); // Outputs: 18
