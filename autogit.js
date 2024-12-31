def longest_common_subsequence(str1, str2):
    m = len(str1)
    n = len(str2)

    # Create a 2D list to store the lengths of longest common subsequences
    lcs = [[0] * (n + 1) for i in range(m + 1)]

    # Build the lcs matrix
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                lcs[i][j] = lcs[i - 1][j - 1] + 1
            else:
                lcs[i][j] = max(lcs[i - 1][j], lcs[i][j - 1])

    # Find the longest common subsequence by tracing back the lcs matrix
    subsequence = ""
    i, j = m, n
    while i > 0 and j > 0:
        if str1[i - 1] == str2[j - 1]:
            subsequence = str1[i - 1] + subsequence
            i -= 1
            j -= 1
        elif lcs[i - 1][j] > lcs[i][j - 1]:
            i -= 1
        else:
            j -= 1

    return subsequence

# Example usage
str1 = "ABCBDAB"
str2 = "BDCAB"
print(longest_common_subsequence(str1, str2))  # Output: "BCAB"
