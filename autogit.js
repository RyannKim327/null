function longestIncreasingSubsequence(arr) {
    const n = arr.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
    }

    let maxLength = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] > maxLength) {
            maxLength = dp[i];
        }
    }

    let result = [];
    let currentMaxLength = maxLength;
    for (let i = n - 1; i >= 0; i--) {
        if (dp[i] === currentMaxLength) {
            result.unshift(arr[i]);
            currentMaxLength--;
        }
    }

    return {
        length: maxLength,
        sequence: result
    };
}

// Example usage
const arr = [3, 10, 2, 1, 20];
const lisResult = longestIncreasingSubsequence(arr);
console.log(lisResult);
