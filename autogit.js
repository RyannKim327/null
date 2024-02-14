function insertionSort(arr) {
  const length = arr.length;
  
  for (let i = 1; i < length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

// Usage example:
const numbers = [5, 2, 8, 12, 1, 6];
console.log(insertionSort(numbers)); // Output: [1, 2, 5, 6, 8, 12]
