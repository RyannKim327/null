function selectionSort(arr) {
  // your code goes here
}
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // your code goes here
  }
}
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // your code goes here
  }
}
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // your code goes here
  }
}
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
const unsortedArray = [64, 25, 12, 22, 11];
console.log(selectionSort(unsortedArray)); // Output: [11, 12, 22, 25, 64]
