def longest_common_substring(string1, string2):
    m = len(string1)
    n = len(string2)

    # Create a 2D table to store the lengths of common substrings
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    max_length = 0
    end_index = 0

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if string1[i - 1] == string2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                if dp[i][j] > max_length:
                    max_length = dp[i][j]
                    end_index = i
            else:
                dp[i][j] = 0

    start_index = end_index - max_length
    longest_common_substring = string1[start_index:end_index]

    return longest_common_substring
string1 = "programming"
string2 = "programmer"
result = longest_common_substring(string1, string2)
print(result)  # Output: "program"
