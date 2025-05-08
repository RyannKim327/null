function isSortedAscending(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isSortedAscending([1, 2, 2, 4, 5]));  // true
console.log(isSortedAscending([1, 3, 2]));        // false
function isSortedAscendingGeneric<T>(arr: T[], compare: (a: T, b: T) => number): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (compare(arr[i], arr[i + 1]) > 0) {
      return false;
    }
  }
  return true;
}
console.log(isSortedAscendingGeneric(['apple', 'banana', 'carrot'], (a, b) => a.localeCompare(b)));  // true
console.log(isSortedAscendingGeneric(['banana', 'apple'], (a, b) => a.localeCompare(b)));           // false
