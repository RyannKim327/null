function longestIncreasingSubsequence(arr: number[]): number {
    if (arr.length === 0) return 0;
    
    const dp: number[] = new Array(arr.length).fill(1); // Initialize DP array

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // The length of the longest increasing subsequence
    return Math.max(...dp);
}

// Example usage
const array = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const lisLength = longestIncreasingSubsequence(array);
console.log(`Length of Longest Increasing Subsequence: ${lisLength}`);
