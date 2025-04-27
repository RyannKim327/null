function isSortedAscending<T>(arr: T[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isSortedAscending([1, 2, 3, 4, 5])); // true
console.log(isSortedAscending([1, 3, 2, 4]));    // false
function isSortedAscending<T>(arr: T[]): boolean {
  return arr.every((value, index) => index === 0 || arr[index - 1] <= value);
}
