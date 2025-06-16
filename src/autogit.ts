function maxSubArray(arr: number[]): { maxSum: number, start: number, end: number } {
    if (arr.length === 0) {
        return { maxSum: 0, start: -1, end: -1 };
    }

    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0;
    let tempStart = 0;
    let end = 0;

    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] < arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return { maxSum, start, end };
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(arr);
console.log(result); // { maxSum: 6, start: 3, end: 6 }
