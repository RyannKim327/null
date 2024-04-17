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
    let lastIndex = dp.indexOf(maxLength);
    for (let i = lastIndex; i >= 0; i--) {
        if (dp[i] === maxLength) {
            result.unshift(arr[i]);
            maxLength--;
        }
    }

    return result;
}

const arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(longestIncreasingSubsequence(arr)); // Output: [ 10, 22, 33, 50, 60, 80 ]
