function bubbleSort(array) {
  const length = array.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}
const numbers = [5, 3, 8, 4, 2];
console.log(bubbleSort(numbers)); // Output: [2, 3, 4, 5, 8]

const strings = ['apple', 'banana', 'carrot'];
console.log(bubbleSort(strings)); // Output: ['apple', 'banana', 'carrot']
