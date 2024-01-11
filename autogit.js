function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Usage example
let numbers = [5, 3, 8, 4, 2];
console.log('Before sorting:', numbers);

let sortedNumbers = bubbleSort(numbers);
console.log('After sorting:', sortedNumbers);
