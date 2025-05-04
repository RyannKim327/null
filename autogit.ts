function getStringLength(str: string): number {
  let count = 0;
  for (const _ of str) {
    count++;
  }
  return count;
}

const example = "hello world";
console.log(getStringLength(example)); // Outputs: 11
function getStringLength(str: string): number {
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
}
