def longest_common_substring(str1, str2):
    m = len(str1)
    n = len(str2)
    
    # Initialize a matrix to store the lengths of the longest common suffix
    dp = [[0] * (n+1) for _ in range(m+1)]
    
    max_len = 0
    end_index = 0
    
    for i in range(1, m+1):
        for j in range(1, n+1):
            if str1[i-1] == str2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
                if dp[i][j] > max_len:
                    max_len = dp[i][j]
                    end_index = i
    
    return str1[end_index-max_len:end_index]

# Example usage
str1 = "ABCXYZ"
str2 = "DEFGXYZ"
result = longest_common_substring(str1, str2)
print(result)  # Output: "XYZ"
