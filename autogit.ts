function longestIncreasingSubsequence(arr: number[]): number[] {
    const n = arr.length;
    if (n === 0) return [];

    // dp[i] will hold the length of the LIS ending at index i
    const dp = Array(n).fill(1);
    // prev[i] will store the previous index in the LIS ending at i
    const prev = Array(n).fill(-1);

    let maxLength = 1;
    let maxIndex = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }

        if (dp[i] > maxLength) {
            maxLength = dp[i];
            maxIndex = i;
        }
    }

    // Reconstruct the LIS
    const lis: number[] = [];
    for (let i = maxIndex; i !== -1; i = prev[i]) {
        lis.push(arr[i]);
    }
    lis.reverse();

    return lis;
}

// Example usage
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubsequence(arr)); // Output: [2, 3, 7, 101]
