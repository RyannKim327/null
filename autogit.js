function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}
const myArray = [9, 5, 1, 4, 3, 2, 8, 7, 6];
console.log(selectionSort(myArray)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
