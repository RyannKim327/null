def common_prefix(strings):
    if not strings:
        return ""

    longest_prefix = strings[0]

    for string in strings[1:]:
        i = 0
        while i < len(longest_prefix) and i < len(string) and longest_prefix[i] == string[i]:
            i += 1
        longest_prefix = longest_prefix[:i]

    return longest_prefix

# Example usage:
strings = ["apple", "appetizer", "application"]
result = common_prefix(strings)
print("Longest common prefix:", result)
