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

function bogoSort(arr: number[]): number[] {
  while (!isSorted(arr)) {
    shuffle(arr);
  }
  return arr;
}

// Example usage:
const myArray = [3, 1, 4, 1, 5];
console.log('Sorted:', bogoSort(myArray));
