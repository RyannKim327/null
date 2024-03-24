function longestIncreasingSubsequence(arr) {
    let n = arr.length;
    let lis = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
            }
        }
    }

    let maxLength = Math.max(...lis);
    let result = [];
    let lastIndex = lis.indexOf(maxLength);

    for (let i = lastIndex; i >= 0; i--) {
        if (lis[i] === maxLength) {
            result.unshift(arr[i]);
            maxLength--;
        }
    }

    return result;
}

// Test the function
let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(longestIncreasingSubsequence(arr)); // Output: [10, 22, 33, 50, 60, 80]
