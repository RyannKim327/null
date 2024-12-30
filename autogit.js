def longest_common_substring(str1, str2):
    m = len(str1)
    n = len(str2)
    
    # Create a 2D table to store the length of the longest common suffix
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Variables to store the length of the longest common substring and its ending position
    max_length = 0
    end_position = 0
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                if dp[i][j] > max_length:
                    max_length = dp[i][j]
                    end_position = i
    
    start_position = end_position - max_length
    return str1[start_position:end_position]

# Example usage
str1 = "abcdefg"
str2 = "xyzabcd"
print(longest_common_substring(str1, str2))  # Output: "abcd"
