function findMajorityElement(nums: number[]): number | null {
  let majority = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      majority = num;
    }

    if (num === majority) {
      count++;
    } else {
      count--;
    }
  }

  count = 0;
  for (const num of nums) {
    if (num === majority) {
      count++;
    }
  }

  return count > nums.length / 2 ? majority : null;
}
const nums1 = [3, 2, 3];
const nums2 = [2, 2, 1, 1, 1, 2, 2];

console.log(findMajorityElement(nums1)); // Output: 3
console.log(findMajorityElement(nums2)); // Output: 2
