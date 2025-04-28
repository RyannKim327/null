function isArraySortedAsc(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false; // Found a pair out of order
    }
  }
  return true; // All pairs are in order
}
function isArraySortedAsc(arr: number[]): boolean {
  return arr.every((value, index) => {
    if (index === 0) return true;
    return value >= arr[index - 1];
  });
}
function isArraySortedAsc<T>(arr: T[], compare: (a: T, b: T) => number = (a, b) => a > b ? 1 : a < b ? -1 : 0): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (compare(arr[i - 1], arr[i]) > 0) {
      return false;
    }
  }
  return true;
}
