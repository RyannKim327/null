function getStringLength(str: string): number {
  let count = 0;
  for (const char of str) {
    count++;
  }
  return count;
}

const myString = "Hello, world!";
console.log(getStringLength(myString)); // Outputs: 13
function getStringLength(str: string): number {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
}
