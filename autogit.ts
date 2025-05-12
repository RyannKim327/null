function isSortedAsc(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isSortedAsc([1, 2, 2, 4, 5])); // true
console.log(isSortedAsc([1, 3, 2, 4]));    // false
console.log(isSortedAsc([]));               // true (empty array considered sorted)
console.log(isSortedAsc([10]));             // true (single element array considered sorted)
function isSortedAsc(arr: number[]): boolean {
  return arr.every((value, index) => index === 0 || arr[index - 1] <= value);
}
