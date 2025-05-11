function isSorted(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }
  return true;
}

function shuffle(arr: number[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function randomSort(arr: number[]): number[] {
  while (!isSorted(arr)) {
    shuffle(arr);
  }
  return arr;
}

// Example usage:
const arr = [3, 2, 5, 1];
console.log('Sorted:', randomSort(arr));
