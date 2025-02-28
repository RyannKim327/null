function longestIncreasingSubsequence(arr: number[]): number {
    const n = arr.length;
    if (n === 0) return 0;

    // Initialize the dp array
    const dp: number[] = new Array(n).fill(1);
    
    // Build the dp array
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    // Find the maximum value in dp array
    return Math.max(...dp);
}

// Example usage
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
const lisLength = longestIncreasingSubsequence(arr);
console.log(`Length of Longest Increasing Subsequence: ${lisLength}`); // Output: 4
