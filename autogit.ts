function isSorted(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
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
  const result = [...arr];
  while (!isSorted(result)) {
    shuffle(result);
  }
  return result;
}

// Example usage:
const nums = [3, 1, 4, 1, 5];
console.log('Before:', nums);
console.log('After randomSort:', randomSort(nums));
