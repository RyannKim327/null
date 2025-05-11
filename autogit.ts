function isSortedAscending(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isSortedAscending([1, 2, 3, 4])); // true
console.log(isSortedAscending([1, 3, 2, 4])); // false
function isSortedAscending(arr: number[]): boolean {
  return arr.every((val, i) => i === 0 || arr[i - 1] <= val);
}
