def longest_common_substring(str1, str2):
    m = len(str1)
    n = len(str2)
    
    # Initialize a 2D table to store the lengths of common substrings
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Variable to store the length of the longest common substring
    max_len = 0
    
    # Variable to store the ending index of the longest common substring
    end_index = 0
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                if dp[i][j] > max_len:
                    max_len = dp[i][j]
                    end_index = i - 1
    
    start_index = end_index - max_len + 1
    return str1[start_index:end_index+1]

# Test the function
str1 = "abcdefg"
str2 = "xyzabcde"
print(longest_common_substring(str1, str2))
