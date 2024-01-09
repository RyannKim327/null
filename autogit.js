function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const greater = [];
  
  for (const element of arr) {
    if (element < pivot) {
      less.push(element);
    } else if (element > pivot) {
      greater.push(element);
    }
  }
  
  return [...quicksort(less), pivot, ...quicksort(greater)];
}
const unsortedArray = [5, 2, 9, 1, 3, 6, 8, 7, 4];
const sortedArray = quicksort(unsortedArray);

console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
