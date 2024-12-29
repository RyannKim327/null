def longest_common_prefix(strs):
    if not strs:
        return ""

    min_len = min(map(len, strs))
    for i in range(min_len):
        for j in range(1, len(strs)):
            if strs[j][i] != strs[0][i]:
                return strs[0][:i]

    return strs[0][:min_len]

# Example
strings = ["leetcode", "leet", "leeds"]
print(longest_common_prefix(strings))  # Output: "lee"
