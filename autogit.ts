function findMajorityElement(arr: number[]): number | null {
  let count = 0;
  let candidate: number | null = null;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Verify that the candidate is indeed the majority element
  let majorityCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      majorityCount++;
    }
  }

  return majorityCount > arr.length / 2 ? candidate : null;
}
function findMajorityElement(arr: number[]): number | null {
  const countMap: { [key: number]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    if (!countMap[arr[i]]) {
      countMap[arr[i]] = 1;
    } else {
      countMap[arr[i]]++;
    }
  }

  for (const [key, value] of Object.entries(countMap)) {
    if (value > arr.length / 2) {
      return key;
    }
  }

  return null;
}
function findMajorityElement(arr: number[]): number | null {
  return arr.reduce((acc, current) => {
    acc.count = acc.count === 0 ? 1 : acc.count + (current === acc.candidate ? 1 : -1);
    acc.candidate = current;
    return acc;
  }, { count: 0, candidate: null }).candidate;
}
const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(arr)); // Output: 2
