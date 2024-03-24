function findLIS(arr) {
    if (arr.length === 0) return 0;

    const n = arr.length;
    const dp = new Array(n);
    dp.fill(1);

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

    return maxLength;
}

const arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const lisLength = findLIS(arr);
console.log("Length of Longest Increasing Subsequence:", lisLength);
