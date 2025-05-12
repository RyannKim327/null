function isSortedAscending(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Example usage
console.log(isSortedAscending([1, 2, 2, 3])); // true
console.log(isSortedAscending([3, 2, 1]));    // false
function isSortedAscending(arr: number[]): boolean {
  return arr.every((value, index) => index === 0 || arr[index - 1] <= value);
}
