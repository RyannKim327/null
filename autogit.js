def longest_common_substring(s1, s2):
    m = len(s1)
    n = len(s2)
    longest_length = 0
    ending_index = 0

    # Create a 2D array to store the lengths of the longest common suffixes
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                if dp[i][j] > longest_length:
                    longest_length = dp[i][j]
                    ending_index = i
            else:
                dp[i][j] = 0

    if longest_length == 0:
        return ""

    start_index = ending_index - longest_length
    return s1[start_index:ending_index]

# Test the function
s1 = "abcdefg"
s2 = "xyzabcde"
print(longest_common_substring(s1, s2))  # Output: "abcde"
