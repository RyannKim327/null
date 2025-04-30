function majorityElement(nums: number[]): number | null {
  let count = 0;
  let candidate: number | null = null;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  // Optional: Verify candidate is actually the majority
  if (candidate !== null) {
    const occurrence = nums.filter(x => x === candidate).length;
    if (occurrence > nums.length / 2) {
      return candidate;
    }
  }

  return null; // No majority element found
}
