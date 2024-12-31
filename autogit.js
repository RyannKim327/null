def longest_common_substring(s1, s2):
    m = len(s1)
    n = len(s2)

    # Create a 2D array to store the lengths of common substrings
    dp = [[0] * (n+1) for _ in range(m+1)]

    max_len = 0
    end_index = 0

    for i in range(1, m+1):
        for j in range(1, n+1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
                if dp[i][j] > max_len:
                    max_len = dp[i][j]
                    end_index = i
            else:
                dp[i][j] = 0

    start_index = end_index - max_len
    return s1[start_index:end_index]

# Example usage
s1 = "abcdefg"
s2 = "xyzabcde"
print(longest_common_substring(s1, s2))
