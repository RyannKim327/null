function selectionSort(array) {
  var minIndex, temp;

  for (var i = 0; i < array.length - 1; i++) {
    minIndex = i;

    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}
var numbers = [4, 2, 7, 1, 3];
var sortedNumbers = selectionSort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 7]
