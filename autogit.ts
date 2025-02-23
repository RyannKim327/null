function maximumSumSubarray(arr: number[]): number {
    if (arr.length === 0) return 0; // Handle empty array case

    let maxSoFar = arr[0]; // Initialize max sum to the first element
    let maxEndingHere = arr[0]; // Initialize current maximum sum

    for (let i = 1; i < arr.length; i++) {
        // Update maxEndingHere
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        
        // Update maxSoFar
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Example usage
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maximumSumSubarray(nums)); // Output: 6 (subarray: [4, -1, 2, 1])
