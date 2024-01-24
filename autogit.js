function selectionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]]; // Swap elements
    }
  }

  return arr;
}

// Example usage:
const arr = [8, 5, 2, 9, 1, 7, 3];
console.log(selectionSort(arr)); // [1, 2, 3, 5, 7, 8, 9]
