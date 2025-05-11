function findMajorityElement(nums: number[]): number | null {
  let count = 0;
  let candidate: number | null = null;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  // Optional validation step to confirm candidate is actually majority
  count = 0;
  for (const num of nums) {
    if (num === candidate) count++;
  }

  if (candidate !== null && count > nums.length / 2) {
    return candidate;
  }

  return null;
}
