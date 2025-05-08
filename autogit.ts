function isSortedAscending(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
const nums = [1, 2, 2, 4, 5];
console.log(isSortedAscending(nums)); // true

const nums2 = [1, 3, 2, 4];
console.log(isSortedAscending(nums2)); // false
function isSortedAscending(arr: number[]): boolean {
  return arr.every((val, i) => i === 0 || arr[i - 1] <= val);
}
