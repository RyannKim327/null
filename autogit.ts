function isSortedAscending(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isSortedAscending([1, 2, 2, 4, 5])); // true
console.log(isSortedAscending([1, 3, 2, 4]));     // false
