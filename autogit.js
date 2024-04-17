function longestIncreasingSubsequence(arr) {
    // Initialize an array to store the length of longest increasing subsequence ending at each index
    let dp = new Array(arr.length).fill(1);
    
    // Iterate over the array to calculate the length of longest increasing subsequence
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    // Find the maximum length in the dp array
    let maxLength = Math.max(...dp);
    
    // Build the longest increasing subsequence using the dp array
    let index = dp.indexOf(maxLength);
    let lis = [arr[index]];
    
    for (let i = index - 1; i >= 0; i--) {
        if (arr[i] < arr[index] && dp[i] === dp[index] - 1) {
            lis.unshift(arr[i]);
            index = i;
        }
    }
    
    return lis;
}

// Test the function
let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(longestIncreasingSubsequence(arr)); // Output: [10, 22, 33, 50, 60, 80]
