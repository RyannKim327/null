function findSecondLargest(arr: number[]): number | undefined {
  if (arr.length < 2) {
    return undefined; // Or handle as per your needs
  }

  let first = -Infinity;
  let second = -Infinity;

  for (const num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second === -Infinity ? undefined : second;
}
