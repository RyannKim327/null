def longest_common_substring(str1, str2):
    m = len(str1)
    n = len(str2)

    # Create a 2D table to store the lengths of longest common suffixes of substrings
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    max_length = 0
    end_index = 0

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                if dp[i][j] > max_length:
                    max_length = dp[i][j]
                    end_index = i
            else:
                dp[i][j] = 0

    start_index = end_index - max_length
    return str1[start_index:end_index]

# Example
str1 = "abcdef"
str2 = "bcdf"
print(longest_common_substring(str1, str2))
