function longestIncreasingSubsequence(arr: number[]): number {
    if (arr.length === 0) return 0;

    const n = arr.length;
    const dp: number[] = new Array(n).fill(1); // Initialize dp array

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp); // Return the maximum value in dp array
}

// Example usage
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubsequence(arr)); // Output: 4
function longestIncreasingSubsequence(arr: number[]): number {
    if (arr.length === 0) return 0;

    const tails: number[] = [];

    for (const num of arr) {
        let left = 0, right = tails.length;

        // Binary search to find the insertion point
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // Replace or append
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num;
        }
    }

    return tails.length; // Length of LIS
}

// Example usage
const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubsequence(arr)); // Output: 4
