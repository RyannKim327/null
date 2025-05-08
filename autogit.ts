function majorityElement(nums: number[]): number | null {
  let count = 0;
  let candidate: number | null = null;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Optional step: Verify that candidate actually appears more than n/2 times
  if (candidate !== null) {
    const occurrence = nums.filter(num => num === candidate).length;
    if (occurrence > nums.length / 2) {
      return candidate;
    }
  }

  return null; // no majority element found
}
const array = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(array)); // Output: 2
