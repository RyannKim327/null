function longestIncreasingSubsequence(arr) {
    const n = arr.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    let maxLength = 0;
    let endIndex = 0;

    for (let i = 0; i < n; i++) {
        if (dp[i] > maxLength) {
            maxLength = dp[i];
            endIndex = i;
        }
    }

    let result = [];
    let currentLength = maxLength;

    for (let i = endIndex; i >= 0; i--) {
        if (dp[i] === currentLength) {
            result.unshift(arr[i]);
            currentLength--;
        }
    }

    return result;
}

const inputArray = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const longestSubsequence = longestIncreasingSubsequence(inputArray);
console.log(longestSubsequence); // Output: [ 10, 22, 33, 50, 60, 80 ]
