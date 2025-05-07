function maxSubArraySum(arr: number[]): number {
    if (arr.length === 0) return 0;

    let maxSoFar = arr[0];
    let currentMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // Either extend the existing subarray or start a new subarray at current element
        currentMax = Math.max(arr[i], currentMax + arr[i]);

        // Update max if currentMax is bigger
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    return maxSoFar;
}
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(nums));  // Output: 6 (subarray [4, -1, 2, 1])
