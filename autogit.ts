function maxSubArray(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let maxCurrent = arr[0];
    let maxGlobal = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]); // Decide to add the current element or start new subarray
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent; // Update the global maximum if necessary
        }
    }

    return maxGlobal;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubArray(array);
console.log(`The maximum sum of the subarray is: ${maxSum}`); // Output: 6
