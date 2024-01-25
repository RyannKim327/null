function insertionSort(arr) {
  const len = arr.length;
  
  for (let i = 1; i < len; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentValue;
  }

  return arr;
}
const array = [5, 3, 8, 2, 1, 4];
console.log(insertionSort(array)); // [1, 2, 3, 4, 5, 8]
