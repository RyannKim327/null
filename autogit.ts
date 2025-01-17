function insertionSort(arr: number[]): void {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
}

// Example usage:
let arr = [5, 2, 8, 3, 1, 4];
insertionSort(arr);
console.log(arr); // [1, 2, 3, 4, 5, 8]
function insertionSort(arr: number[]): number[] {
  const sortedArr = [...arr]; // clone the original array
  for (let i = 1; i < sortedArr.length; i++) {
    let key = sortedArr[i];
    let j = i - 1;

    while (j >= 0 && sortedArr[j] > key) {
      sortedArr[j + 1] = sortedArr[j];
      j--;
    }

    sortedArr[j + 1] = key;
  }
  return sortedArr;
}
