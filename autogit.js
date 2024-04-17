function findLongestIncreasingSubsequence(arr) {
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
    for (let len of dp) {
        if (len > maxLength) {
            maxLength = len;
        }
    }

    const result = [];
    let endIndex = dp.indexOf(maxLength);

    while (endIndex >= 0) {
        result.unshift(arr[endIndex]);
        maxLength--;
        
        for (let i = 0; i < endIndex; i++) {
            if (dp[i] === maxLength && arr[i] < arr[endIndex]) {
                endIndex = i;
                break;
            }
        }
    }

    return result;
}

const arr = [3, 10, 2, 1, 20];
console.log(findLongestIncreasingSubsequence(arr)); // Output: [3, 10, 20]
