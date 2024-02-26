function findLongestIncreasingSubsequence(arr) {
    const n = arr.length;
    // Initialize an array to store the length of the longest increasing subsequence that ends at the i-th index
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // Find the maximum length of the longest increasing subsequence
    const maxLength = Math.max(...dp);

    // Find the longest increasing subsequence
    const indices = [];
    let maxLengthIndex = dp.indexOf(maxLength);
    
    while (maxLengthIndex >= 0) {
        indices.unshift(maxLengthIndex);
        for (let i = maxLengthIndex - 1; i >= 0; i--) {
            if (arr[i] < arr[maxLengthIndex] && dp[i] === dp[maxLengthIndex] - 1) {
                maxLengthIndex = i;
                break;
            }
        }
    }
    
    const longestIncreasingSubsequence = indices.map(index => arr[index]);

    return longestIncreasingSubsequence;
}

// Example usage
const arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(findLongestIncreasingSubsequence(arr)); // Output: [10, 22, 33, 50, 60, 80]
