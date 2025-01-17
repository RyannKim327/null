function findMajorityElement(arr: number[]): number | undefined {
  const count: { [key: number]: number } = {};
  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  for (const num in count) {
    if (count[num] > arr.length / 2) {
      return parseInt(num, 10);
    }
  }
  return undefined;
}
function findMajorityElement(arr: number[]): number | undefined {
  let candidate: number | undefined;
  let count = 0;
  for (const num of arr) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}
function findMajorityElement(arr: number[]): number | undefined {
  return arr.reduce((a, b) => (a[0] === b ? [a[0], a[1] + 1] : [b, 1]), [arr[0], 1])[0];
}
const arr = [1, 2, 3, 4, 5, 5, 5, 5, 5];
console.log(findMajorityElement(arr)); // Output: 5
