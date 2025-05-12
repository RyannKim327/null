function majorityElement(nums: number[]): number | null {
  const countMap = new Map<number, number>();
  const majorityCount = Math.floor(nums.length / 2);

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
    if (countMap.get(num)! > majorityCount) {
      return num;
    }
  }

  return null; // no majority element if none exceeds n/2
}
function majorityElement(nums: number[]): number | null {
  let count = 0;
  let candidate: number | null = null;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  // Optional verification step, if you want to be sure:
  count = nums.filter(x => x === candidate).length;
  return count > Math.floor(nums.length / 2) ? candidate : null;
}
