function isSorted(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function shuffleArray(arr: number[]): number[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function bogosort(arr: number[]): number[] {
  let attempts = 0;
  while (!isSorted(arr)) {
    shuffleArray(arr);
    attempts++;
    if (attempts > 1000000) { // prevent infinite loop in case of very large array
      console.warn("Too many attempts, stopping...");
      break;
    }
  }
  return arr;
}

// Example usage
const arrayToSort = [3, 1, 4, 2, 5];
const sortedArray = bogosort([...arrayToSort]);
console.log("Original array:", arrayToSort);
console.log("Sorted array:", sortedArray);
