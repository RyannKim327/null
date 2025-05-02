function isSorted(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

function randomShuffle(arr: number[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function randomSort(arr: number[]): number[] {
  const arrayCopy = [...arr];
  let attempts = 0;
  while (!isSorted(arrayCopy)) {
    randomShuffle(arrayCopy);
    attempts++;
  }
  console.log(`Sorted after ${attempts} shuffles`);
  return arrayCopy;
}

// Example usage
const unsorted = [3, 1, 4, 2];
const sorted = randomSort(unsorted);
console.log(sorted);
