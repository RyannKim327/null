def longest_common_substring(s1, s2):
    m = len(s1)
    n = len(s2)

    # Create a table to store the lengths of the common substrings
    dp = [[0 for _ in range(n+1)] for _ in range(m+1)]

    max_length = 0
    end_index = 0

    for i in range(1, m+1):
        for j in range(1, n+1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
                if dp[i][j] > max_length:
                    max_length = dp[i][j]
                    end_index = i
            else:
                dp[i][j] = 0

    start_index = end_index - max_length
    return s1[start_index:end_index]

# Test the function
s1 = "abcdefg"
s2 = "xyabcz"
print(longest_common_substring(s1, s2))  # Output: "abc"
