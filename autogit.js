function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0];
    const smaller = arr.slice(1).filter((element) => element <= pivot);
    const greater = arr.slice(1).filter((element) => element > pivot);
    
    return [...quicksort(smaller), pivot, ...quicksort(greater)];
  }
}

// Example usage:
const array = [7, 2, 10, -5, 4, 8, 0];
console.log(quicksort(array)); // Output: [-5, 0, 2, 4, 7, 8, 10]
