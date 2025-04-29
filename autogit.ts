function maxSubArraySum(arr: number[]): { maxSum: number, start: number, end: number } {
    if (arr.length === 0) {
        return { maxSum: 0, start: -1, end: -1 }; // Or handle empty array as needed
    }

    let maxSum = arr[0];
    let currentSum = 0;
    let start = 0;
    let maxStart = 0;
    let maxEnd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum <= 0) {
            currentSum = arr[i];
            start = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxStart = start;
            maxEnd = i;
        }
    }

    return { maxSum, start: maxStart, end: maxEnd };
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArraySum(array);
console.log(`Maximum sum: ${result.maxSum}, from index ${result.start} to ${result.end}`);
