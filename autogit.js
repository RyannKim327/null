function findLongestIncreasingSubsequence(arr) {
    let n = arr.length;
    
    let dp = new Array(n).fill(1);
    let maxLength = 1;

    for(let i = 1; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if(arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }

    let result = [];
    let endIndex = dp.indexOf(maxLength);
    result.unshift(arr[endIndex]);

    for(let i = endIndex - 1; i >= 0; i--) {
        if(arr[i] < arr[endIndex] && dp[i] === dp[endIndex] - 1) {
            result.unshift(arr[i]);
            endIndex = i;
        }
    }

    return result;
}

// Example
let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
let lis = findLongestIncreasingSubsequence(arr);
console.log(lis);
