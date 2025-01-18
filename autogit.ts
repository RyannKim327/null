function interpolationSearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) return low;
      return -1;
    }

    let probe =
      low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

    if (arr[probe] === target) return probe;

    if (arr[probe] < target) low = probe + 1;
    else high = probe - 1;
  }

  return -1; // not found
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const index = interpolationSearch(arr, target);
console.log(index); // outputs 4
