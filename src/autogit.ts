function findLongestIncreasingSubsequence(arr: number[]): number {
    if (arr.length === 0) return 0;

    // Step 1: Initialize the dp array
    const dp: number[] = new Array(arr.length).fill(1);

    // Step 2: Fill the dp array
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // Step 3: Find the maximum value in dp array
    return Math.max(...dp);
}

// Example usage
const array = [10, 9, 2, 5, 3, 7, 101, 18];
console.log("Length of Longest Increasing Subsequence:", findLongestIncreasingSubsequence(array));
function findLongestIncreasingSubsequenceOptimized(arr: number[]): number {
    if (arr.length === 0) return 0;

    const tails: number[] = [];

    for (const num of arr) {
        let left = 0, right = tails.length;

        // Binary search to find the insertion point
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // Update tails array
        if (left === tails.length) {
            tails.push(num); // Extend the LIS
        } else {
            tails[left] = num; // Replace to maintain smallest tail
        }
    }

    return tails.length;
}

// Example usage
const array = [10, 9, 2, 5, 3, 7, 101, 18];
console.log("Length of Longest Increasing Subsequence (Optimized):", findLongestIncreasingSubsequenceOptimized(array));
