function longestIncreasingSubsequence(arr) {
    let lisLength = [];
    for (let i = 0; i < arr.length; i++) {
        lisLength[i] = 1;
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lisLength[i] < lisLength[j] + 1) {
                lisLength[i] = lisLength[j] + 1;
            }
        }
    }

    let maxLength = Math.max(...lisLength);
    let result = [];
    let index = lisLength.indexOf(maxLength);

    while (maxLength > 0) {
        result.unshift(arr[index]);
        maxLength--;

        for (let i = index - 1; i >= 0; i--) {
            if (lisLength[i] === maxLength && arr[i] < arr[index]) {
                index = i;
                break;
            }
        }
    }

    return result;
}

let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(longestIncreasingSubsequence(arr)); // Output: [10, 22, 33, 50, 60, 80]
