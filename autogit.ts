function longestIncreasingSubsequence(arr: number[]): number {
    if (arr.length === 0) return 0;

    // Initialize an array to store the lengths of the longest increasing subsequence
    const dp: number[] = new Array(arr.length).fill(1);
    
    let maxLength = 1; // Variable to keep track of the maximum length found

    // Build the dp array
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]); // Update maxLength
    }

    return maxLength; // Return the maximum length found
}

// Example usage
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubsequence(arr)); // Output: 4
