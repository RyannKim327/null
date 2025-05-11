function oddEvenSort(arr: number[]): number[] {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    // Odd indexed elements
    for (let i = 1; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }

    // Even indexed elements
    for (let i = 0; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }

  return arr;
}

// Example usage:
const randomArray = [5, 3, 8, 4, 2, 7, 1, 6];
console.log("Sorted array:", oddEvenSort(randomArray));
