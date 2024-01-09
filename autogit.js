function bubbleSort(array) {
  let swapped;
  
  do {
    swapped = false;
  
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        // Swap elements
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  
  return array;
}
const array = [5, 2, 8, 12, 1, 6];
console.log(bubbleSort(array));
