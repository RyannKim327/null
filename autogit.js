function findLongestIncreasingSubsequence(arr) {
    const n = arr.length;
    const lis = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
            }
        }
    }

    let maxLength = 0;
    for (let i = 0; i < n; i++) {
        if (lis[i] > maxLength) {
            maxLength = lis[i];
        }
    }

    const longestIncreasingSubsequence = [];
    let seqLength = maxLength;
    for (let i = n - 1; i >= 0 && seqLength > 0; i--) {
        if (lis[i] === seqLength) {
            longestIncreasingSubsequence.unshift(arr[i]);
            seqLength--;
        }
    }

    return longestIncreasingSubsequence;
}

const arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);
console.log("Longest Increasing Subsequence:", longestIncreasingSubsequence);
