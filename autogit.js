def longest_common_subsequence(str1, str2):
    m = len(str1)
    n = len(str2)
    
    # Build a 2D table to store the lengths of the longest common subsequences
    dp = [[0] * (n+1) for _ in range(m+1)]
    
    # Fill up the table using dynamic programming
    for i in range(1, m+1):
        for j in range(1, n+1):
            if str1[i-1] == str2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    # Reconstruct the longest common subsequence
    lcs = ""
    i, j = m, n
    while i > 0 and j > 0:
        if str1[i-1] == str2[j-1]:
            lcs = str1[i-1] + lcs
            i -= 1
            j -= 1
        elif dp[i-1][j] > dp[i][j-1]:
            i -= 1
        else:
            j -= 1
    
    return lcs

# Example
str1 = "abcdef"
str2 = "acbcf"
print(longest_common_subsequence(str1, str2))  # Output: "abcf"
