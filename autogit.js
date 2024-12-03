def longest_common_prefix(strings):
    if not strings:
        return ''
    
    for i in range(len(strings[0])):
        for string in strings[1:]:
            if i >= len(string) or strings[0][i] != string[i]:
                return strings[0][:i]
    
    return strings[0]

# Example
strings = ["flower", "flow", "flight"]
print(longest_common_prefix(strings))  # Output: "fl"
