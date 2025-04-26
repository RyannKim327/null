function isSortedAscending(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
function isSortedAscending(arr: number[]): boolean {
  return arr.every((value, index) => {
    if (index === 0) return true;
    return arr[index - 1] <= value;
  });
}
const nums = [1, 2, 3, 4, 5];
console.log(isSortedAscending(nums)); // true

const mixed = [1, 3, 2, 4];
console.log(isSortedAscending(mixed)); // false
