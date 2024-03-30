function maxSubarray(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Example usage
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarray(arr)); // Output: 6
