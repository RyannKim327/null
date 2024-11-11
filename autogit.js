def longest_common_prefix(strs):
    if not strs:
        return ""
    
    min_len = min(len(s) for s in strs)
    prefix = ""
    
    for i in range(min_len):
        char = strs[0][i]
        if all(s[i] == char for s in strs):
            prefix += char
        else:
            break
    
    return prefix

# Example usage
strings = ["flower", "flow", "flight"]
result = longest_common_prefix(strings)
print(result)  # Output: "fl"
