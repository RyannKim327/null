def longest_common_prefix(strings):
    if not strings:
        return ""

    prefix = strings[0]
    for string in strings[1:]:
        i = 0
        while i < len(prefix) and i < len(string) and prefix[i] == string[i]:
            i += 1
        prefix = prefix[:i]

    return prefix

# Example usage
strings = ["flower", "flow", "flight"]
print(longest_common_prefix(strings)) # Output: "fl"
