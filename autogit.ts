function getStringLength(str: string): number {
  let count = 0;
  while (true) {
    if (str[count] === undefined) {
      break;
    }
    count++;
  }
  return count;
}

// Example:
console.log(getStringLength("hello")); // Output: 5
