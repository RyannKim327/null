function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
function radixSort(nums) {
  const maxDigitsCount = mostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}
const numbers = [56, 2, 478, 235, 9];
const sortedNumbers = radixSort(numbers);
console.log(sortedNumbers); // Output: [2, 9, 56, 235, 478]
