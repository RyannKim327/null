function getStringLength(str: string): number {
  let count = 0;
  for (const char of str) {
    count++;
  }
  return count;
}

const example = "hello world";
console.log(getStringLength(example));  // Outputs: 11
function recursiveLength(str: string): number {
  if (str === "") return 0;
  return 1 + recursiveLength(str.slice(1));
}

console.log(recursiveLength("hello"));  // Outputs: 5
