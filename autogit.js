const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];

const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
const middleIdx = Math.floor(mergedArray.length / 2);

let median;

if (mergedArray.length % 2 === 0) {
  median = (mergedArray[middleIdx - 1] + mergedArray[middleIdx]) / 2;
} else {
  median = mergedArray[middleIdx];
}

console.log('Median:', median);
