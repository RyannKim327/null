function findMajorityElement(nums) {
  let majorityIndex = 0;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[majorityIndex]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      majorityIndex = i;
      count = 1;
    }
  }

  return nums[majorityIndex];
}
const nums = [2, 2, 1, 1, 1, 2, 2];
const majorityElement = findMajorityElement(nums);
console.log(majorityElement); // Output: 2
