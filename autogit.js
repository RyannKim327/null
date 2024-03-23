function longestIncreasingSubsequence(arr) {
    let n = arr.length;
    let lisLength = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lisLength[i] < lisLength[j] + 1) {
                lisLength[i] = lisLength[j] + 1;
            }
        }
    }

    let maxLength = 0;
    for (let i = 0; i < n; i++) {
        if (lisLength[i] > maxLength) {
            maxLength = lisLength[i];
        }
    }

    return maxLength;
}

// Example usage
let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(longestIncreasingSubsequence(arr)); // Output: 6
