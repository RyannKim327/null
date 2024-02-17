function findLongestIncreasingSubsequence(arr) {
    let n = arr.length;
    let lis = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
            }
        }
    }

    let maxLength = Math.max(...lis);
    let result = [];

    for (let i = n - 1; i >= 0; i--) {
        if (lis[i] === maxLength) {
            result.unshift(arr[i]);
            maxLength--;
        }
    }

    return result;
}

// Example
const arr = [3, 10, 2, 1, 20];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(arr);
console.log(longestIncreasingSubsequence); // Output: [3, 10, 20]
