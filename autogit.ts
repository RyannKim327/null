function maxSubArray(arr: number[]): number {
    if (arr.length === 0) return 0;

    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // update max ending here by including current element or starting new subarray
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        // update max so far if necessary
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}
