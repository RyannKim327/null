function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function bogoSort(arr) {
  while (!isSorted(arr)) {
    arr = shuffleArray(arr);
  }
  return arr;
}

// Usage example:
const unsortedArray = [5, 2, 9, 1, 3];
const sortedArray = bogoSort(unsortedArray);
console.log(sortedArray);
