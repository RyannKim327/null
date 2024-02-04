function shellSort(array) {
  var gap = Math.floor(array.length / 2);
  while (gap > 0) { // Gap loop
    for (var i = gap; i < array.length; i++) { // Insertion sort loop
      var temp = array[i];
      for (var j = i; j >= gap && array[j - gap] > temp; j -= gap) { // Compare and swap loop
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return array;
}
var arr = [12, 34, 54, 2, 3];
console.log(shellSort(arr)); // Output: [2, 3, 12, 34, 54]
