function maxSubArray(arr) {
    let maxEndingHere = 0;
    let maxSoFar = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Example usage
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr)); // Output: 6 (subarray [4, -1, 2, 1])
