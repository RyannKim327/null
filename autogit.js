function findLongestIncreasingSubsequence(arr):
    n = length of arr
    dp = array of size n, initialized with 1's
    
    for i from 1 to n-1:
        for j from 0 to i-1:
            if arr[i] > arr[j]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    max_length = maximum value in dp
    
    return max_length
