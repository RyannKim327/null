def longest_common_substring(s1, s2):
    m = len(s1)
    n = len(s2)

    # Create a table to store the length of the longest common suffix
    # of s1[:i] and s2[:j]
    table = [[0] * (n + 1) for _ in range(m + 1)]

    # Variables to keep track of the longest common substring and its length
    longest_length = 0
    end_index = 0

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                table[i][j] = table[i - 1][j - 1] + 1
                if table[i][j] > longest_length:
                    longest_length = table[i][j]
                    end_index = i
            else:
                table[i][j] = 0

    start_index = end_index - longest_length
    return s1[start_index:end_index]

s1 = "abcdef"
s2 = "bcde"
result = longest_common_substring(s1, s2)
print(result)
