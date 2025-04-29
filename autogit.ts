function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  const sub: number[] = [];

  for (let num of nums) {
    // Binary search for the index to place current number
    let left = 0;
    let right = sub.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (sub[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // If left is equal to length of sub, append num
    // else replace element at left
    if (left < sub.length) {
      sub[left] = num;
    } else {
      sub.push(num);
    }
  }

  return sub.length;
}
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(arr)); // Output: 4
// The longest increasing subsequence is [2, 3, 7, 101]
