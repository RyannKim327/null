function longestIncreasingSubsequence(arr) {
    const n = arr.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] <= dp[j]) {
                dp[i] = dp[j] + 1;
            }
        }
    }

    let maxLength = 1;
    for (let i = 1; i < n; i++) {
        if (dp[i] > maxLength) {
            maxLength = dp[i];
        }
    }

    const lis = [];
    let currentLength = maxLength;

    for (let i = n - 1; i >= 0; i--) {
        if (dp[i] === currentLength) {
            lis.unshift(arr[i]);
            currentLength--;
        }
    }

    return lis;
}

// Usage example
const array = [3, 10, 2, 1, 20];
const lis = longestIncreasingSubsequence(array);
console.log(lis); // Output: [3, 10, 20]
