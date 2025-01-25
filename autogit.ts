function selectionSort(arr: number[]): void {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}
const arr = [5, 2, 8, 3, 1, 6, 4];
selectionSort(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 8]
function selectionSort(arr: number[]): number[] {
  const sortedArr = [...arr];
  const len = sortedArr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (sortedArr[j] < sortedArr[minIndex]) {
        minIndex = j;
      }
    }
    [sortedArr[i], sortedArr[minIndex]] = [sortedArr[minIndex], sortedArr[i]];
  }
  return sortedArr;
}
const arr = [5, 2, 8, 3, 1, 6, 4];
const sortedArr = selectionSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 8]
console.log(arr); // [5, 2, 8, 3, 1, 6, 4] (original array is preserved)
