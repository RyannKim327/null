function bubbleSort(arr) {
  // Bubble sort logic goes here
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Bubble sort logic goes here
  }
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Compare adjacent elements and swap if necessary
    }
  }
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  
  return arr;
}
let array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array)); // Output: [ 11, 12, 22, 25, 34, 64, 90 ]
