function longestIncreasingSubsequence(arr: number[]): number {
    if (arr.length === 0) return 0;

    const dp: number[] = new Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

// Example usage
const array = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubsequence(array)); // Output: 4
function longestIncreasingSubsequence(arr: number[]): number {
    const tails: number[] = [];

    for (let num of arr) {
        let left = 0;
        let right = tails.length;

        // Binary search to find the insertion point
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // If num is greater than all elements in tails
        if (left === tails.length) {
            tails.push(num);
        } else {
            // Update tails
            tails[left] = num;
        }
    }

    return tails.length;
}

// Example usage
const array = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(longestIncreasingSubsequence(array)); // Output: 4
