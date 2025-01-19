function isArraySortedASC(arr: number[]): boolean {
  return arr.every((val, index) => index === 0 || val >= arr[index - 1]);
}
function isArraySortedASC(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}
function isArraySortedASC(arr: number[]): boolean {
  return arr.reduce((acc, current, index) => acc && (index === 0 || current >= arr[index - 1]), true);
}
const arr = [1, 2, 3, 4, 5];
console.log(isArraySortedASC(arr)); // true

const arr2 = [5, 4, 3, 2, 1];
console.log(isArraySortedASC(arr2)); // false
