def longest_common_prefix(strs):
    if not strs:
        return ""
    
    min_str = min(strs, key=len)
    
    for i, char in enumerate(min_str):
        for other in strs:
            if other[i] != char:
                return min_str[:i]
    
    return min_str

# Example usage
strings = ["flower", "flow", "flight"]
print(longest_common_prefix(strings))  # Output: "fl"
