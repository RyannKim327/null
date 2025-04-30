function majorityElement(nums: number[]): number | null {
  const counts: { [key: number]: number } = {};
  const majorityCount = Math.floor(nums.length / 2) + 1;

  for (const num of nums) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] >= majorityCount) {
      return num;
    }
  }

  return null;  // no majority element found
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

  // Optionally, verify candidate is actually a majority
  count = 0;
  for (const num of nums) {
    if (num === candidate) count++;
  }

  return count > Math.floor(nums.length / 2) ? candidate : null;
}
