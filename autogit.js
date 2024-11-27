def longest_common_prefix(strings):
    if not strings:
        return ""

    min_len = min(map(len, strings))
    for i in range(min_len):
        if any(strings[j][i] != strings[0][i] for j in range(1, len(strings))):
            return strings[0][:i]

    return strings[0][:min_len]

# Example usage
strings = ["flower", "flow", "flight"]
print(longest_common_prefix(strings))
