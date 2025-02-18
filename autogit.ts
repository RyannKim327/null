function maxSubArray(nums: number[]): number {
    // Initialize variables
    let maxSoFar = nums[0]; // To keep track of the overall maximum sum
    let maxEndingHere = nums[0]; // To keep track of the maximum sum ending at the current position
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Update maxEndingHere to the maximum of the current value or the sum of maxEndingHere and the current value
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        
        // Update maxSoFar if maxEndingHere is greater than it
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar; // Return the overall maximum sum of the subarray
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(array);
console.log(result); // Output: 6, which corresponds to the subarray [4, -1, 2, 1]
